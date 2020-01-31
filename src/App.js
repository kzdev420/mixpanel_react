import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Mixpanel } from './mixpanel_wrapper';

class App extends React.Component {

  //------------total submissions------////
  Prequalification_Amount_Returned = () => {
    alert('Prequalification Amount Returned')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Prequalification Amount Returned');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  Prequalification_Amount = () => {
    alert('Prequalification Amount')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Prequalification Amount');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  No_Prequalification = () => {
    alert('No_Prequalification')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('No_Prequalification');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  
  //------------Type submissions------////

  Authentication_Success = () => {
    alert('Authentication Success')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Authentication Success');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  Authentication_Fail = () => {
    alert('Authentication Fail')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Authentication Fail');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  Authenticated_Users_Failing_Questionnaire = () => {
    alert('Authenticated_Users_Failing_Questionnaire')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Authenticated Users Failing Questionnaire');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  Equifax_Error = () => {
    alert('Equifax_Error')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Equifax Error');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  Short_Form = () => {
    alert('Short_Form')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Short Form');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  Boss_Error = () => {
    alert('Boss_Error')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Boss Error');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  Uncompleted_Equifax_Questionnaire = () => {
    alert('Uncompleted_Equifax_Questionnaire')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Uncompleted Equifax Questionnaire');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  Real_Fraud = () => {
    alert('Real_Fraud')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Real Fraud');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  Potentail_Fraud = () => {
    alert('Potentail_Fraud')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Potentail Fraud');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };
  
  //--------------funnel--------//

  signup = () => {
    // alert('signup')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('Sign Up');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  copied_link_A = () => {
    // alert('copied_link_A')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('copied_link_A');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  copied_link_B = () => {
    // alert('copied_link_B')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('copied_link_B');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  copied_link_C = () => {
    // alert('copied_link_C')
    try {      
      Mixpanel.identify("123456789");
      Mixpanel.track('copied_link_C');
    } catch (e) {
      Mixpanel.track('Unsuccessful');
    }
  };

  
  



  
  render() {
    return (
      <>
        <input type = "button" onClick={(e) => this.Prequalification_Amount_Returned(e)} value = "Prequalification Amount Returned" />
        <input type = "button" onClick={(e) => this.Prequalification_Amount(e)} value = "Prequalification Amount" />
        <input type = "button" onClick={(e) => this.No_Prequalification(e)} value = "No Prequalification" />
        <br />
        <input type = "button" onClick={(e) => this.Authentication_Success(e)} value = "Authentication Success" />
        <input type = "button" onClick={(e) => this.Authentication_Fail(e)} value = "Authentication Fail" />
        <input type = "button" onClick={(e) => this.Authenticated_Users_Failing_Questionnaire(e)} value = "Authenticated Users Failing Questionnaire" />
        <input type = "button" onClick={(e) => this.Equifax_Error(e)} value = "Equifax Error" />
        <input type = "button" onClick={(e) => this.Short_Form(e)} value = "Short Form" />
        <input type = "button" onClick={(e) => this.Boss_Error(e)} value = "Boss Error" />
        <input type = "button" onClick={(e) => this.Uncompleted_Equifax_Questionnaire(e)} value = "Uncompleted Equifax Questionnaire" />
        <input type = "button" onClick={(e) => this.Real_Fraud(e)} value = "Real Fraud" />
        <input type = "button" onClick={(e) => this.Potentail_Fraud(e)} value = "Potential Fraud" />
        <br />
        <input type = "button" onClick={(e) => this.signup(e)} value = "Sign Up" />
        <input type = "button" onClick={(e) => this.copied_link_A(e)} value = "copied_link" />
        <input type = "button" onClick={(e) => this.copied_link_B(e)} value = "copied_link" />
        <input type = "button" onClick={(e) => this.copied_link_C(e)} value = "copied_link" />
      </>
    );
  }
}

export default App;





