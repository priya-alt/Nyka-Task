import React, { Component } from 'react';
import { MenuOutlined,BellOutlined,CaretDownFilled} from '@ant-design/icons';
import USER from '../../assets/user.png';
import './Header1.css';

class Header1 extends Component {
    render() {
        return (
            <div className="header">
                <MenuOutlined className="menu"/>
                <div className="bell-wrapper">
                        <BellOutlined className="bell"/>
                        <div className="users">
                            <div>
                                <img src={USER} alt="user" width="25" height="25"/>
                            </div>
                        <div className="user-name"> 
                                <span>Sanjay Shankar    </span>
                                <span>HUL</span>
                        </div>
                        </div>
                        <CaretDownFilled  className="down-arrow"/>
                </div>
            </div>
            
        )
    }
}
export default Header1; 