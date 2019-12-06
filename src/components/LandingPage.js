import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import { Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout, NavDropdown, Card, Jumbotron } from 'react-bootstrap';
import AppHeader from './common/AppHeader';
import HowItWorks from './HowItWorks';
// import {} from 'bootstrap';
// import { ButtonToolbar,DropdownButton,Dropdown , Navbar,Nav,NavDropdown} from 'react-bootstrap';
import styles from './style.css';
import { FaLevelUpAlt, FaAngleDoubleRight, FaMapMarkerAlt, FaPhone, } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import ActivityIndicator from './common/ActivityIndicator';
import { connect } from "react-redux";
import { signUpAction } from '../store/action/action';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// const { Header, Footer, Sider, Content } = Layout;

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { fullName: "", email: "", password: "", confirmPassword: "", phone: "" };
    }


    handleSwitchChange = nr => () => {
        let switchNumber = `switch${nr}`;
        this.setState({
            [switchNumber]: !this.state[switchNumber]
        });
    }
    render() {
        const { fullName, email, password, confirmPassword, phone } = this.state
        const { isLoader, isError, errorMessage, currentUser } = this.props
        let user = { fullName, email, phone, password, confirmPassword, status: false }
        return (
            <div style={{ backgroundColor: "#fff", }}>
                <AppHeader login={true} button="Signup" />

                <div style={{ position: "relative" }}>
                    <img style={{ width: "100%", height: 550, }} src={require('../assets/image1b.jpg')} alt="aaaa" />
                    {!currentUser &&
                        <div style={{
                            position: "absolute",
                            top: 45,
                            right: 100,
                            // width: "100%",
                        }}>
                            {/* signup form */}
                            <div style={{
                                backgroundColor: "#fff", width: 340, padding: "5%", marginTop: "3%",
                                // borderRadius: 10,
                                webkitBoxShadow: "3px 3px 3px #9E9E9E",
                                mozBoxShadow: "3px 3px 3px #9E9E9E",
                                boxShadow: "3px 3px 3px #9E9E9E",
                                height: 440
                            }}>
                                <center>
                                    <div style={{ fontWeight: "bold", marginTop: 10 }}>
                                        Register in second
                                    </div>
                                    <Form style={{ width: "80%", marginTop: "2%" }}>
                                        <Form.Control style={{ marginTop: 10 }} defaultValue={fullName} onChange={(e) => { this.setState({ fullName: e.target.value }) }}
                                            type="text" placeholder="Full name" />
                                        <Form.Control style={{ marginTop: 10 }} defaultValue={email} onChange={(e) => { this.setState({ email: e.target.value }) }}
                                            type="email" placeholder="Enter email" />
                                        <Form.Control style={{ marginTop: 10 }} defaultValue={phone} onChange={(e) => { this.setState({ phone: e.target.value }) }}
                                            type="number" placeholder="Enter phone" />
                                        <Form.Control style={{ marginTop: 10 }} defaultValue={password} onChange={(e) => { this.setState({ password: e.target.value }) }}
                                            type="password" placeholder="Enter password" />
                                        <Form.Control style={{ marginTop: 10 }} defaultValue={confirmPassword} onChange={(e) => { this.setState({ confirmPassword: e.target.value }) }}
                                            type="password" placeholder="Confirm password" />
                                    </Form>
                                    {isLoader ?
                                        <Button style={{ width: 255, fontSize: 11, marginTop: "3%" }} variant="primary" disabled={true}>
                                            <ActivityIndicator />
                                        </Button> :
                                        <Button onClick={() => { this.props.signUpAction(user) }} style={{ width: 255, fontSize: 11, marginTop: "3%" }} variant="primary" > Create your account</Button>
                                    }
                                    <div>
                                        or<Link to="/login"> <span> login?</span></Link>
                                        {/* <span>Already hav an account? </span> */}
                                    </div>
                                    <div style={{ fontSize: 12 }}>
                                        By signing up you agree to the<a href="#"> <span> Terms of services</span></a>
                                        {/* <span>Already hav an account? </span> */}
                                    </div>
                                    {isError && <div><span style={{ color: "red", fontSize: 13 }}>{errorMessage}</span></div>}
                                </center>
                            </div>





                        </div>}
                </div>




                {/* </div> */}
                {/* Why choose us*/}
                <div style={{  padding: "2%" }} >
                    <center style={{ fontSize: 25, fontWeight: "bold", }} id="whyChooseUs">
                        Why choose us
                     </center>
                    <div style={{ display: "flex",flexWrap: "wrap", justifyContent: "center" }} >
                        <div style={{ marginRight:25, marginTop: "2%", justifyContent: "center", display: "flex" }}>

                            <div style={{ width: 350, }}>
                                <img style={{ width: 350, }} src={require("../assets/whychooseus.png")} alt="aaaa" />
                                {/* </div> */}
                            </div>
                        </div>
                        <div style={{ marginLeft:25, marginTop: "2%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                            {/* <div style={{  background: "blue",  width: 350, }}>

                        <div style={{  background: "pink", }}>
                            Why choos us
                        </div> */}
                            <div style={{ width: 500, }}>
                                <div style={{}}>
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                            </div>
                                <Button variant="outline-primary">Read More</Button>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    {/* How it works*/}
                    <center style={{ fontSize: 25, fontWeight: "bold", marginTop: "2%" }} id="HowItWorks">
                        How it works
                  </center>
                   <HowItWorks/>

                    {/* pricing */}
                    <center style={{ fontSize: 25, fontWeight: "bold", marginTop: "2%" }} id="Pricing">
                        Pricing
                  </center>
                    <center>
                        <div style={{ display: "flex", flexBasis: "100%", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }} id="2">

                            <Card style={{ width: '15rem', paddingTop: "2%", paddingBottom: "2%", marginLeft: "2%", marginTop: "2%" }}>
                                <Card.Body>
                                    <Card.Title style={{ color: "blue", fontSize: 25 }}>2 months free</Card.Title>
                                    <Card.Title style={{ color: "blue", fontSize: 17 }}>if you paid anually</Card.Title>
                                    <Card.Text style={{ marginTop: "10%" }}>
                                    free trial
            </Card.Text>
                                    <Card.Text style={{ marginTop: "5%" }}>
                                    50% discount
            </Card.Text>
                                    <Card.Text style={{ marginTop: "5%" }}>
                                    number of doctors
            </Card.Text>
                                    <Button style={{ background: "#3C6AB3",borderRadius:250, borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Buy Now</Button>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem', paddingTop: "2%", paddingBottom: "2%", marginLeft: "2%", marginTop: "2%" }}>
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
                                    <Button style={{ background: "#3C6AB3",borderRadius:250, borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Buy Now</Button>

                                </Card.Body>
                            </Card><Card style={{ width: '15rem', paddingTop: "2%", paddingBottom: "2%", marginLeft: "2%", marginTop: "2%" }}>
                                <Card.Body>
                                    <Card.Title style={{ color: "blue", fontSize: 25 }}>Single Clinic</Card.Title>
                                    <Card.Title style={{ color: "blue", fontSize: 17 }}>$ 99 / month</Card.Title>
                                    <Card.Text style={{ marginTop: "10%" }}>
                                        30 days
            </Card.Text>
                                    <Card.Text style={{ marginTop: "5%" }}>
                                        30 days
            </Card.Text>
                                    <Card.Text style={{ marginTop: "5%" }}>
                                    4
            </Card.Text>
                                    <Button style={{ background: "#3C6AB3", borderRadius:250,borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Buy Now</Button>

                                </Card.Body>
                            </Card><Card style={{ width: '15rem', paddingTop: "2%", paddingBottom: "2%", marginLeft: "2%", marginTop: "2%" }}>
                                <Card.Body>
                                    <Card.Title style={{ color: "blue", fontSize: 25 }}>Multi Clinic</Card.Title>
                                    <Card.Title style={{ color: "blue", fontSize: 17 }}>$ 75 / month</Card.Title>
                                    <Card.Text style={{ marginTop: "10%" }}>
                                    30 days
            </Card.Text>
                                    <Card.Text style={{ marginTop: "5%" }}>
                                        0 days
            </Card.Text>
                                    <Card.Text style={{ marginTop: "5%" }}>
                                        12
            </Card.Text>
                                    <Button style={{ background: "#3C6AB3",borderRadius:250, borderColor: "#3C6AB3", marginTop: "10%" }} variant="primary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </center>
                    <div style={{ marginLeft: "12%", color: "#3C6AB3", marginTop: "2%", fontSize: 13, display: "flex", justifyContent: "center" }} >
                        You save 17 %
        </div>
                    <div style={{ marginTop: "1%", display: "flex", justifyContent: "center" }}>
                        <div style={{ marginRight: "1%", fontWeight: "bold" }} >
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
                                Year <FaLevelUpAlt style={{ color: "#3C6AB3", fontSize: 22 }} />
                            </label>
                        </div>
                    </div>
                </div>
                <center  style={{background:"#EEF5FF"}}>

                    <Button style={{ background: "#3C6AB3",borderRadius:250, borderColor: "#3C6AB3", marginTop: "3%" }} variant="primary" size="lg">Start free trial now!</Button>
                    <div style={{ color: "grey", fontSize: 11, marginTop: "1%" }}>
                        No credit card needed!
</div>
                </center>
                {/* schedule jomtron */}
                <div style={{ background: "#EEF5FF", padding: "3%" }}>
                    <div style={{ display: "flex", flexBasis: "100%", justifyContent: "center", }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>

                                Do you need an <span style={{ color: "#3C6AB3" }}>Enterprise solution?</span>
                            </div>
                        </div>
                        <div style={{ marginLeft: "3%" }}>
                            <Button style={{ borderColor: "#3C6AB3", }} variant="outline-primary" size="lg">Schedule a Meeting</Button>
                        </div>
                    </div>
                </div>
                {/* footer jomtron */}

                {/* footer jomtron */}

                <div style={{ display: "flex", flexBasis: "100%", justifyContent: "center", background: "#1B1B1B" }}>
                    <div style={{ flexBasis: "20%", padding: "2%" }}>
                        <h6 style={{ color: "#fff", fontWeight: "bold" }}>
                            About us
                         </h6>
                        <div style={{ color: "#fff", fontSize: 12 }}>
                            lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                      </div>
                    </div>
                    <div style={{ flexBasis: "20%", padding: "2%" }}>
                        <h6 style={{ color: "#fff", fontWeight: "bold" }}>
                            Site Map
                         </h6>
                        <div style={{ color: "#fff", fontSize: 12 }}>
                            <FaAngleDoubleRight /> About us
                         </div>
                        <div style={{ color: "#fff", fontSize: 12 }}>
                            <FaAngleDoubleRight /> Services
                      </div>
                        <div style={{ color: "#fff", fontSize: 12 }}>
                            <FaAngleDoubleRight /> Testimonials
                          </div>
                        <div style={{ color: "#fff", fontSize: 12 }}>
                            <FaAngleDoubleRight /> Gallery
                     </div>
                        <div style={{ color: "#fff", fontSize: 12 }}>
                            <FaAngleDoubleRight /> Blog
                      </div>
                    </div>
                    <div style={{ flexBasis: "20%", padding: "2%" }} >
                        <h6 style={{ color: "#fff", fontWeight: "bold" }}>
                            Contact Us
                     </h6>
                        <div style={{ color: "#fff", fontSize: 12 }}>
                            <FaMapMarkerAlt style={{ color: "#47C2C4", }} /> International House, 12 Constance Street, London E16 2DQ
                          </div>
                        <div style={{ color: "#fff", fontSize: 12 }}>
                            <FaPhone style={{ color: "#47C2C4", }} /> 11072415
                          </div>
                        <div style={{ color: "#fff", fontSize: 12 }}>
                            <MdMailOutline style={{ color: "#47C2C4", }} /> support@etat-life.com
                    </div>

                    </div>
                    <div style={{ flexBasis: "20%", padding: "2%" }} >
                        <h6 style={{ color: "#fff", fontWeight: "bold" }}>
                            FOLLOW US
                       </h6>
                        <div style={{
                            flexDirection: "row", display: "flex", flexWrap: "wrap",
                        }}>

                            <div style={{
                                background: "#fff", borderRadius: "50%",
                                width: 50, justifyContent: "center", display: "flex", alignItems: "center",
                                height: 50, margin: 5
                            }}>
                                <div style={{ color: "#3D69B2" }}>
                                    {/* <a href="#!" className="fb-ic mr-3"> */}
                                    <MDBIcon fab icon="facebook-f" />
                                    {/* </a>/ */}
                                </div>
                            </div>
                            <div style={{
                                background: "#fff", borderRadius: "50%",
                                width: 50, justifyContent: "center", display: "flex", alignItems: "center",
                                height: 50, margin: 5
                            }}>
                                <div style={{ color: "#3D69B2" }}>
                                    {/* <a href="#!" className="fb-ic mr-3"> */}
                                    <MDBIcon fab icon="twitter" />
                                    {/* </a>/ */}
                                </div>
                            </div>
                            <div style={{
                                background: "#fff", borderRadius: "50%",
                                width: 50, justifyContent: "center", display: "flex", alignItems: "center",
                                height: 50, margin: 5
                            }}>
                                <div style={{ color: "#3D69B2" }}>
                                    {/* <a href="#!" className="fb-ic mr-3"> */}
                                    <MDBIcon fab icon="linkedin-in" />
                                    {/* </a>/ */}
                                </div>
                            </div>
                            <div style={{
                                background: "#fff", borderRadius: "50%",
                                width: 50, justifyContent: "center", display: "flex", alignItems: "center",
                                height: 50, margin: 5
                            }}>
                                <div style={{ color: "#3D69B2" }}>
                                    {/* <a href="#!" className="fb-ic mr-3"> */}
                                    <MDBIcon fab icon="google-plus-g" />
                                    {/* </a>/ */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* reserve company */}
                <div style={{ background: "#111111", justifyContent: "flex-end", color: "white", display: "flex", fontSize: 11, height: 25, alignItems: "center" }}>
                    <div>
                        @ 2019 ETAT LIFE All rights reserved
        </div>
                </div>

            </div >
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
        signUpAction: (user) => {
            dispatch(signUpAction(user))
        },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
