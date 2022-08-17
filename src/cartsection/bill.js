import React from "react"; 
import './bill.css';
function Bill(props){
    const total = parseInt(localStorage.getItem('totatprice'));
    const cartList=JSON.parse(localStorage.getItem('list'));
    return (
    <>
        <div className="billdiv">
            <div>
                <h1>Polo Pharmacies''24/7</h1>
                <p>Address:Embassy Splendid Zone Block 2, 9th floor, Velan Nagar, Arulmurugan Nagar, Old Pallavaram, Chennai, Tamil Nadu 600043</p>
            </div>
            <div>
            <table className="billtable">
                <thead>
                        <tr>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                </thead>
                <tbody>
                {
                        cartList.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.product}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })
                }
                </tbody>
            </table>
            </div>
            <div>
                <h2>Total Price:{total}</h2>
            </div>
            <h1>🙏🏼நன்றி மீண்டும் வருக🙏🏼</h1>
            <button style={{color:"black",backgroundColor:"rgb(172, 159, 159)",fontSize:"15px",border:"1px solid black"}}>Print</button>
        </div>
    </>);
    };
export default Bill;