import React, { Component } from "react";
import "./App.css";
import Header from "./headersection/header";
import Products from "./productsection/products";
import Cart from "./cartsection/cart";
import History from "./historysection/history";
import { productitem } from "./datas/data";
class Homepage extends Component {
  constructor(props) {
    super();
    this.state = {
      cartList: [],
      totalHistory: [],
    };
  }
  // deleteItemCart = (products, i) => {
  //   const { cartList } = this.state;
  //   let allproduct = cartList;
  //   allproduct.splice(i, 1);
  //   this.setState({ cartList: allproduct });
  // };
  addItemToCart = (newProduct) => {
    const { cartList } = this.state;
    const itemPresentIdx = cartList.findIndex(
      (item) => item.product == newProduct.product
    );
    if (itemPresentIdx != -1) {
      // Item is present
      let tempCartList = [...cartList];
      tempCartList = tempCartList.map((currentCartItem) => {
        if (currentCartItem.product == newProduct.product) {
          return {
            ...currentCartItem,
            price: currentCartItem.price + newProduct.price,
            qty: currentCartItem.qty + newProduct.qty,
          };
        }
        return currentCartItem;
      });
      this.setState({
        cartList: [...tempCartList],
      });
    } else {
      // Item is intially coming
      this.setState({
        cartList: [...cartList, newProduct],
      });
    }
  };

  addToTheHistory = (newitem) => {
    const { totalHistory } = this.state;
    this.setState({
      totalHistory: [...totalHistory, newitem],
    });
  };
  render() {
    const { cartList } = this.state;
    return (
      <div>
        <Header />
        <div className="App">
          <div className="product">
            {productitem.map((item) => (
              <Products
                data={item}
                key={item.id}
                addItemToCart={this.addItemToCart}
              />
            ))}
          </div>
          <div>
            <Cart
              cartList={cartList}
              // deleteItemCart={this.deleteItemCart}
              addToTheHistory={this.addToTheHistory}
            />
            <History total={this.state.totalHistory} />
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
