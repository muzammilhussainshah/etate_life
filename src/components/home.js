import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout } from 'react-bootstrap';
import AppHeader from './common/AppHeader';
// import { Form,FormControl} from 'bootstrap';
// const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { height: props.height, width: props.width };
    }

    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
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
                        <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>5. Doctors</span></a>
                    </div>
                </center>
                {/* <center> */}
                <div style={{
                    display: "flex", justifyContent: "center"
                }}
                >
                    <div style={{
                       padding: "1%", marginTop: "5%",
                        borderRadius: 10,
                    }} >

                        <Form style={{}}>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={5}>
                                    Full Name
                              </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="text" placeholder="  Full Name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={5}>
                                    Phone
    </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="number" placeholder="Mobile Number" />
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
                                    Current Password
                          </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={5}>
                                    New Password
                         </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={5}>
                                    Confirm Password
                         </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>
                        </Form>

                    </div>
                </div>
                    <div style={{ display:"flex",justifyContent:"flex-end",padding:"5%",paddingRight:"10%" }}>
                    <Button variant="outline-primary">Save Changes</Button>
                            <Button variant="outline-primary"  >Next</Button>
                        </div>
                {/* </center> */}

            </div>
        )
    }
}

export default Home



