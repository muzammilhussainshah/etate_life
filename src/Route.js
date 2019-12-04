import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import login from './components/login';
import signup from './components/signup';
import home from './components/home';
import pricing from './components/pricing';
import OpeningHours from './components/OpeningHours';
import test from './components/test';
import bussinesCatogery from './components/bussinesCatogery';
import addDoctor from './components/addDoctor';
import AddBookingAdmin from './components/AddBookingAdmin';
import MyClinics from './components/MyClinics';
import MyDoctors from './components/MyDoctors';
import Verify from './components/Verify';
import ForgetPassword from './components/forgetPassword';
import LandingPage from './components/LandingPage';
import { UserDataGet, loaderCall } from './store/action/action';
import { connect } from "react-redux";
import *as firebase from 'firebase';
import history from './History';
class Routers extends Component {
    constructor(props) {
        super(props);
        this.state = { initialRoute:LandingPage };
    }
    componentWillMount() {
        const { UserDataGet, loaderCall } = this.props
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user,"uuuuuuuu")
            if (user) {
                // alert("s")
                loaderCall()
                // User is signed in.
                console.log(user, "user in route")
                UserDataGet(user.uid, user.email)
                this.setState({
                    initialRoute:home
                })
            } else {
                // this.setState({
                //     initialRout:<LandingPage/>
                // })
            }
        });
    }
    render() {
        return (
            <Router history={history}>
                <div>
                    {/* <Route exact path="/" component={test} /> */}
                    {/* <Route exact path="/" component={login} /> */}
                    <Route exact path="/" component={this.state.initialRoute} />
                    {/* <Route exact path="/" component={test} /> */}


                    <Route exact path="/LandingPage" component={LandingPage} />
                    <Route exact path="/Verify" component={Verify} />
                    <Route exact path="/MyDoctors" component={MyDoctors} />
                    <Route exact path="/MyClinics" component={MyClinics} />
                    <Route exact path="/bussinesCatogery" component={bussinesCatogery} />
                    <Route exact path="/AddBookingAdmin" component={AddBookingAdmin} />
                    <Route exact path="/addDoctor" component={addDoctor} />
                    <Route exact path="/OpeningHours" component={OpeningHours} />
                    <Route exact path="/pricing" component={pricing} />
                    <Route exact path="/home" component={home} />
                    <Route exact path="/login" component={login} />
                    <Route exact path="/signup" component={signup} />
                    <Route exact path="/forgetPassword" component={ForgetPassword} />
                    {/* <Route exact path="/courseName" component={CourseName} />
                    <Route exact path="/ViewData" component={ViewData} />
                    <Route exact path="/signin" component={Signin} /> */}


                </div>
            </Router>
        )
    }
}

let mapStateToProps = state => {
    return {
        isLoader: state.root.isLoader,
        isError: state.root.isError,
        errorMessage: state.root.errorMessage,
        //   errorInStore: state.root.error,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        UserDataGet: (uid) => {
            dispatch(UserDataGet(uid))
        },
        loaderCall: () => {
            dispatch(loaderCall())
        },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Routers);



