import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout, NavDropdown, Card, Jumbotron } from 'react-bootstrap';
import AppHeader from './common/AppHeader';
// import {} from 'bootstrap';
// import { ButtonToolbar,DropdownButton,Dropdown , Navbar,Nav,NavDropdown} from 'react-bootstrap';
import styles from './style.css';
import { FaLevelUpAlt, FaAngleDoubleRight,FaMapMarkerAlt,FaPhone,} from 'react-icons/fa';
import { MdMailOutline} from 'react-icons/md';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

// const { Header, Footer, Sider, Content } = Layout;

class Pricing extends Component {
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
    return (
      <div style={{ backgroundColor: "#fff", }}>
        <AppHeader />
        {/* <div style={{ background: "#F0F3F1", }}>
          <hr />
        </div> */}
        <div>
          <div style={{}}>
            <img style={{ width: "100%", }} src={require('../assets/image1.jpg')} alt="aaaa" />
          </div>
        </div>
        <center style={{ fontSize: 25, fontWeight: "bold", marginTop: "3%" }}>
          Pricing
        </center>
        <center>
          <div style={{ display: "flex", flexBasis: "100%", justifyContent: "center", marginTop: "3%", alignItems: "center", }}>
            <Card style={{ width: '18rem', paddingTop: "2%", paddingBottom: "2%" }}>
              <Card.Body>
                <Card.Title style={{ color: "blue", fontSize: 25 }}>Solo Clinic</Card.Title>
                <Card.Title style={{ color: "blue", fontSize: 17 }}>$ 75 / month</Card.Title>
                <Card.Text style={{ marginTop: "10%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  1
            </Card.Text>
                <Button style={{ background: "#3C6AB3", borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Buy Now</Button>

              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', paddingTop: "2%", paddingBottom: "2%" }}>
              <Card.Body>
                <Card.Title style={{ color: "blue", fontSize: 25 }}>Solo Clinic</Card.Title>
                <Card.Title style={{ color: "blue", fontSize: 17 }}>$ 75 / month</Card.Title>
                <Card.Text style={{ marginTop: "10%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  1
            </Card.Text>
                <Button style={{ background: "#3C6AB3", borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Buy Now</Button>

              </Card.Body>
            </Card><Card style={{ width: '18rem', paddingTop: "2%", paddingBottom: "2%" }}>
              <Card.Body>
                <Card.Title style={{ color: "blue", fontSize: 25 }}>Solo Clinic</Card.Title>
                <Card.Title style={{ color: "blue", fontSize: 17 }}>$ 75 / month</Card.Title>
                <Card.Text style={{ marginTop: "10%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  1
            </Card.Text>
                <Button style={{ background: "#3C6AB3", borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Buy Now</Button>

              </Card.Body>
            </Card><Card style={{ width: '18rem', paddingTop: "2%", paddingBottom: "2%" }}>
              <Card.Body>
                <Card.Title style={{ color: "blue", fontSize: 25 }}>Solo Clinic</Card.Title>
                <Card.Title style={{ color: "blue", fontSize: 17 }}>$ 75 / month</Card.Title>
                <Card.Text style={{ marginTop: "10%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  1
            </Card.Text>
                <Button style={{ background: "#3C6AB3", borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Buy Now</Button>

              </Card.Body>
            </Card>
          </div>
        </center>
        {/* switch */}
        <div style={{ marginLeft: "12%", color: "#3C6AB3", marginTop: "2%", fontSize: 13, display: "flex", justifyContent: "center" }} >
          You save 17 %
        </div>
        <div style={{ marginTop: "1%", display: "flex", justifyContent: "center" }}>
          <div style={{ marginRight: "1%", fontWeight: "bold" }} >
            Month
        </div>
          <div className='custom-control custom-switch'>
            {/* <span >
            Year
        </span> */}
            <input
              type='checkbox'
              className='custom-control-input'
              id='customSwitches'
              checked={this.state.switch1}
              onChange={this.handleSwitchChange(1)}
              readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitches'>
              Year <FaLevelUpAlt style={{ color: "#3C6AB3", fontSize: 22 }} />
            </label>
          </div>

        </div>
        <center >

          <Button style={{ background: "#3C6AB3", borderColor: "#3C6AB3", marginTop: "3%" }} variant="primary" size="lg">Start free trial now!</Button>
          <div style={{ color: "grey", fontSize: 11, marginTop: "1%" }}>
            No credit card needed!
      </div>
        </center>
        {/* schedule jomtron */}
        <div style={{ background: "#EEF5FF", padding: "3%" }}>
          <div style={{ display: "flex", flexBasis: "100%", justifyContent: "center", }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>

                Do you need an <span style={{ color: "#3C6AB3" }}>Enterprise solution?</span>
              </div>
            </div>
            <div style={{ marginLeft: "3%" }}>
              <Button style={{ borderColor: "#3C6AB3", }} variant="outline-primary" size="lg">Schedule a Meeting</Button>
            </div>
          </div>
        </div>
        {/* footer jomtron */}
        <div style={{ display: "flex", flexBasis: "100%", justifyContent: "center", background: "#1B1B1B" }}>
          <div style={{ flexBasis: "20%",  padding: "2%" }}>
            <h6 style={{ color: "#fff",fontWeight:"bold" }}>
              About us
            </h6>
            <div style={{ color: "#fff",fontSize:12 }}>
              lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </div>
          </div>
          <div style={{ flexBasis: "20%",  padding: "2%" }}>
            <h6 style={{ color: "#fff",fontWeight:"bold" }}>
              Site Map
            </h6>
            <div style={{ color: "#fff",fontSize:12 }}>
              <FaAngleDoubleRight  /> About us
              </div>
            <div style={{ color: "#fff",fontSize:12  }}>
              <FaAngleDoubleRight  /> Services
              </div>
            <div style={{ color: "#fff",fontSize:12  }}>
              <FaAngleDoubleRight /> Testimonials
              </div>
            <div style={{ color: "#fff",fontSize:12  }}>
              <FaAngleDoubleRight /> Gallery
              </div>
            <div style={{ color: "#fff",fontSize:12  }}>
              <FaAngleDoubleRight  /> Blog
              </div>
          </div>
          <div style={{ flexBasis: "20%", padding: "2%" }} >
            <h6 style={{ color: "#fff" ,fontWeight:"bold"}}>
             Contact Us
            </h6>
            <div style={{ color: "#fff",fontSize:12  }}>
              <FaMapMarkerAlt style={{ color: "#47C2C4",  }} /> International House, 12 Constance Street, London E16 2DQ
              </div>
            <div style={{ color: "#fff" ,fontSize:12 }}>
              <FaPhone style={{ color: "#47C2C4",  }}  /> 11072415
              </div>
            <div style={{ color: "#fff",fontSize:12  }}>
              <MdMailOutline style={{ color: "#47C2C4",  }}   /> support@etat-life.com
              </div>
          
          </div>
          <div style={{ flexBasis: "20%",  padding: "2%" }} >
            <h6 style={{ color: "#fff",fontWeight:"bold" }}>
              FOLLOW US
            </h6>
            <div style={{
              flexDirection: "row", display: "flex",flexWrap:"wrap",
            }}>

              <div style={{
                background: "#fff", borderRadius: "50%",
                width: 50, justifyContent: "center", display: "flex", alignItems: "center",
                height: 50,margin:5
              }}>
                <div style={{ color: "#3D69B2" }}>
                  {/* <a href="#!" className="fb-ic mr-3"> */}
                  <MDBIcon fab icon="facebook-f" />
                  {/* </a>/ */}
                </div>
              </div>
              <div style={{
                background: "#fff", borderRadius: "50%",
                width: 50, justifyContent: "center", display: "flex", alignItems: "center",
                height: 50,margin:5
              }}>
                <div style={{ color: "#3D69B2" }}>
                  {/* <a href="#!" className="fb-ic mr-3"> */}
                  <MDBIcon fab icon="twitter" />
                  {/* </a>/ */}
                </div>
              </div>
              <div style={{
                background: "#fff", borderRadius: "50%",
                width: 50, justifyContent: "center", display: "flex", alignItems: "center",
                height: 50,margin:5
              }}>
                <div style={{ color: "#3D69B2" }}>
                  {/* <a href="#!" className="fb-ic mr-3"> */}
                  <MDBIcon fab icon="linkedin-in" />
                  {/* </a>/ */}
                </div>
              </div>
              <div style={{
                background: "#fff", borderRadius: "50%",
                width: 50, justifyContent: "center", display: "flex", alignItems: "center",
                height: 50,margin:5
              }}>
                <div style={{ color: "#3D69B2" }}>
                  {/* <a href="#!" className="fb-ic mr-3"> */}
                  <MDBIcon fab icon="google-plus-g" />
                  {/* </a>/ */}
                </div>
              </div>
             
            </div>
          </div>
        </div>
{/* reserve company */}
      <div style={{background:"#111111",justifyContent:"flex-end",color:"white",display:"flex",fontSize:11,height:25,alignItems:"center"}}>
        <div>
        @ 2019 ETAT LIFE All rights reserved
        </div>
      </div>

      </div >
    )
  }
}

export default Pricing



