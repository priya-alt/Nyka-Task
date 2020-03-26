import React, { Component } from 'react'
import "./DatePickerDialog.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


const localizer = momentLocalizer(moment);
 class DatePickerDialog extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        events:[ {
          id: 14,
          title: 'Today',
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3)),
      },]
     }
   }
   
  dismissDialog = (e) => {
    if(!e.target.classList.contains('modal-bg')) {
      return;
    }
    console.log('Closed');
if(this.props.dismissible) {
  this.props.dialogDismissed();
}
  }
  render() {
    return (
    <div className="modal-bg" onClick={this.dismissDialog}>
      <div className="calender" style={{ height: '75%'}}>
        <h className="modal-h">Select Available Date for Your Appointments of 60 Units</h>
        <div className="calc">
          <Calendar
              events={this.state.events}
              startAccessor="start"
              endAccessor="end"
              defaultDate={moment().toDate()}
              localizer={localizer}
            />
             <div className="sidebar">
                   <div className="div-1">
                       <p>Friday,20-March-2020</p> 
                    </div>
                     <div className="div-2">
                         <div className="child">
                            <p>12:30PM-01:30AM</p>
                            <span>booking Confirmed</span>
                         </div>
                           <h>Hindustan Unliver Pvt Ltd</h>
                           <div className="book-quant">
                              <p>Pos:1</p>
                              <span>Booked Quantity 166</span>
                           </div>
                      </div>
                      <div className="div-2">
                         <div className="child">
                            <p>12:30PM-01:30AM</p>
                            <span>booking Confirmed</span>
                         </div>
                           <h>Hindustan Unliver Pvt Ltd</h>
                           <div className="book-quant">
                              <p>Pos:3</p>
                              <span>Booked Quantity 380</span>
                           </div>
                      </div>
                      <div className="div-2">
                         <div className="child">
                            <p>12:30PM-01:30AM</p>
                            <span>booking Confirmed</span>
                         </div>
                           <h>Hindustan Unliver Pvt Ltd</h>
                           <div className="book-quant">
                              <p>Pos:2</p>
                              <span>Booked Quantity 250</span>
                           </div>
                      </div>
                      <div className="div-2">
                         <div className="btn">
                            <p>Total Booked</p>
                         </div>
                           <div className="book-quant">
                            <button>SELECT DATE</button>
                           </div>
                      </div>
                  </div>
        </div>
      </div> 
    </div>
    )
  }
}
export default DatePickerDialog;