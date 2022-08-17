import React, { Component } from "react";
import "./product.css";
import { BsFillCartPlusFill} from "react-icons/bs";
import { IoIosAddCircle,IoMdRemoveCircle } from "react-icons/io";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  handleClick() {
    const { productname, price,id } = this.props.data;
    const { addItemToCart } = this.props;
    const newProduct = {
      product: productname,
      price: price * this.state.count,
      qty: this.state.count,
      unique:id
    };
    addItemToCart(newProduct);
  }
  handleAddClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDeleteClick = () => {
    if(this.state.count === 1){
      this.setState({
          count:1
      });
    }
    else {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    const { productname, price, image } = this.props.data;
    return (
      <div className="wholeproduct">
        <div style={{ margin: "5px" }}>
          <div>
            <img id="imagetag" src={image} alt={productname} />
          </div>
          <div>
            <p>Name:{productname}</p>
            <p>Price:{price} </p> 
            <button onClick={this.handleAddClick}><IoIosAddCircle/></button>
            {this.state.count}
            <button onClick={this.handleDeleteClick}><IoMdRemoveCircle/></button>
            <button style={{fontSize:"25px"}} id="cartbutton" onClick={() => this.handleClick()}><BsFillCartPlusFill /></button>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
