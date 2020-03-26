import React, { Component } from 'react'
import '../Cardslider.css';
import {RightOutlined,LeftOutlined} from '@ant-design/icons';
class Slide extends Component {
    constructor(props) {
        super(props)
        this.state = {
             x:0
        }
    }
    prev=()=>{
        let y;
        
        y=-(parseInt(this.state.x)+520);
        if(y*-1<=1040){
            document.getElementById("scroll1").style.transform="translateX("+y+"px)";
            this.setState({
                x:-y
            })
        }
    }
    next=()=>{
        let b;
        var a=this.state.x;
        b=-(parseInt(a)-520);
        if(b<=0){
            document.getElementById("scroll1").style.transform="translateX("+b+"px)";
            a=-b;
            this.setState({
                x:a
            })
        }
    }
    render() {
        return (
            <div className="slide-wrapper">
                <div className="slide"id="scroll1">
                    <div className="wrapper" >
                        <div className="cards">
                            <p>Friday,01-March-2020</p>
                            <ul>
                                <li>Available</li>
                                <li>806 qty,booked by HUL</li>
                            </ul>
                            <a href="#a">View in Calender</a>
                        </div>
                    </div>
                    <div>
                        <div className="cards">
                            <p>Friday,02-March-2020</p>
                            <ul>
                                <li>Available</li>
                                <li>806 qty,booked by HUL</li>
                            </ul>
                            <a href="#a">View in Calender</a>
                        </div>
                    </div>
                    <div>
                        <div className="cards">
                            <p>Friday,03-March-2020</p>
                            <ul>
                                <li>Available</li>
                                <li>806 qty,booked by HUL</li>
                            </ul>
                            <a href="#a">View in Calender</a>
                        </div>
                    </div>
                    <div className="wrapper" >
                        <div className="cards">
                            <p>Friday,04-March-2020</p>
                            <ul>
                                <li>Available</li>
                                <li>806 qty,booked by HUL</li>
                            </ul>
                            <a href="#a">View in Calender</a>
                        </div>
                    </div>
                    <div>
                        <div className="cards">
                            <p>Friday,05-March-2020</p>
                            <ul>
                                <li>Available</li>
                                <li>806 qty,booked by HUL</li>
                            </ul>
                            <a href="#a">View in Calender</a>
                        </div>
                    </div>
                    <div>
                        <div className="cards">
                            <p>Friday,06-March-2020</p>
                            <ul>
                                <li>Available</li>
                                <li>806 qty,booked by HUL</li>
                            </ul>
                            <a href="#a">View in Calender</a>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="cards">
                            <p>Friday,07-March-2020</p>
                            <ul>
                                <li>Available</li>
                                <li>806 qty,booked by HUL</li>
                            </ul>
                            <a href="#a">View in Calender</a>
                        </div>
                    </div>
                    <div>
                        <div className="cards">
                            <p>Friday,08-March-2020</p>
                            <ul>
                                <li>Available</li>
                                <li>806 qty,booked by HUL</li>
                            </ul>
                            <a href="#a">View in Calender</a>
                        </div>
                    </div>
                    <div>
                        <div className="cards">
                            <p>Friday,09-March-2020</p>
                            <ul>
                                <li>Available</li>
                                <li>806 qty,booked by HUL</li>
                            </ul>
                            <a href="#a">View in Calender</a>
                        </div>
                    </div>
                </div>
                <div className='hidden-button-left' onClick={this.next}>
                    <LeftOutlined  className="rightarrow"  />
                </div>
                <div className='hidden-button' onClick ={this.prev}>
                    <RightOutlined className="rightarrow" />
                </div>
            </div>
        )
    }
}

export default Slide