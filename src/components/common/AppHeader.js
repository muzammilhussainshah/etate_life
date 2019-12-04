import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, Dropdown,DropdownButton } from 'react-bootstrap';
// import { Form,FormControl} from 'bootstrap';
// const { Header, Footer, Sider, Content } = Layout;
import *as firebase from 'firebase';
import { connect } from "react-redux";
import { logout} from '../../store/action/action';

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  logout(){
   this.props.logout()
  }
  render() {
    const { login, button,currentUser } = this.props
    const {  } = this.state
    return (
      <div style={{}}>
        <Navbar style={{}} expand="lg">
          <Navbar.Brand href="#home">
            <div style={{ marginLeft: "15%", }}>
              <img style={{ width: "100%", }} src={require('../../assets/updatedLogo.png')} alt="aaaa" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >
            </Nav>
            <Form inline>
              <Nav className="mr-auto" >
                <Nav.Link href="landingPage#whyChooseUs" style={{ color: "black", fontWeight: "bold" }}>Why choose us</Nav.Link>
                <Nav.Link href="landingPage#HowItWorks" style={{ color: "black", fontWeight: "bold" }}>How it works</Nav.Link>
                <Nav.Link href="landingPage#Pricing" style={{ color: "black", fontWeight: "bold" }}>Pricing</Nav.Link>
                <Nav.Link href={!currentUser ? "Login" : "/"} style={{ color: "blue", fontWeight: "bold" }}>{!currentUser ? "Login" : null}</Nav.Link>
               {currentUser&& <DropdownButton
                        title={"Profile"}
                        variant={"Secondary"}
                        id={`dropdown-variants-Secondary`}
                        key={"Secondary"}
                      >
                        <Dropdown.Item eventKey="1" href="/home">My account</Dropdown.Item>
                        <Dropdown.Item eventKey="2" href="/MyClinics">My clinincs</Dropdown.Item>
                        <Dropdown.Item eventKey="3"href="/MyDoctors">My doctors</Dropdown.Item>
                        <Dropdown.Item eventKey="4"href="/MyClinics">My payment</Dropdown.Item>
                        <Dropdown.Item eventKey="5" onClick={()=>this.logout()}>Logout</Dropdown.Item>
                      </DropdownButton>}
                {/* <Nav.Link href={!user ? "Login" : "/"} style={{ color: "blue", fontWeight: "bold" }}>{!user ? "Login" : "Profile"}</Nav.Link> */}
              </Nav>
              {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
              {!currentUser && <a href={"signup"}><Button variant="outline-primary">{button}</Button></a>}

            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div style={{ background: "#F0F3F1", }}>
          <hr />
        </div>
      </div>

    )
  }
}

let mapStateToProps = state => {
  return {
      isLoader: state.root.isLoader,
      isError: state.root.isError,
      errorMessage: state.root.errorMessage,
      currentUser: state.root.currentUser,
      //   errorInStore: state.root.error,
  };
};
function mapDispatchToProps(dispatch) {
  return ({
      logout: () => {
          dispatch(logout())
      },
      // loaderCall: () => {
      //     dispatch(loaderCall())
      // },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);

