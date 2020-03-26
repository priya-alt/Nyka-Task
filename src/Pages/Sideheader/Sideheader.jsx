import React, { Component } from 'react'
import {BlockOutlined } from '@ant-design/icons';
import './Sideheader.css';
import Logo from '../../assets/logo.jpeg';
  class Sideheader extends Component {
    render() {
        return (
            <div className="sideheader">
            <div className="logo">
               <img src={Logo} alt="images" width="35" height="35"/>
            </div>
            <BlockOutlined className="block"/>
            </div>
        )
    }
}
export default Sideheader;
