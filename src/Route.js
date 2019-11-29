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
import LandingPage from './components/LandingPage';
import history from './History';
class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    {/* <Route exact path="/" component={test} /> */}
                    {/* <Route exact path="/" component={login} /> */}
                    <Route exact path="/" component={LandingPage} />


                    {/* <Route exact path="/" component={test} /> */}
                    <Route exact path="/LandingPage" component={LandingPage} />
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
                    {/* <Route exact path="/courseName" component={CourseName} />
                    <Route exact path="/ViewData" component={ViewData} />
                    <Route exact path="/signin" component={Signin} /> */}


                </div>
            </Router>
        )
    }
}

export default Routers;



