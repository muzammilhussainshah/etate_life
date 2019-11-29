import React, { Component, } from 'react';
import { Button, Spinner } from 'react-bootstrap';
class ActivityIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {label,type,placeholder,defaultValue } = this.props
        return (
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
        )
    }
}

export default ActivityIndicator



