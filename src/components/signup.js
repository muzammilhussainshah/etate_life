import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout } from 'react-bootstrap';
// import { Form,FormControl} from 'bootstrap';
// const { Header, Footer, Sider, Content } = Layout;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { height: props.height,width:props.width };
    }

    componentWillMount() {
        this.setState({ height: window.innerHeight,width:window.innerWidth });
    }


    render() {
        return (
            <div style={{ backgroundColor: "#F0F0F0", height: this.state.height, }}>
                <Row style={{ backgroundColor: "#F0F0F0",padding:"1%" }}  className="border-bottom border-1 ">
                    <Col xs={7}>
                        <div style={{ marginLeft: "20%" }}>
                            <img src={require('../assets/logo.png')} alt="aaaa" />
                        </div>
                    </Col>
                    <Col xs={5}>


                        <div style={{ marginTop: "1%" }} >

                        <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold",color:"black" }}>Why choose us</span></a>
                        <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold",color:"black" }}>How it works</span></a>
                        <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold",color:"black" }}>Pricing</span></a>
                        <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold",color:"black" }}>Login</span></a>
                            {/* <span style={{ marginLeft: "5%", fontWeight: "bold" }}>How it works</span>
                            <span style={{ marginLeft: "5%", fontWeight: "bold" }}>Pricing</span>
                            <span style={{ marginLeft: "5%", fontWeight: "bold",color:"#2489FF" }}>Login</span> */}
                            <span style={{ marginLeft: "5%", fontWeight: "bold" }}>

                                <Button variant="outline-primary">Signup</Button>


                            </span>
                        </div>



                    </Col>
                </Row>

                <center>

                    <div style={{
                        backgroundColor: "#fff", width: 360, padding: "1%", marginTop: "7%",
                        borderRadius: 10,
                        webkitBoxShadow: "3px 3px 3px #9E9E9E",
                        mozBoxShadow: "3px 3px 3px #9E9E9E",
                        boxShadow: "3px 3px 3px #9E9E9E",
                        height: 550

                    }}>

                        <div style={{  }}>
                            <img src={require('../assets/logo2.png')} alt="aaaa" />
                        </div>
                        <div style={{ fontWeight: "bold",marginTop: "7%", }}>

                            Connect to your patients
                        </div>

                        <Form style={{ width: "80%", marginTop: "7%" }}>
                            <Form.Group >
                                <Form.Control type="text" placeholder="Name" />

                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />

                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Confirm password" />
                            </Form.Group>


                        </Form>
                        <Button style={{ fontSize: 11, marginTop: "3%" }} variant="secondary" size="lg" disabled>
                            Send verification code
                         </Button>
                        <Row style={{ marginTop: "7%" }} >
                            <Col>
                                <Form.Check type="checkbox" label="remember me" />
                            </Col>
                            <Col>
                                <span>Forget password</span>
                            </Col>
                            {/* <Form.Group controlId="formBasicCheckbox"> */}
                            {/* </Form.Group> */}
                        </Row>
                        <hr />

                        <div>
                            <span>not a member yer? Join now</span>
                        </div>

                    </div>

                </center>








            </div>
        )
    }
}

export default Signup



