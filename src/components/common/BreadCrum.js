import React, { Component, } from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { color} = this.props
        return (
            <center>
                <div style={{ marginTop: "3%" }}>
                    <a href={"home"}>   <span style={{ fontWeight: "bold", color: color==="Account details"?"blue":"black" }}>1. Account details</span></a>
                    {/* <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>2. Business address</span></a> */}
                    <a href={"bussinesCatogery"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color:color==="Clinic address"?"blue":"black" }}>2. Clinic address</span></a>
                    {/* <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>3. Opening hours</span></a> */}
                    <a href={"addDoctor"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: color==="Doctors"?"blue":"black"  }}>3. Doctors</span></a>
                    <a href={"AddBookingAdmin"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: color==="Booking administrator"?"blue":"black" }}>4. Booking administrator</span></a>
                </div>
            </center>
        )
    }
}

export default Breadcrumbs



