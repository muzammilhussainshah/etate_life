import React, { Component, } from 'react';
import { Button, Form, Row, Col, } from 'react-bootstrap';
import AppHeader from './common/AppHeader';
import {signinAction} from '../store/action/action';
import { connect } from "react-redux";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { height: props.height };
    }
    componentWillMount() {
        this.props.signinAction();
    }
    render() {
        return (
            <div style={{ backgroundColor: "#F0F0F0",height:window.innerHeight }}>
                {/* header */}
                              <AppHeader login={true} button="Signup"/>
                <center>
                        {/* login form */}
                    <div style={{
                        backgroundColor: "#fff", width: 360, padding: "1%", marginTop: "7%",
                        borderRadius: 10,
                        webkitBoxShadow: "3px 3px 3px #9E9E9E",
                        mozBoxShadow: "3px 3px 3px #9E9E9E",
                        boxShadow: "3px 3px 3px #9E9E9E",
                        height: 450
                    }}>
                        <div style={{  }}>
                            <img src={require('../assets/updatedLogo.png')} alt="aaaa" />
                        </div>
                        <div style={{ fontWeight: "bold",marginTop: 22, }}>
                            Connect to your patients
                        </div>
                        <Form style={{ width: "80%", marginTop: "7%" }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                         <Button style={{ width: 250,fontSize: 11, marginTop: "3%" }} variant="primary" > Send verification code</Button>
                        <Row style={{ marginTop: "7%" }} >
                            <Col>
                                <Form.Check type="checkbox" label="Remember me" />
                            </Col>
                            <Col>
                                <span>Forget password</span>
                            </Col>
                        </Row>
                        <hr />
                        <div>
                            <span>not a member yet? Join now</span>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}

// export default Login


let mapStateToProps = state => {
    return {
    //   loader: state.root.loader,
    //   errorInStore: state.root.error,
    };
  };
  function mapDispatchToProps(dispatch) {
    return ({
      signinAction: (obj) => {
        dispatch(signinAction(obj))
      },
    })
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
  

