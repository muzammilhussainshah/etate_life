import React from 'react';
import { Gradient } from 'react-gradient';
import { Navbar, Nav, Button,ButtonToolbar } from 'react-bootstrap';
 
const gradients = [
    ['#bd19d6', '#ea7d10'],
    ['#ff2121', '#25c668'],
];
 
export default function App() {
    return (
      <ButtonToolbar>
       <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="info">Info</Button>
  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>
  <Button variant="link">Link</Button>
    </ButtonToolbar>
      

    );
}