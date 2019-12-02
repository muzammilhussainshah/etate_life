import React, { Component, } from 'react';
import { Button, Form, Row, Col, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import AppHeader from './common/AppHeader';
import BreadCrum from './common/BreadCrum';
import LargeList from './common/largeList';
import Input from './common/input';
import DisplayHours from './DisplayHours';
import AddHours from './AddHours';
import { MDBIcon, } from 'mdbreact';

class BussinesCatogery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch1: true,
    };
  }

  handleSwitchChange = nr => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber]
    });
  }
  render() {
    let inputs = [
      { label: "Etat ID", type: "text", placeholder: "Etat ID", },
      { label: "Bussines name", type: "text", placeholder: "Bussines name" },
      { label: "Bussines registration number", type: "text", placeholder: "Bussines registration number" },
      { label: "Bussines addres", type: "text", placeholder: "Bussines addres" },
      { label: " Mobile number", type: "number", placeholder: "Mobile number" },
    ]
    return (
      <div style={{ backgroundColor: "#fff", }}>
        <AppHeader />
        <BreadCrum />
        {/* <body> */}
        <div style={{ display: "flex", flexBasis: "100%", marginTop: "3%", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ flexBasis: "40%", justifyContent: "center", display: "flex", borderRight: "2px solid", borderRightColor: "#F4F6FA", }}>
            <LargeList heading="Clinics name" />
          </div>
          <div style={{ flexBasis: "60%", }}>
            <div style={{}}>
              <img width="10%" style={{ minWidth: 150 }} src={require('../assets/default.png')} />
            </div>
            <div style={{
              display: "flex", justifyContent: "center", borderBottom: "2px solid #F0F0F0",
            }}>

              <Form style={{}}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={5}>
                    Upload a photo of the clinic
                              </Form.Label>
                  <Col sm={7}>
                    <Button variant="outline-primary" style={{}} >Browse</Button>
                  </Col>
                </Form.Group>

                <Input label="Etat ID" type="text" placeholder="Etat ID" />
                <Input label="Bussines name" type="text" placeholder="Bussines name" />
                <Input label="Bussines registration number" type="text" placeholder="Bussines registration number" />
                <Input label="Bussines addres" type="text" placeholder="Bussines addres" />
                <Input label="Mobile number" type="number" placeholder="Mobile number" />

                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={5}>
                    Bussines catogery
                         </Form.Label>
                  <Col sm={7}>
                    <DropdownButton
                      title={"Catogery"}
                      variant={"Secondary"}
                      id={`dropdown-variants-Secondary`}
                      key={"Secondary"}>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Form.Group>
              </Form>
            </div>
            {/* opening hours */}
            <DisplayHours />
            <AddHours/>

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
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8,].map((v, i) => {
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
                                  9:00 to 5:00
                        </div>
                                <div style={{ fontSize: 11, color: "#8C8888" }}>
                                </div>
                              </div>
                              <div style={{ justifyContent: "flex-end", display: "flex", position: "absolute", right: 10 }}>
                                <MDBIcon far icon="trash-alt" className="float-right" />
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
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8,].map((v, i) => {
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
                                  9:00 to 5:00
                        </div>
                                <div style={{ fontSize: 11, color: "#8C8888" }}>
                                </div>
                              </div>
                              <div style={{ justifyContent: "flex-end", display: "flex", position: "absolute", right: 10 }}>
                                <MDBIcon far icon="trash-alt" className="float-right" />
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
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8,].map((v, i) => {
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
                                  9:00 to 5:00
                        </div>
                                <div style={{ fontSize: 11, color: "#8C8888" }}>
                                </div>
                              </div>
                              <div style={{ justifyContent: "flex-end", display: "flex", position: "absolute", right: 10 }}>
                                <MDBIcon far icon="trash-alt" className="float-right" />
                              </div>

                            </ListGroup.Item>
                          </a>
                        )
                      })}
                    </ListGroup>
                  </div>
                </div>
              </div>




              {/* <div style={{ width: 220, height: 220, margin: "2%", color: "#C2BDBD", }}>
                <div style={{ fontSize: 25 }}>
                  Afternoon
               </div>
                <div style={{
                  border: "2px solid", borderColor: "#D9D6D6", width: 220, height: 190,
                  borderRadius: 10,
                  webkitBoxShadow: "3px 3px 3px #9E9E9E",
                  mozBoxShadow: "3px 3px 3px #9E9E9E",
                  boxShadow: "3px 3px 3px #9E9E9E",
                }}>
                  <div style={{ padding: 10, }}>
                    9:00 to 12:00  <span><MDBIcon far icon="trash-alt" className="float-right" /></span>
                  </div>
                  <div style={{ padding: 10, }}>
                    9:00 to 12:00<span><MDBIcon far icon="trash-alt" className="float-right" /></span>
                  </div>
                  <div style={{ padding: 10, }}>
                    9:00 to 12:00<span><MDBIcon far icon="trash-alt" className="float-right" /></span>
                  </div>
                </div>
              </div> */}
              {/* <div style={{ width: 220, height: 220, margin: "2%", color: "#C2BDBD", }}>
                <div style={{ fontSize: 25 }}>

                  Evening
               </div>
                <div style={{
                  border: "2px solid", borderColor: "#D9D6D6", width: 220, height: 190,
                  borderRadius: 10,
                  webkitBoxShadow: "3px 3px 3px #9E9E9E",
                  mozBoxShadow: "3px 3px 3px #9E9E9E",
                  boxShadow: "3px 3px 3px #9E9E9E",
                }}>
                  <div style={{ padding: 10, }}>
                    9:00 to 12:00  <span><MDBIcon far icon="trash-alt" className="float-right" /></span>
                  </div>
                  <div style={{ padding: 10, }}>
                    9:00 to 12:00<span><MDBIcon far icon="trash-alt" className="float-right" /></span>
                  </div>
                  <div style={{ padding: 10, }}>
                    9:00 to 12:00<span><MDBIcon far icon="trash-alt" className="float-right" /></span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* </center> */}
        <div className="float-right" style={{ justifyContent: "flex-end", display: "flex", padding: "5%" }}>
          <Button variant="primary">Add</Button>
          <Button variant="primary">Next</Button>
        </div>
      </div>
    )
  }
}

export default BussinesCatogery



