import React, { Component, } from 'react';
import {  Form, Row, Col, } from 'react-bootstrap';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {label,type,placeholder,defaultValue } = this.props
        return (
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={5}>
                    {label}
                </Form.Label>
                <Col sm={7}>
                    <Form.Control type={type} placeholder={placeholder} defaultValue={defaultValue} />
                </Col>
            </Form.Group>
        )
    }
}

export default Input



