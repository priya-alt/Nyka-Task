import React, { Component } from 'react'
import {CloseOutlined } from '@ant-design/icons';
import  DatePickerDialog from './DatePickerDialog';
import './Changeappointment.css';
// import 'antd/dist/antd.css';
import Slide from './Pages/slide';
import { Select } from 'antd';


const { Option } = Select;
const provinceData = ['Zhejiang'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDatePickerDialogVisible: false,
          showButton: false,
          showButton2: false,
          cities: cityData[provinceData[0]],
          secondCity: cityData[provinceData[0]][0]
        }
      }
      Mymodal = () => {
        this.setState({
          isDatePickerDialogVisible: true
        })
      }
      handleProvinceChange = value => {
        this.setState({
          cities: cityData[value],
          secondCity: cityData[value][0],
        });
      };
    
      onSecondCityChange = value => {
        this.setState({
          secondCity: value,
        });
      };
    
    render() {
      const { cities } = this.state;
        return (
            <div>
                <div className="layout">
                    <p>react-page-layout allows you to share a common layout across many different componentsa and  reducing code duplication.</p>
                    <div className="booking-part">
                       <div className="booking">
                         <h>Booking ID</h>
                         <p>NYKHUL8118</p>
                         <h>Seller Name</h>
                         <p>HUL</p>
                       </div>
                        <div className="location">
                            <h>Warehouse Location</h>
                            <div className="a">NWH-Nyka Warehouse DELI</div>
                            <h>Vendor Name</h>
                            <div className="a">HUL-Hindustan Unilever Ltd</div>
                        </div>
                   </div>
                   <div className="details">
                         <p>PO DETAILS</p>
                         <div className="po-no">
                           <h>Po No.</h>  
                           {/* <p>NWHK1329<DownOutlined className="downarrow" onClick={this.addItem}/></p>
                           <span className="span">Po No.<DownOutlined className="down"/></span>  */}
                           <Select
          defaultValue={provinceData[0]}
            className="select-1"    
          onChange={this.handleProvinceChange}
        >
          {provinceData.map(province => (
            <Option key={province}>{province}</Option>
          ))}
        </Select>
        <Select
         className="select-1" 
          value={this.state.secondCity}
          onChange={this.onSecondCityChange}
        >
          {cities.map(city => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
                        </div>
                        <div className="quantity">
                           <div className="quant-unit">
                              <h>quantity[max 123 units]</h>  
                              <p>60</p>
                              <CloseOutlined className="closeout"/>
                              <div className="quant-unit">
                                <h>quantity[max 0 units]</h>  
                                <p>0</p>
                                <CloseOutlined className="closeout"/>
                              </div>
                          </div>
                        </div>
                   </div>
                     <div className="addanother">
                          <p>Please Select a Po Number and enter a Valid Po quantity .This is mandatoryfield.</p>
                          <span> + ADD ANOTHER PO</span>
                           <div className="eastimate">
                           <p>Total Apointment Quantity</p>
                           <h>60</h>
                           <p>Eastimate Box Quantity</p>
                           <h>1</h>
                           <hr className="line"/>
                          </div>
                      </div>
                      <div className="calender">
                            <button onClick={this.Mymodal}>View calender</button>  
                        </div>
                       <div className="btn-bottom">
                       <p>APPOINTMENTS DETAILS</p>
                        <div className="current-appoint">
                          <p>current Appointment Date</p>
                          <span>18-MArch-2020</span>
                        </div>
                         <div className="next-date">
                            <p>Select Next Available Date</p>
                        </div>
                       <Slide/>
                        {this.state.isDatePickerDialogVisible ?
                        <DatePickerDialog dismissible={true} dialogDismissed={() => this.setState({isDatePickerDialogVisible: false})} />
                        : null}
                        <button>Save</button>
                      </div>
                </div>
            </div>
        )
    }
}
export default Appointment;