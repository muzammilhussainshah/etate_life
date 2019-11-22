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
            <div style={{ backgroundColor: "#fff", height: this.state.height, }}>
                      <AppHeader rout={["Why choose us","How it works","Pricing","Profile"]} />

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
                        width: 360, padding: "1%", marginTop: "7%",
                        borderRadius: 10,
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



                        <div style={{ marginLeft: "80%" }}>
                            <Button variant="outline-primary"  >Next</Button>

                        </div>

                    </div>
                </div>

                {/* </center> */}







            </div>
        )
    }
}

export default Home



