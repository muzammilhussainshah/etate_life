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
class MyDoctors extends Component {
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
        <AppHeader  />
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
                Doctors name:
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
          <div style={{ flexBasis: "100%", flexDirection: "row", display: "flex", padding: "1%", flexWrap: "wrap",  }}>
              <div style={{ width: 200, flexBasis: "30%", justifyContent: "center", display: "flex", alignItems: "center", fontWeight: "bold" }}>
             <img  width="200" src="https://img.medscape.com/thumbnail_library/dt_140605_serious_male_doctor_hospital_800x600.jpg"/>
            </div>
              <div style={{ padding: "1%", flexBasis: "70%", }}>
                  <div style={{  padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD",fontSize:14 }}>
                    5515181581531561531
              </div>
                  <div style={{  padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD",fontSize:14 }}>
                    Dr. tabassum
              </div>
                  <div style={{  padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD",fontSize:14 }}>
                    Dr. niccki
              </div>
                  <div style={{  padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD",fontSize:14 }}>
                    r-592 sector 9 north karachi
              </div>
                  <div style={{  padding: "1%", alignItems: "center", display: "flex", color: "#C2BDBD",fontSize:14 }}>
                    etate@gmail.com
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

export default MyDoctors



