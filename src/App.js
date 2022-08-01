import React, { useEffect, useState } from "react";
import data from "./component/back/Data.js";
import { BrowserRouter} from "react-router-dom";
import Footer from "./component/front/Footer/Footer";
import Routing from "./component/front/Routes/Routing";
import { message } from 'antd';
import 'antd/dist/antd.css';

const App = ()=>{
  const {productItems} = data;
  const storeCart = JSON.parse(localStorage.getItem("cartItem")) || [];
  const [cartItem, setCartItem] = useState(storeCart);
  
  const handleAddItem = (product) => {
    
    const ProductExist = cartItem.find((item)=> item.id === product.id);
      if(ProductExist){
        setCartItem(
        cartItem.map((item) => 
          item.id === product.id ? 
            {...ProductExist, quantity: ProductExist.quantity + 1}
            : item)           
        );message.success(' Thêm giỏ hàng thành công');
      } else{
        setCartItem([...cartItem, {...product, quantity: 1}])
      }
  }

  const handleRemoveItem = (product) => {
    const ProductExist = cartItem.find((item)=> item.id === product.id);
    if(ProductExist===1){
      setCartItem(cartItem.filter((item) => item.id !== product.id));
     } else{
      setCartItem(
        cartItem.map((item) => 
          item.id === product.id ? 
            {...ProductExist, quantity: ProductExist.quantity - 1}
            : item)
        );
    }
  }
  useEffect(()=>{
    localStorage.setItem('cartItem',JSON.stringify(cartItem));
  }, [cartItem]);

  // var retrievedScores = JSON.parse(localStorage.getItem("cartItem"));

  // const deleteById = function (self) {
  //   retrievedScores = retrievedScores.filter(function (elem) {
  //     return elem.id !== self.id;
  //   });

  //   // localStorage.setItem("cartItem", JSON.stringify(retrievedScores));
  //   self.parentNode.parentNode.removeChild(self.parentNode);

  // }

    const deleteById = (product) => {
    setCartItem(
      cartItem.filter((item) => item.id !== product.id)
    );
  };
  // const removeFromCart = (productToRemove) => {
  //   setCart(
  //     cart.filter((product) => product !== product.id)
  //   );
  // };



  return (
    <div className="app">
        <BrowserRouter>
          {/* <Header /> */}
            <Routing productItems={productItems} cartItem={cartItem} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} deleteById={deleteById}/>
          <Footer />
        </BrowserRouter>
        
    </div>
  );
  
};

export default App;
