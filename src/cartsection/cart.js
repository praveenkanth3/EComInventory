import React, { Children, Component } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { BsFillTrashFill} from "react-icons/bs";
import { FaReceipt } from "react-icons/fa";
import { productitem } from "../datas/data";
import { connect } from "react-redux";
class Cart extends Component{
    a = [0,0,0,0,0,0];
    temp = 0;
    handledelete=(product,index,id)=>{
        const {deleteItemCart}=this.props;
        let i=id-1;
        this.a[i] = 0;
        this.deleteItemCart(product,index);
    }
    deleteItemCart = (products, i) => {
        const { cartList } = this.props;
        let allproduct = cartList;
        allproduct.splice(i, 1);
        this.setState({ cartList: allproduct });
        if(cartList.length === 0){
            this.temp = 0;
        }
      };
    handle(){
        const {addToTheHistory}=this.props;
        const today = Date.now();
        var newdate=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today);
        let tothistory={
            total:this.props.total,
            date:newdate
        }
        addToTheHistory(tothistory);
    }
    localstore(cartList){
        localStorage.setItem("totatprice",this.props.total);
        localStorage.setItem("list", JSON.stringify(cartList));
    }
    render(){
        const {cartList} = this.props;
        return(
            <div className="cartdiv">
                <h1>My Cart</h1>
                <table id="carttable">
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
                                <td>
                                    {item.qty}
                                </td>
                                <td>{item.price}
                                <button id="cartdeletebtn" onClick={()=>this.handledelete(item,index,item.unique)} style={{float:"right"}}><BsFillTrashFill/></button>
                                </td>
                            </tr>
                        )
                    })
                    }
                    <tr>
                        <td></td>
                        <td id="total">Total Price:</td>
                        {
                            cartList.forEach((item,index) => {
                                productitem.forEach((element,i) => {
                                    if(item.product === element.productname){
                                        this.a[i] = item.price;
                                        this.temp = 0;
                                    }                          
                                });
                            })
                            
                        }
                        {
                            this.a.forEach(element => {
                                this.temp = this.temp + element;
                            })  
                        }
                        {
                            this.props.totalUpdate(this.temp)
                        }
                        <td>{this.props.total}
                        </td>
                    </tr>
                    </tbody>  
                </table>
                <nav>
                    <Link to="./bill" target="_blank" onClick={()=>this.localstore(cartList)}><button style={{color:"green",fontSize:"20px",float:"right",border:"1px solid black",backgroundColor:"white"}} onClick={() => this.handle()}><FaReceipt/>Bill</button></Link>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        total:state.total
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        totalUpdate: (value) =>{
            dispatch({type:"addition" , payload:value})
        }
    }    
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)