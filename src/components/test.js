import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import {
  Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout, NavDropdown, Card, Jumbotron, DropdownButton, Dropdown,
  ListGroup,
} from 'react-bootstrap';
import AppHeader from './common/AppHeader';
// import {} from 'bootstrap';
// import { ButtonToolbar,DropdownButton,Dropdown , Navbar,Nav,NavDropdown} from 'react-bootstrap';
import styles from './style.css';
import { FaLevelUpAlt, FaAngleDoubleRight, FaMapMarkerAlt, FaPhone, } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

// const { Header, Footer, Sider, Content } = Layout;

class Test extends Component {
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
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>2. Business address</span></a>
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>3. Opening hours</span></a>
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>4. Doctors</span></a>
            <a href={"#"}>   <span style={{ marginLeft: "5%", fontWeight: "bold", color: "black" }}>5. Booking administrator</span></a>
          </div>
        </center>
        {/* <center> */}
        <div style={{ display: "flex", flexBasis: "100%", marginTop: "3%", }}>
          <div style={{ flexBasis: "40%",  justifyContent: "center", display: "flex", borderRight: "2px solid", borderRightColor: "#F4F6FA", }}>
            {/* <div  style={{ flexDirection:"r"}}>

            </div> */}
            <div style={{ background: "#F0F0F0", height: '520px', padding: "3%" }}>
              <h3 style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>
                Clinic names:
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
              <div className style={{ }}>
              <Button variant="link">Back</Button>
            </div>
            </div>
          
          </div>
          <div style={{ flexBasis: "60%", }}>
            <div style={{ flexBasis: "100%", flexDirection: "row", display: "flex", padding: "1%", flexWrap: "wrap", borderBottom: "2px solid", borderBottomColor: "#F4F6FA", }}>
              <div style={{ width: 200, flexBasis: "30%", justifyContent: "center", display: "flex", alignItems: "center", fontWeight: "bold" }}>
             <img  width="200" src="data:image/jpeg;base64,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"/>
            </div>
              <div style={{ padding: "1%", flexBasis: "70%", }}>
                  <div style={{  padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD",fontSize:14 }}>
                    5515181581531561531
              </div>
                  <div style={{  padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD",fontSize:14 }}>
                    Dr. tabassum
              </div>
                  <div style={{  padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD",fontSize:14 }}>
                    r-592 sector 9 north karachi
              </div>
                  <div style={{  padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD",fontSize:14 }}>
                    090078601
              </div>
                  <div style={{  padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD",fontSize:14 }}>
                    skin specialist
              </div>
                 
             
              </div>
            </div>
            {/* <div style={{  width:275, background:"yellow"}}>
              <img width="50%" src={require('../assets/default.png')} />
            </div> */}
  <div style={{ flexBasis: "100%", flexDirection: "row", display: "flex", padding: "1%", flexWrap: "wrap",  }}>
              <div style={{ width: 200, flexBasis: "30%", justifyContent: "center", display: "flex", alignItems: "center", fontWeight: "bold" }}>
             <img  width="150" src="data:image/png;base64,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"/>
            </div>
              <div style={{ padding: "1%", flexBasis: "70%", }}>
                    <div style={{fontWeight: "bold" }}>Opening hours:</div>
                <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}>
                  <div style={{ width: 100, padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD" }}>
                    Morning
              </div>
                  <div style={{ margin: 2, color: "#C2BDBD", width: 220, padding: "1%", border: "2px solid", borderColor: "#D9D6D6", alignItems: "center", display: "flex", }}>
                    From 9:00
              </div>
                  <div style={{ margin: 2, color: "#C2BDBD", width: 220, padding: "1%", border: "2px solid", borderColor: "#D9D6D6", alignItems: "center", display: "flex", }}>
                    To 9:00
              </div>
                </div>
                <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}>
                  <div style={{ width: 100, padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD" }}>
                    Afternoon
              </div>
                  <div style={{ margin: 2, color: "#C2BDBD", width: 220, padding: "1%", border: "2px solid", borderColor: "#D9D6D6", alignItems: "center", display: "flex", }}>
                    From 9:00
              </div>
                  <div style={{ margin: 2, color: "#C2BDBD", width: 220, padding: "1%", border: "2px solid", borderColor: "#D9D6D6", alignItems: "center", display: "flex", }}>
                    To 9:00
              </div>
                </div>
                <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}>
                  <div style={{ width: 100, padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD" }}>
                    Evening
              </div>
                  <div style={{ margin: 2, color: "#C2BDBD", width: 220, padding: "1%", border: "2px solid", borderColor: "#D9D6D6", alignItems: "center", display: "flex", }}>
                    From 9:00
              </div>
                  <div style={{ margin: 2, color: "#C2BDBD", width: 220, padding: "1%", border: "2px solid", borderColor: "#D9D6D6", alignItems: "center", display: "flex", }}>
                    To 9:00
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="float-right" style={{ justifyContent: "flex-end", display: "flex", padding: "2%" }}>
          <Button variant="primary">Add</Button>
          <Button variant="primary">Next</Button>
        </div> */}
        {/* </center> */}

      </div>
    )
  }
}

export default Test



