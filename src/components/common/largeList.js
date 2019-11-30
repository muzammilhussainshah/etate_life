import React, { Component, } from 'react';
import { Button, Form, Row, Col, ListGroup,  DropdownButton, Dropdown} from 'react-bootstrap';
import { MDBIcon,  } from 'mdbreact';

class LargeList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { heading} = this.props
        return (
            <div style={{ background: "#F0F0F0", height: '520px', padding: "3%" }}>
            <h3 style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>
        {heading}:
            </h3>
            <div style={{ height: '400px', background: "#F0F0F0", overflowX: 'scroll', }} >
              <ListGroup>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8,].map((v, i) => {
                  return (
                    <a>
                      <ListGroup.Item style={{
                        webkitBoxShadow: "3px 3px 3px #9E9E9E",
                        mozBoxShadow: "3px 3px 3px #9E9E9E",
                        boxShadow: "3px 3px 3px #9E9E9E", flexDirection: "row", display: "flex", width: 300, alignItems: "center"
                      }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img style={{ width: 50, }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9fHPgpYtCP2Z16KQVpbekDDtcIazrx_0QgXwrwDIFb7Pplhx&s" alt="aaaa" />
                        </div>
                        <div style={{ marginLeft: 10 }}>
                          <div style={{ fontWeight: "bold", color: "#8C8888" }}>
                            Imam clinic
                      </div>
                          <div style={{ fontSize: 11, color: "#8C8888" }}>
                            R-592 sector 8,north karachi
                      </div>
                        </div>
                        <div style={{ justifyContent: "flex-end", display: "flex", position: "absolute", right: 10 }}>
                          <MDBIcon far icon="eye" />
                        </div>
                      </ListGroup.Item>
                    </a>
                  )
                })}
              </ListGroup>
            </div>
            <div className style={{}}>
              <Button variant="link">Back</Button>
            </div>
          </div>
        )
    }
}

export default LargeList



