import React, { Component, } from 'react';
// import { Layout, Menu, Breadcrumb,Row, Col, } from 'antd';
import {
  Navbar, Nav, Button, Form, FormControl, Row, Col, Container, Layout, NavDropdown, Card, Jumbotron, DropdownButton, Dropdown,
  ListGroup,
} from 'react-bootstrap';
import AppHeader from './common/AppHeader';
// import {} from 'bootstrap';
// import { ButtonToolbar,DropdownButton,Dropdown , Navbar,Nav,NavDropdown} from 'react-bootstrap';
import styles from './style.css';
import { FaLevelUpAlt, FaAngleDoubleRight, FaMapMarkerAlt, FaPhone, } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// var React = require('react');
var QRCode = require('qrcode.react');
// Import FilePond styles
// import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// const { Header, Footer, Sider, Content } = Layout;
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch1: true,
    };
  }

  myFile(err, item) {
    console.log(item.file, 'file')
    this.setState({ images: item.file }, () => {
        console.log(this._update(), 'updated image')
    })

}
_update() {
  const { images } = this.state;
  // var arr = [];
  var file = images;
  var reader = new FileReader();

  reader.onloadend = () => {
      this.setState({ ProductImages: reader.result })
      console.log(reader.result, 'result here')
  }
  if (file) {
      reader.readAsDataURL(file);
  }


}

  render() {
    return (
      <QRCode value="nabeel chonay wala" />
    )
  }
}

export default Test



