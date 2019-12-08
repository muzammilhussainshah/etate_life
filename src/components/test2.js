import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import countryList from './common/countryList';
import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import PhoneInput,{ getCountryCallingCode, } from 'react-phone-number-input'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input'
import Select from 'react-select';
import en from 'react-phone-number-input/locale/en.json'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:"",country:"",bussinesAddress:""
    };
  }
  componentWillMount() {
    let code = getCountryCallingCode("PK")
  
  }
  render() {
    const { cart} = this.state
    console.log(cart, "555555555")
    return (
      <div>
  <Select
                      value={this.state.bussinesAddress}
                      onChange={(value) => console.log(value)}
                      options={countryList}
                    />
    </div>

    );
  }
}

export default App;