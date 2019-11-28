import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import {
  Navbar, Nav, Button, Form, FormControl, Row, Col, Container,
  Layout, NavDropdown, Card, Jumbotron, ListGroup, Dropdown,DropdownButton
} from 'react-bootstrap';
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
        {/* </body> */}
        <div style={{ display: "flex", flexBasis: "100%", marginTop: "3%", }}>
          <div style={{ flexBasis: "40%", justifyContent: "center", display: "flex", borderRight: "2px solid", borderRightColor: "#F4F6FA", }}>
            {/* <div  style={{ flexDirection:"r"}}>

            </div> */}
            <div style={{ background: "#F0F0F0", height: '520px', padding: "3%" }}>
              <h3 style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>
                Administrators name:
              </h3>
              <div style={{ height: '400px', background: "#F0F0F0", overflowX: 'scroll', }} >
                <ListGroup>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8,].map((v, i) => {
                    return (
                      <a>
                        <ListGroup.Item style={{
                          webkitBoxShadow: "3px 3px 3px #9E9E9E",
                          mozBoxShadow: "3px 3px 3px #9E9E9E",
                          boxShadow: "3px 3px 3px #9E9E9E", flexDirection: "row", display: "flex", width: 300, alignItems: "center"
                        }}>

                          <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ width: 50, }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9fHPgpYtCP2Z16KQVpbekDDtcIazrx_0QgXwrwDIFb7Pplhx&s" alt="aaaa" />
                          </div>
                          <div style={{ marginLeft: 10 }}>
                            <div style={{ fontWeight: "bold", color: "#8C8888" }}>
                              Imam clinic
                        </div>
                            <div style={{ fontSize: 11, color: "#8C8888" }}>
                              R-592 sector 8,north karachi
                        </div>
                          </div>
                          <div style={{ justifyContent: "flex-end", display: "flex", position: "absolute", right: 10 }}>
                            <MDBIcon far icon="eye" />
                          </div>

                        </ListGroup.Item>
                      </a>
                    )
                  })}


                </ListGroup>

              </div>
              <div className style={{}}>
                <Button variant="link">Back</Button>
              </div>
            </div>

          </div>
          <div style={{ flexBasis: "60%", }}>

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
                        <MDBIcon icon="plus" style={{ color: "#3D69B2" }} />
                      </a>
                      </Form.Label>
                 <Col sm={7}>
                   <DropdownButton
                     title={"Add doctor"}
                     variant={"Secondary"}
                     id={`dropdown-variants-Secondary`}
                     key={"Secondary"}
                   >
                     <Dropdown.Item eventKey="1">Dr shani</Dropdown.Item>
                     <Dropdown.Item eventKey="2">Dr david</Dropdown.Item>
                   </DropdownButton>
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
            <div style={{ flexBasis: "40%", justifyContent: "center", display: "flex", borderRight: "2px solid", borderRightColor: "#F4F6FA", }}>
              {/* <div  style={{ flexDirection:"r"}}>

            </div> */}
              <div style={{ background: "#F0F0F0", height: '260px', padding: "1%" }}>
                <h3 style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>
                  Doctors name:
              </h3>
                <div style={{ height: '200px', background: "#F0F0F0", overflowX: 'scroll', }} >
                  <ListGroup>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8,].map((v, i) => {
                      return (
                        <a>
                          <ListGroup.Item style={{
                            webkitBoxShadow: "3px 3px 3px #9E9E9E",
                            mozBoxShadow: "3px 3px 3px #9E9E9E",
                            boxShadow: "3px 3px 3px #9E9E9E", flexDirection: "row", display: "flex", width: 300, alignItems: "center"
                          }}>

                            <div style={{ display: "flex", alignItems: "center" }}>
                              <img style={{ width: 50, }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9fHPgpYtCP2Z16KQVpbekDDtcIazrx_0QgXwrwDIFb7Pplhx&s" alt="aaaa" />
                            </div>
                            <div style={{ marginLeft: 10 }}>
                              <div style={{ fontWeight: "bold", color: "#8C8888" }}>
                                Imam clinic
                        </div>
                              <div style={{ fontSize: 11, color: "#8C8888" }}>
                                R-592 sector 8,north karachi
                        </div>
                            </div>
                            <div style={{ justifyContent: "flex-end", display: "flex", position: "absolute", right: 10 }}>
                              <MDBIcon far icon="eye" />
                            </div>

                          </ListGroup.Item>
                        </a>
                      )
                    })}
                  </ListGroup>
                </div>
                {/* <div className style={{}}>
                  <Button variant="link">Back</Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* </footer step butons> */}
        <div className="float-right" style={{ justifyContent: "flex-end", display: "flex", padding: "5%" }}>
          <Button variant="primary">Add</Button>
          <Button variant="primary">Next</Button>
        </div>
      </div>
    )
  }
}

export default AddBookingAdmin



