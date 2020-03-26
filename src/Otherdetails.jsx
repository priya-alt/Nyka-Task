import React, { Component } from 'react';
import {InfoCircleOutlined,DownOutlined,BorderOutlined } from '@ant-design/icons';
import './Otherdetails.css';

 class Otherdetails extends Component {
    render() {
        return (
            <div className="main-container">
                 <div className="vendor">
                 <p>Vendor Return Address
                 <InfoCircleOutlined className="info"/>
                 </p>
                 <span>Unilever House,B.D.Swant Marg Chakala,Andheri(E)</span>
                     <div className="dispatch">
                         <p>Mode of Dispatch*</p> 
                         <button><span style={{"font-size":"8px","marginLeft":"-20%"}}>By Hand</span>
                          <DownOutlined className="dispatch-down"/></button>
                    </div>
                     <div className="change-status">
                         <p>Change Status</p>
                         <span><BorderOutlined style={{color:"deeppink","font-weight":"600"}}/>Have Your goods been sent?</span>   
                    </div>
                     <div className="warehouse">
                     <p style={{"fontSize":"11px"}}>Notes For Warehouse</p>
                         <div className="enter-notes">
                           <p>Enter Notes for Warehouse</p>
                        </div>
                         <div className="save-btn">
                              <h>Save</h>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default  Otherdetails;
