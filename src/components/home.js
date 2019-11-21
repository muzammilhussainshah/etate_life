import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout } from 'react-bootstrap';
// import { Form,FormControl} from 'bootstrap';
// const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
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









        </div>
        )
    }
}

export default Home



