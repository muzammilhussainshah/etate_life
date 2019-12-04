import React, { Component, } from 'react';
import { Button, Form, Row, Col, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import AppHeader from './common/AppHeader';
import BreadCrum from './common/BreadCrum';
import LargeList from './common/largeList';
import Input from './common/input';
import DisplayHours from './DisplayHours';
import { connect } from "react-redux";
import AddHours from './AddHours';
import { MDBIcon, MDBFileInput } from 'mdbreact';
import Select from 'react-select';
import { errorCall,loaderCall, createClinic } from '../store/action/action';
import ActivityIndicator from './common/ActivityIndicator';

const options = [
  { value: 'action', label: 'action' },
  { value: 'another action', label: 'another action' },
];

class BussinesCatogery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ClinicImage: "", etateId: "",
      BussinesName: "", registrationNumber: "",
      BussinesAddres: "", MobileNumber: "",
      bussinesCatogery: "", addHours: [],
      arrayOfMorning: [], arrayOfAfternoon: [],
      arrayOfEvening: [],myClinicsInComponent:""
    };
  }

  handleSwitchChange = nr => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber]
    });
  }
  image(file) {
    // console.log(file[0], "555")

    var reader = new FileReader();

    reader.onloadend = () => {
      this.setState({ ClinicImage: reader.result })
      console.log(reader.result, 'result here')
    }
    if (file) {
      reader.readAsDataURL(file);
    }

  }
  createClinic() {
    const { ClinicImage, etateId, BussinesName, registrationNumber, BussinesAddres, MobileNumber,
      bussinesCatogery, addHours, arrayOfMorning, arrayOfAfternoon, arrayOfEvening,
    } = this.state
    console.log("start",
      ClinicImage, etateId,
      BussinesName, registrationNumber,
      BussinesAddres, MobileNumber,
      bussinesCatogery,
      arrayOfMorning, arrayOfAfternoon,
      arrayOfEvening, "close",
    )
    let validateOpt = {
      ClinicImage, etateId,
      BussinesName, registrationNumber,
      BussinesAddres, MobileNumber,
      bussinesCatogery: bussinesCatogery.value
    }
    let validate = true
    console.log(validateOpt, "validateOpt")
    for (var key in validateOpt) {
      if (validateOpt[key] === "") {
        this.props.loaderCall()

        // alert(key + " is required")
        validate = false
        this.props.errorCall(key + " is required")
        break
      }
    }

    if (validate) {
      validateOpt.arrayOfMorning = arrayOfMorning
      validateOpt.arrayOfAfternoon = arrayOfAfternoon
      validateOpt.arrayOfEvening = arrayOfEvening
      this.props.createClinic(validateOpt)
    }


  }
  componentWillReceiveProps(nextProps){
    this.setState({
      myClinicsInComponent:nextProps.myClinics
    })
  }
  render() {
    const { isLoader, isError, errorMessage,myClinics } = this.props
    const { myClinicsInComponent } = this.state
    // console.log(myClinics,"myClinicsmyClinics")
    console.log( this.props.myClinics,"render")

    return (
      <div style={{ backgroundColor: "#fff", }}>
        <AppHeader />
        <BreadCrum />

        <div style={{ display: "flex", flexBasis: "100%", marginTop: "3%", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ flexBasis: "40%", justifyContent: "center", display: "flex", borderRight: "2px solid", borderRightColor: "#F4F6FA", }}>
            <LargeList heading="Clinics name" data={myClinicsInComponent} deleteIcon="trash-alt" collection="clinics"/>
          </div>
          <div style={{ flexBasis: "60%", }}>
            <div style={{}}>
              {
                this.state.ClinicImage ?
                  <img width="10%" style={{ minWidth: 150 }} src={this.state.ClinicImage} /> :
                  <img width="10%" style={{ minWidth: 150 }} src={require('../assets/default.png')} />
              }
            </div>
            <div style={{
              display: "flex", justifyContent: "center", borderBottom: "2px solid #F0F0F0",
            }}>

              <Form style={{width:400}}>
                <Form.Group as={Row} controlId="formHorizontalEmail" style={{ padding: 15 }}>
                  <div className="custom-file" >
                    <input
                      onChange={(e) => this.image(e.target.files[0])}
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                      Upload a photo of the clinic
                    </label>
                  </div>
                </Form.Group>

                <Input label="Etat ID" type="text" placeholder="Etat ID" func={(v) => { this.setState({ etateId: v }) }} />
                <Input label="Business name" type="text" placeholder="Business name" func={(v) => { this.setState({ BussinesName: v }) }} />
                <Input label="Business registration number" type="text" placeholder="Business registration number" func={(v) => { this.setState({ registrationNumber: v }) }} />
                <Input label="Business address" type="text" placeholder="Business address" func={(v) => { this.setState({ BussinesAddres: v }) }} />
                <Input label="Mobile number" type="number" placeholder="Mobile number" func={(v) => { this.setState({ MobileNumber: v }) }} />

                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={5}>
                    Bussines catogery
                         </Form.Label>
                  <Col sm={7}>
                    <Select
                      value={this.state.bussinesCatogery}
                      onChange={(value) => this.setState({ bussinesCatogery: value })}
                      options={options}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </div>
            {/* opening hours */}
            {/* <DisplayHours createHours={this.state.addHours}/> */}
            <AddHours func={(addHours) => {
              let arrayOfMapping = this.state[`arrayOf${addHours.addHours}`]
              console.log(addHours, "***")
              arrayOfMapping.push(addHours)
              this.setState({ [`arrayOf${addHours.addHours}`]: arrayOfMapping })
            }} />

            <div style={{ display: "flex", justifyContent: "center", margin: "2%", flexWrap: "wrap" }}>
              <div style={{ width: 220, height: 220, margin: "2%", color: "#C2BDBD", }}>
                {/* <div style={{ fontSize: 25 }}>

                  Morning
               </div> */}
                <div style={{ background: "#F0F0F0", padding: "3%" }}>
                  <h3 style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>
                    Morning:
              </h3>
                  <div style={{ height: '200px', background: "#F0F0F0", overflowX: 'scroll', }} >
                    <ListGroup>
                      {this.state.arrayOfMorning && this.state.arrayOfMorning.map((v, i) => {
                        console.log(v, "999999999")
                        return (
                          <a>
                            <ListGroup.Item style={{
                              webkitBoxShadow: "3px 3px 3px #9E9E9E",
                              mozBoxShadow: "3px 3px 3px #9E9E9E",
                              boxShadow: "3px 3px 3px #9E9E9E", flexDirection: "row", display: "flex", width: 185, alignItems: "center"
                            }}>
                              <div style={{ display: "flex", alignItems: "center" }}>
                              </div>
                              <div style={{ marginLeft: 10 }}>
                                <div style={{ color: "#8C8888" }}>
                                  {v.timeFrom} to {v.timeTo}
                                </div>
                                <div style={{ fontSize: 11, color: "#8C8888" }}>
                                </div>
                              </div>
                              <div style={{ justifyContent: "flex-end", display: "flex", position: "absolute", right: 10 }}>
                                <MDBIcon far icon="trash-alt" className="float-right"
                                  onClick={() => {
                                    let arrayOfMorning = this.state.arrayOfMorning
                                    arrayOfMorning.splice(i, 1)
                                    this.setState({ arrayOfMorning })
                                  }}
                                />
                              </div>

                            </ListGroup.Item>
                          </a>
                        )
                      })}
                    </ListGroup>
                  </div>
                </div>
              </div>
              <div style={{ width: 220, height: 220, margin: "2%", color: "#C2BDBD", }}>
                {/* <div style={{ fontSize: 25 }}>

                  Morning
               </div> */}
                <div style={{ background: "#F0F0F0", padding: "3%" }}>
                  <h3 style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>
                    Afternoon:
              </h3>
                  <div style={{ height: '200px', background: "#F0F0F0", overflowX: 'scroll', }} >
                    <ListGroup>
                      {this.state.arrayOfAfternoon.map((v, i) => {
                        return (
                          <a>
                            <ListGroup.Item style={{
                              webkitBoxShadow: "3px 3px 3px #9E9E9E",
                              mozBoxShadow: "3px 3px 3px #9E9E9E",
                              boxShadow: "3px 3px 3px #9E9E9E", flexDirection: "row", display: "flex", width: 185, alignItems: "center"
                            }}>

                              <div style={{ display: "flex", alignItems: "center" }}>
                              </div>
                              <div style={{ marginLeft: 10 }}>
                                <div style={{ color: "#8C8888" }}>
                                  {v.timeFrom} to {v.timeTo}

                                </div>
                                <div style={{ fontSize: 11, color: "#8C8888" }}>
                                </div>
                              </div>
                              <div style={{ justifyContent: "flex-end", display: "flex", position: "absolute", right: 10 }}>
                                <MDBIcon far icon="trash-alt" className="float-right"
                                  onClick={() => {
                                    let arrayOfAfternoon = this.state.arrayOfAfternoon
                                    arrayOfAfternoon.splice(i, 1)
                                    this.setState({ arrayOfAfternoon })
                                  }}
                                />
                              </div>

                            </ListGroup.Item>
                          </a>
                        )
                      })}
                    </ListGroup>
                  </div>
                </div>
              </div> <div style={{ width: 220, height: 220, margin: "2%", color: "#C2BDBD", }}>
                {/* <div style={{ fontSize: 25 }}>

                  Morning
               </div> */}
                <div style={{ background: "#F0F0F0", padding: "3%" }}>
                  <h3 style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>
                    Evening:
              </h3>
                  <div style={{ height: '200px', background: "#F0F0F0", overflowX: 'scroll', }} >
                    <ListGroup>
                      {this.state.arrayOfEvening.map((v, i) => {
                        return (
                          <a>
                            <ListGroup.Item style={{
                              webkitBoxShadow: "3px 3px 3px #9E9E9E",
                              mozBoxShadow: "3px 3px 3px #9E9E9E",
                              boxShadow: "3px 3px 3px #9E9E9E", flexDirection: "row", display: "flex", width: 185, alignItems: "center"
                            }}>

                              <div style={{ display: "flex", alignItems: "center" }}>
                              </div>
                              <div style={{ marginLeft: 10 }}>
                                <div style={{ color: "#8C8888" }}>
                                  {v.timeFrom} to {v.timeTo}

                                </div>
                                <div style={{ fontSize: 11, color: "#8C8888" }}>
                                </div>
                              </div>
                              <div style={{ justifyContent: "flex-end", display: "flex", position: "absolute", right: 10 }}>
                                <MDBIcon far icon="trash-alt" className="float-right"
                                  onClick={() => {
                                    let arrayOfEvening = this.state.arrayOfEvening
                                    arrayOfEvening.splice(i, 1)
                                    this.setState({ arrayOfEvening })
                                  }}
                                />
                              </div>

                            </ListGroup.Item>
                          </a>
                        )
                      })}
                    </ListGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </center> */}
        <div className="float-right" style={{ justifyContent: "flex-end", display: "flex", padding: "5%" }}>
          {isError && <div><span style={{ color: "red", fontSize: 13 }}>{errorMessage}</span></div>}
          {isLoader ?
            <Button  variant="primary">
              <ActivityIndicator />
            </Button> :
            <Button onClick={() => this.createClinic()} variant="primary">Add</Button>
          }
           <a href="/addDoctor">

          <Button variant="primary">Next</Button>
           </a>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    isLoader: state.root.isLoader,
    isError: state.root.isError,
    errorMessage: state.root.errorMessage,
    myClinics: state.root.myClinics,
    //   errorInStore: state.root.error,
  };
};
function mapDispatchToProps(dispatch) {
  return ({
    errorCall: (errorMessage) => {
      dispatch(errorCall(errorMessage)
      )
    },
    loaderCall: () => {
      dispatch(loaderCall()
      )
    },
    createClinic: (clinic) => {
      dispatch(createClinic(clinic)
      )
    },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(BussinesCatogery);

