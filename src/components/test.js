import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout, NavDropdown ,Card} from 'react-bootstrap';
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

       <AppHeader/>
        {/* <div style={{ background: "#F0F3F1", }}>
          <hr />
        </div> */}

        <div>
          <div style={{}}>
            <img style={{ width: "100%", }} src={require('../assets/image1.jpg')} alt="aaaa" />
          </div>
        </div>

        <center style={{fontSize:25,fontWeight:"bold",marginTop:"3%"}}>
        Pricing
        </center>
<center>

<div style={{display:"flex",flexBasis:"100%",justifyContent:"center",marginTop:"3%",alignItems:"center",}}>
<Card style={{ width: '18rem',paddingTop:"2%",paddingBottom:"2%" }}>
  <Card.Body>
    <Card.Title style={{color:"blue",fontSize:25}}>Solo Clinic</Card.Title>
    <Card.Title style={{color:"blue",fontSize:17}}>$ 75 / month</Card.Title>
    <Card.Text style={{marginTop:"10%"}}>
    60 days
    </Card.Text>
    <Card.Text style={{marginTop:"5%"}}>
    60 days
    </Card.Text>
    <Card.Text style={{marginTop:"5%"}}>
    1
    </Card.Text>
    <Button style={{background:"purple",borderColor:"purple",marginTop:"10%"}} variant="primary">Go somewhere</Button>

  </Card.Body>
</Card><Card style={{ width: '18rem',paddingTop:"2%",paddingBottom:"2%" }}>
  <Card.Body>
    <Card.Title style={{color:"blue",fontSize:25}}>Solo Clinic</Card.Title>
    <Card.Title style={{color:"blue",fontSize:17}}>$ 75 / month</Card.Title>
    <Card.Text style={{marginTop:"10%"}}>
    60 days
    </Card.Text>
    <Card.Text style={{marginTop:"5%"}}>
    60 days
    </Card.Text>
    <Card.Text style={{marginTop:"5%"}}>
    1
    </Card.Text>
    <Button style={{background:"purple",borderColor:"purple",marginTop:"10%"}} variant="primary">Go somewhere</Button>

  </Card.Body>
</Card><Card style={{ width: '18rem',paddingTop:"2%",paddingBottom:"2%" }}>
  <Card.Body>
    <Card.Title style={{color:"blue",fontSize:25}}>Solo Clinic</Card.Title>
    <Card.Title style={{color:"blue",fontSize:17}}>$ 75 / month</Card.Title>
    <Card.Text style={{marginTop:"10%"}}>
    60 days
    </Card.Text>
    <Card.Text style={{marginTop:"5%"}}>
    60 days
    </Card.Text>
    <Card.Text style={{marginTop:"5%"}}>
    1
    </Card.Text>
    <Button style={{background:"purple",borderColor:"purple",marginTop:"10%"}} variant="primary">Go somewhere</Button>

  </Card.Body>
</Card><Card style={{ width: '18rem',paddingTop:"2%",paddingBottom:"2%" }}>
  <Card.Body>
    <Card.Title style={{color:"blue",fontSize:25}}>Solo Clinic</Card.Title>
    <Card.Title style={{color:"blue",fontSize:17}}>$ 75 / month</Card.Title>
    <Card.Text style={{marginTop:"10%"}}>
    60 days
    </Card.Text>
    <Card.Text style={{marginTop:"5%"}}>
    60 days
    </Card.Text>
    <Card.Text style={{marginTop:"5%"}}>
    1
    </Card.Text>
    <Button style={{background:"purple",borderColor:"purple",marginTop:"10%"}} variant="primary">Go somewhere</Button>

  </Card.Body>
</Card>
</div>
</center>




      </div >
    )
  }
}

export default Test



