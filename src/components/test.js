import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    cart:""
    };
  }
  componentWillMount() {
    this.setState({
      cart: this.props.history.location.state
    })
    console.log(this.props.history.location.state, "++++++++++++++")
  }
  render() {
    const { cart} = this.state
    console.log(cart, "555555555")
    return (
      <div style={{ display: "flex", justifyContent: "center", background: "#F0F0F0", height: window.innerHeight }}>
        <StripeProvider apiKey="pk_test_U9uY7QRX0EXNK498S9xXMdLq00lZFZLU1g">
          <div className="example" style={{
            width: 550, height: 300, border: "0.1px solid #F2F5F3", padding: 15, marginTop: "2%",
            background: "#fff",
            borderRadius: 10,
            webkitBoxShadow: "3px 3px 3px #9E9E9E",
            mozBoxShadow: "3px 3px 3px #9E9E9E",
            boxShadow: "3px 3px 3px #9E9E9E",
          }}>
            <h1>{cart && cart.package}</h1>
            <h4>price : {cart && cart.price}</h4>
            <h4>duration : {cart && cart.duration}</h4>
            <Elements>
              <CheckoutForm data={cart} />
            </Elements>
          </div>
        </StripeProvider>
      </div>

    );
  }
}

export default App;