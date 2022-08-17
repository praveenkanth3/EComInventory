import React, { Component } from "react";
import "./header.css";
import { companyname } from "../datas/data";
class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1>{companyname}</h1>
            </div>
        );
    }
}
export default Header;