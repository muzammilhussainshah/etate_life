import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import login from './components/login';
import signup from './components/signup';
import home from './components/home';
import test from './components/test';
import history from './History';
class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={test} />
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



