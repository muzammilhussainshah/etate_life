import React, { Component, } from 'react';
import { Button, Form, Row, Col, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap';
class AddHours extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { } = this.props
        return (
            <div style={{ display: "flex", justifyContent: "center", margin: "2% " }}>
                <Form style={{}} >
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={4} style={{ alignItems: "center", display: "flex", color: "#C2BDBD", }}>
                            Timing
                         </Form.Label>
                        <Col sm={8}>
                            <DropdownButton
                                title={"Morning"}
                                variant={"Secondary"}
                                id={`dropdown-variants-Secondary`}
                                key={"Secondary"}>
                                <Dropdown.Item eventKey="1">Morning</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Afternoon</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Evening</Dropdown.Item>
                            </DropdownButton>

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={4} style={{ alignItems: "center", display: "flex", color: "#C2BDBD", }}>
                            From
                         </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="From" />
                            {/* <Form.Control type="text" placeholder="Bussines addres" /> */}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={4} style={{ alignItems: "center", display: "flex", color: "#C2BDBD", }}>
                            To
                         </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="number" placeholder="to" />
                        </Col>
                    </Form.Group>
                    <div style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
                        <Button variant="primary" type="submit" size="lg" block>
                            Add
                    </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default AddHours



