import React, { Component, } from 'react';
import { Button, Form, Row, Col, } from 'react-bootstrap';
import AppHeader from './common/AppHeader';
import BreadCrum from './common/BreadCrum';
import Input from './common/input';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let inputs = [
            { label: "Full Name", type: "text", placeholder: "Full Name", defaultValue: "Muzammil Shah" },
            { label: "Phone", type: "number", placeholder: "Mobile Number", defaultValue: "034555482153" },
            { label: "Email", type: "email", placeholder: "Email", defaultValue: "abc@gmail.com" },
            { label: "Current Password", type: "password", placeholder: "Current Password",  },
            { label: "New Password", type: "password", placeholder: "New Password",  },
            { label: "Confirm Password", type: "password", placeholder: "Confirm Password",  },
        ]
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
                                    <Input label={v.label} type={v.type} placeholder={v.placeholder}  defaultValue={v.defaultValue}/>
                                )
                            })}
                        </Form>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: "5%", paddingRight: "10%" }}>
                    <Button variant="outline-primary">Save Changes</Button>
                    <Button variant="outline-primary"  >Next</Button>
                </div>
            </div>
        )
    }
}

export default Home



