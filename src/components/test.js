import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout, NavDropdown, Card } from 'react-bootstrap';
import AppHeader from './common/AppHeader';
// import {} from 'bootstrap';
// import { ButtonToolbar,DropdownButton,Dropdown , Navbar,Nav,NavDropdown} from 'react-bootstrap';
import styles from './style.css';

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
      <div style={{ backgroundColor: "#fff",}}>
        <AppHeader />
        {/* <div style={{ background: "#F0F3F1", }}>
          <hr />
        </div> */}
        <div>
          <div style={{}}>
            <img style={{ width: "100%", }} src={require('../assets/image1.jpg')} alt="aaaa" />
          </div>
        </div>
        <center style={{ fontSize: 25, fontWeight: "bold", marginTop: "3%" }}>
          Pricing
        </center>
        <center>
          <div style={{ display: "flex", flexBasis: "100%", justifyContent: "center", marginTop: "3%", alignItems: "center", }}>
            <Card style={{ width: '18rem', paddingTop: "2%", paddingBottom: "2%" }}>
              <Card.Body>
                <Card.Title style={{ color: "blue", fontSize: 25 }}>Solo Clinic</Card.Title>
                <Card.Title style={{ color: "blue", fontSize: 17 }}>$ 75 / month</Card.Title>
                <Card.Text style={{ marginTop: "10%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  1
            </Card.Text>
                <Button style={{ background: "#3C6AB3", borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Go somewhere</Button>

              </Card.Body>
            </Card><Card style={{ width: '18rem', paddingTop: "2%", paddingBottom: "2%" }}>
              <Card.Body>
                <Card.Title style={{ color: "blue", fontSize: 25 }}>Solo Clinic</Card.Title>
                <Card.Title style={{ color: "blue", fontSize: 17 }}>$ 75 / month</Card.Title>
                <Card.Text style={{ marginTop: "10%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  1
            </Card.Text>
                <Button style={{ background: "#3C6AB3", borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Go somewhere</Button>

              </Card.Body>
            </Card><Card style={{ width: '18rem', paddingTop: "2%", paddingBottom: "2%" }}>
              <Card.Body>
                <Card.Title style={{ color: "blue", fontSize: 25 }}>Solo Clinic</Card.Title>
                <Card.Title style={{ color: "blue", fontSize: 17 }}>$ 75 / month</Card.Title>
                <Card.Text style={{ marginTop: "10%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  1
            </Card.Text>
                <Button style={{ background: "#3C6AB3", borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Go somewhere</Button>

              </Card.Body>
            </Card><Card style={{ width: '18rem', paddingTop: "2%", paddingBottom: "2%" }}>
              <Card.Body>
                <Card.Title style={{ color: "blue", fontSize: 25 }}>Solo Clinic</Card.Title>
                <Card.Title style={{ color: "blue", fontSize: 17 }}>$ 75 / month</Card.Title>
                <Card.Text style={{ marginTop: "10%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  60 days
            </Card.Text>
                <Card.Text style={{ marginTop: "5%" }}>
                  1
            </Card.Text>
                <Button style={{ background: "#3C6AB3", borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Go somewhere</Button>

              </Card.Body>
            </Card>
          </div>
        </center>
        {/* switch */}
        <div style={{marginTop:"5%",display:"flex",justifyContent:"center"}}>
            <div style={{marginRight:"1%",fontWeight:"bold"}} >
            Month 
        </div>
        <div className='custom-control custom-switch'>
        {/* <span >
            Year
        </span> */}
          <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitches'
            checked={this.state.switch1}
            onChange={this.handleSwitchChange(1)}
            readOnly
          />
          <label className='custom-control-label' htmlFor='customSwitches'>
            Year
        </label>
        </div>

        </div>
        <center >
          
        <Button style={{ background: "#3C6AB3", borderColor: "#3C6AB3", marginTop: "3%" }} variant="primary" size="lg">Start free trial now!</Button>
      <div style={{color:"grey",fontSize:11,marginTop:"1%"}}>
        No credit card needed!
      </div>
        </center>


      </div >
    )
  }
}

export default Test



