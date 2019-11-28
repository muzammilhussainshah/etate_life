import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout } from 'react-bootstrap';
// import { Form,FormControl} from 'bootstrap';
// const { Header, Footer, Sider, Content } = Layout;
import AppHeader from './common/AppHeader';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { height: props.height, width: props.width };
    }

    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }


    render() {
        return (
            <div style={{ backgroundColor: "#F0F0F0",  }}>
                <AppHeader login={true} button="Signup"/>
                <center>
                    <div style={{
                        backgroundColor: "#fff", width: 360, padding: "1%", marginTop: "3%",
                        borderRadius: 10,
                        webkitBoxShadow: "3px 3px 3px #9E9E9E",
                        mozBoxShadow: "3px 3px 3px #9E9E9E",
                        boxShadow: "3px 3px 3px #9E9E9E",
                        height: 550

                    }}>
                        <div style={{}}>
                            <img src={require('../assets/updatedLogo.png')} alt="aaaa" />
                        </div>
                        <div style={{ fontWeight: "bold", marginTop: "7%", }}>
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
                                <Form.Check type="checkbox" label="Remember me" />
                            </Col>
                            <Col>
                                <span>Forget password</span>
                            </Col>
                            {/* <Form.Group controlId="formBasicCheckbox"> */}
                            {/* </Form.Group> */}
                        </Row>
                        <hr />
                        <div>
                            <span>not a member yet? Join now</span>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}

export default Signup



