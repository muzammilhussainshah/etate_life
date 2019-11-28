import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout, NavDropdown, Card, Jumbotron, DropdownButton, Dropdown } from 'react-bootstrap';
import AppHeader from './common/AppHeader';
// import {} from 'bootstrap';
// import { ButtonToolbar,DropdownButton,Dropdown , Navbar,Nav,NavDropdown} from 'react-bootstrap';
import styles from './style.css';
import { FaLevelUpAlt, FaAngleDoubleRight, FaMapMarkerAlt, FaPhone, } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

// const { Header, Footer, Sider, Content } = Layout;

class AddBookingAdmin extends Component {
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

        <center>
          <div style={{ marginTop: "3%" }}>
            <a href={"#"}>   <span style={{ fontWeight: "bold", color: "black" }}>1. Account details</span></a>
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>2. Business addres</span></a>
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>3. Opening hours</span></a>
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>4. Doctors</span></a>
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>5. Booking administrator</span></a>
          </div>
        </center>
        {/* <center> */}
        <div style={{ display: "flex", flexBasis: "100%", marginTop: "3%", flexWrap: "wrap" }}>
          <div style={{ flexBasis: "30%", justifyContent: "center", display: "flex", borderRight: "2px solid", borderRightColor: "#F4F6FA" }}>
            <div>
              <h3 style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>
                Doctors name:
        </h3>
              <div >
                <Button variant="outline-primary"  >Remove</Button>
              </div>
            </div>
          </div>
          <div style={{ flexBasis: "70%", }}>
         
            <div style={{
              display: "flex", justifyContent: "center"
            }}
            >
              <div style={{

                borderRadius: 10,
              }} >
                <Form style={{}}>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>
                      Full name
                           </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="text" placeholder="Full name" />
                    </Col>
                  </Form.Group>
                 
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>
                      Mobile number
                         </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="number" placeholder="Mobile number" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>
                     Email
                           </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>
                      <a>
                    <MDBIcon icon="plus" style={{color:"#3D69B2"}} />
                      </a>
                           </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="text" placeholder="Docter name" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>
                     Password
                           </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="password" placeholder="Password" />
                    </Col>
                  </Form.Group>
                  
                  {/* <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>
                     Specialist
                         </Form.Label>
                    <Col sm={7}>
                      <DropdownButton
                        title={"Catogery"}
                        variant={"Secondary"}
                        id={`dropdown-variants-Secondary`}
                        key={"Secondary"}
                      >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Form.Group> */}
                </Form>
              </div>
            </div>
            <div style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
            <div style={{ width: 250, height: 250, margin: "2%", color: "#C2BDBD", }}>
                <div style={{ fontSize: 25 }}>

                Doctors name
               </div>
                <div style={{
                  border: "2px solid", borderColor: "#D9D6D6", width: 250, height: 250,
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
              </div>
          </div>
          </div>
          
        </div>

        {/* </center> */}
        <div className="float-right" style={{justifyContent:"flex-end",display:"flex",padding:"5%"}}>
                    <Button variant="primary">Add</Button>
                    <Button variant="primary">Next</Button>
                  </div>
      </div>
    )
  }
}

export default AddBookingAdmin



