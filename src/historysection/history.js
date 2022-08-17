import React, { Component } from "react";
import "./history.css";
class History extends Component{
    render(){
        const {total}=this.props;
        return(
            <div className="historydiv">
                <h1>My History</h1>
                <table>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                    total.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.total}</td>
                                <td>{item.date}</td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                    
                </table>
            </div>
        );
    }
}
export default History;