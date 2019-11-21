import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout } from 'react-bootstrap';
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
            <div style={{ backgroundColor: "#fff", height: this.state.height, }}>
                <Row style={{ backgroundColor: "#fff", padding: "1%" }} className="border-bottom border-1 ">
                    <Col xs={7}>
                        <div style={{ marginLeft: "20%" }}>
                            <img src={require('../assets/logo2.png')} alt="aaaa" />
                        </div>
                    </Col>
                    <Col xs={5}>

                        <div style={{ marginTop: "1%" }} >

                            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>Why choose us</span></a>
                            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>How it works</span></a>
                            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>Pricing</span></a>
                            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>Profile</span></a>

                            <span style={{ marginLeft: "5%", fontWeight: "bold" }}>

                                {/* <Button variant="outline-primary">Signup</Button> */}

                            </span>
                        </div>
                    </Col>
                </Row>
                <center>
                    <div style={{ marginTop: "3%" }}>
                        <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>1. Account details</span></a>
                        <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>2. Business addres</span></a>
                        <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>3. Opening hours</span></a>
                        <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>4. Doctors</span></a>
                        <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>5. Doctors</span></a>
                    </div>
                </center>
                {/* <center> */}

                    <div style={{
                        backgroundColor: "#fff", width: 360, padding: "1%", marginTop: "7%",
                        borderRadius: 10,
                        // webkitBoxShadow: "3px 3px 3px #9E9E9E",
                        // mozBoxShadow: "3px 3px 3px #9E9E9E",
                        // boxShadow: "3px 3px 3px #9E9E9E",
                        height: 550,  position: "absolute",
                        left: "40%",

                    }} >

                      
                     

                        <Form style={{ width: "100", marginTop: "7%" }}>
                            <Form.Group >
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="Name" />

                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>

                                <Form.Control type="email" placeholder="Enter email" />

                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email address</Form.Label>

                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email address</Form.Label>

                                <Form.Control type="password" placeholder="Confirm password" />
                            </Form.Group>


                        </Form>
                        
                      

                        <div style={{marginLeft:"80%"}}>
                        <Button variant="outline-primary"  >Next</Button>

                        </div>

                    </div>

                {/* </center> */}







            </div>
        )
    }
}

export default Home



