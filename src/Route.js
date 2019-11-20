import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import login from './components/login';
import history from './History';
class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={login} />
                    {/* <Route exact path="/courseName" component={CourseName} />
                    <Route exact path="/ViewData" component={ViewData} />
                    <Route exact path="/signin" component={Signin} /> */}


                </div>
            </Router>
        )
    }
}

export default Routers;



