import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout } from 'react-bootstrap';
// import { Form,FormControl} from 'bootstrap';
// const { Header, Footer, Sider, Content } = Layout;

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { height: props.height, width: props.width };
    }

    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }


    render() {
        const { login, button } = this.props
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
             
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Form inline>
              <Nav className="mr-auto" >
                <Nav.Link href="#"style={{color:"black",fontWeight:"bold"}}>Why choose us</Nav.Link>
                <Nav.Link href="#"style={{color:"black",fontWeight:"bold"}}>How it works</Nav.Link>
                <Nav.Link href="#"style={{color:"black",fontWeight:"bold"}}>Pricing</Nav.Link>
                <Nav.Link href="#" style={{color:"blue",fontWeight:"bold"}}>{login?"Login":"Profile"}</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                {button&&<Button variant="outline-primary">{button}</Button>}

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

export default AppHeader



