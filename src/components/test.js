import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout,NavDropdown } from 'react-bootstrap';
import AppHeader from './common/AppHeader';
// import {} from 'bootstrap';
// import { ButtonToolbar,DropdownButton,Dropdown , Navbar,Nav,NavDropdown} from 'react-bootstrap';
import styles from './style.css';

// const { Header, Footer, Sider, Content } = Layout;

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { height: props.height, width: props.width };
    }

    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }


    render() {
        return (
            <div style={{}}>

            <Navbar style={{background:"#F0F3F1"}} expand="lg">
            <Navbar.Brand href="#home">
            <div style={{ marginLeft: "15%", }}>
                        <img style={{ width: "90%", }} src={require('../assets/logo.png')} alt="aaaa" />
                    </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" >
                <Nav.Link href="#"style={{color:"black",fontWeight:"bold"}}>Why choose us</Nav.Link>
                <Nav.Link href="#"style={{color:"black",fontWeight:"bold"}}>How it works</Nav.Link>
                <Nav.Link href="#"style={{color:"black",fontWeight:"bold"}}>Pricing</Nav.Link>
                <Nav.Link href="#" style={{color:"blue",fontWeight:"bold"}}>Login</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Form inline>
                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                <Button variant="outline-primary">Signup</Button>

              </Form>
            </Navbar.Collapse>
          </Navbar>
          <div style={{background:"#F0F3F1",}}>
<hr/>
                </div>
                </div>
        )
    }
}

export default Test



