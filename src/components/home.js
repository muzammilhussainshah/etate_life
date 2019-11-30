import React, { Component, } from 'react';
import { Button, Form, Row, Col, } from 'react-bootstrap';
import AppHeader from './common/AppHeader';
import BreadCrum from './common/BreadCrum';
import { userUpdate } from '../store/action/action';
import { connect } from "react-redux";
import Input from './common/input';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { fullName: "", email: "", password: "", confirmPassword: "", phone: "", currentPassword: "" };
    }

    componentWillReceiveProps(nextProps) {
        const { currentUser } = this.props
        console.log(nextProps, "componentWillMount",)
        this.setState({
            fullName: currentUser.fullName,
            email: currentUser.email,
            phone: currentUser.phone,
            currentPassword: currentUser.currentPassword,
            password: currentUser.password,
            confirmPassword: currentUser.confirmPassword,
        })
    }
    render() {
        const { isLoader, isError, errorMessage, currentUser, userUpdate } = this.props
        const { fullName, email, password, confirmPassword, phone, currentPassword } = this.state
        let user = { fullName, email, password, confirmPassword, phone, currentPassword }

        console.log(currentUser, "cccc",this.state)
        let inputs = [
            { state: "fullName", label: "Full Name", type: "text", placeholder: "Full Name", defaultValue: fullName },
            { state: "phone", label: "Phone", type: "number", placeholder: "Mobile Number", defaultValue: phone },
            { state: "email", label: "Email", type: "email", placeholder: "Email", defaultValue: email },
            { state: "currentPassword", label: "Current Password", type: "text", placeholder: "Current Password", },
            { state: "password", label: "New Password", type: "text", placeholder: "New Password", },
            { state: "confirmPassword", label: "Confirm Password", type: "text", placeholder: "Confirm Password", },
        ]
        console.log(this.state, "sssssss")
        return (
            <div style={{ backgroundColor: "#fff", }}>
                {/* header */}
                <AppHeader />
                {/* routes */}
                <BreadCrum />
                <div style={{
                    display: "flex", justifyContent: "center"
                }}>
                    <div style={{
                        padding: "1%", marginTop: "5%",
                        borderRadius: 10,
                    }} >
                        <Form style={{}}>
                            {inputs.map((v, i) => {
                                return (
                                    <Input label={v.label} type={v.type} placeholder={v.placeholder} disable={i === 2 && true} defaultValue={v.defaultValue}
                                        func={(text) => this.setState({ [v.state]: text })} />
                                )
                            })}
                        </Form>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: "5%", paddingRight: "10%" }}>
                    <Button variant="outline-primary" onClick={() => { userUpdate(user) }} >Save Changes</Button>
                    <Button variant="outline-primary"  >Next</Button>
                </div>
            </div>
        )
    }
}
let mapStateToProps = state => {
    return {
        isLoader: state.root.isLoader,
        isError: state.root.isError,
        errorMessage: state.root.errorMessage,
        currentUser: state.root.currentUser,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        userUpdate: (user) => {
            dispatch(userUpdate(user))
        },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


