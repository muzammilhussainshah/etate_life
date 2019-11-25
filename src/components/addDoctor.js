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

class AddDoctor extends Component {
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
        <AppHeader rout={["Why choose us", "How it works", "Pricing", "Profile"]} />

        <center>
          <div style={{ marginTop: "3%" }}>
            <a href={"#"}>   <span style={{ fontWeight: "bold", color: "black" }}>1. Account details</span></a>
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>2. Business addres</span></a>
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>3. Opening hours</span></a>
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>4. Doctors</span></a>
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>5. Booking Admin</span></a>
          </div>
        </center>
        {/* <center> */}
        <div style={{ display: "flex", flexBasis: "100%", marginTop: "3%", flexWrap: "wrap" }}>
          <div style={{ flexBasis: "30%", justifyContent: "center", display: "flex", borderRight: "2px solid", borderRightColor: "#F4F6FA" }}>
            <div>
              <h3 style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>
                Bussines name:
        </h3>
              <div >
                <Button variant="outline-primary"  >Remove</Button>
              </div>
            </div>
          </div>
          <div style={{ flexBasis: "70%", }}>
            <div style={{}}>
              <img width="10%" src={require('../assets/default.png')} />
            </div>
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
                      Upload a photo of the doctor
                              </Form.Label>
                    <Col sm={7}>
                      <Button variant="outline-primary" style={{}} >Brows</Button>

                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>
                      Etat ID
    </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="text" placeholder="Etat ID" />
                    </Col>
                  </Form.Group>
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
                      Other name
                           </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="text" placeholder="Other name" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>
                      Telephone
                         </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="number" placeholder="Telephone" />
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
                     Password
                           </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="email" placeholder="Password" />
                    </Col>
                  </Form.Group>
                  
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>
                      Bussines address
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
                        <Dropdown.Item eventKey="3" active>
                          Active Item
                     </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                      </DropdownButton>


                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
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
                  </Form.Group>
                  {/* <div className="float-right">
                    <Button variant="primary">Add</Button>
                    <Button variant="primary">Next</Button>
                  </div> */}

                </Form>

              </div>
            </div>
          </div>
        </div>

        {/* </center> */}
        <div className="float-right" style={{justifyContent:"flex-end",display:"flex",padding:"2%"}}>
                    <Button variant="primary">Add</Button>
                    <Button variant="primary">Next</Button>
                  </div>
      </div>
    )
  }
}

export default AddDoctor



