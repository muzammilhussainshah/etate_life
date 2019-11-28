import React, { Component, } from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { } = this.props
        return (
            <center>
                <div style={{ marginTop: "3%" }}>
                    <a href={"#"}>   <span style={{ fontWeight: "bold", color: "black" }}>1. Account details</span></a>
                    {/* <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>2. Business address</span></a> */}
                    <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>2. Clinic address</span></a>
                    {/* <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>3. Opening hours</span></a> */}
                    <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>3. Doctors</span></a>
                    <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>4. Booking administrator</span></a>
                </div>
            </center>
        )
    }
}

export default Breadcrumbs



