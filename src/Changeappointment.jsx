import React, { Component } from 'react';

import './Changeappointment.css';
import Appointment from './Appointment';
import  Otherdetails from '../src/Otherdetails'


 class Changeappointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerDialogVisible: false,
      showButton: true,
      showButton2: false
    }
  }
  Mymodal = () => {
    this.setState({
      isDatePickerDialogVisible: true
    })
  }
  toggle = () => {
    this.setState({ showButton: true, showButton2: false });
  };

  toggle2 = () => {
    this.setState({ showButton: false, showButton2: true });
  };
    render() {
        return (
            <div className="change-appoint">
               <div className="buttons">
                    <div   className="top-btn" >
                        <button onClick={this.toggle}>CHANGE APPOINTMENTS DETAILS</button>
                        <button onClick={this.toggle2}>ADD OTHERS DETAILS</button>
                    </div>
                    {
                      this.state.showButton?
                    <Appointment/>:<Otherdetails/>
                    }
                
              </div>
            </div>
        )
    }
}
export default Changeappointment;