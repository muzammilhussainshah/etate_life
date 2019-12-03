import React, { Component, } from 'react';
import { Button, Form, Row, Col, ListGroup,  DropdownButton, Dropdown} from 'react-bootstrap';
import { MDBIcon,  } from 'mdbreact';

class LargeList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { heading,data} = this.props
        console.log(data,"ddddddd")
        return (
            <div style={{ background: "#F0F0F0", height: '520px', padding: "3%" }}>
            <h3 style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>
        {heading}:
            </h3>
            <div style={{ height: '400px', background: "#F0F0F0", overflowX: 'scroll', }} >
              <ListGroup>
                {data&&data.map((v, i) => {
                  console.log(v,"vvvvvvvvvv")
                  return (
                    <a>
                      <ListGroup.Item style={{
                        webkitBoxShadow: "3px 3px 3px #9E9E9E",
                        mozBoxShadow: "3px 3px 3px #9E9E9E",
                        boxShadow: "3px 3px 3px #9E9E9E", flexDirection: "row", display: "flex", width: 300, alignItems: "center"
                      }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img style={{ width: 50, }} src={v.ClinicImage} />
                        </div>
                        <div style={{ marginLeft: 10 }}>
                          <div style={{ fontWeight: "bold", color: "#8C8888" }}>
                    {v.BussinesName}
                      </div>
                          <div style={{ fontSize: 11, color: "#8C8888" }}>
                          {v.BussinesAddres}

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
              <a href="/home"><Button variant="link">Back</Button></a>
            </div>
          </div>
        )
    }
}

export default LargeList



