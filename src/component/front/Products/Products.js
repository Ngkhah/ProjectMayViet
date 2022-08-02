import React from 'react';
import Content from '../Content/Content';
import News from '../News/News';
import ItemProduct from './ItemProduct';
import './Products.css';
const Products = ({ productItems, handleAddItem, handleRemoveItem }) => {
  return (
    <div>
      <Content />
      {/* <GioHang/> */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginTop: '2rem' }}>SẢN PHẨM NỔI BẬC</h1>
        <p style={{ fontSize: '16px' }}>Với hơn 100 công nhân viên hoạt động sản xuất trong ngành nội thất mây, chúng tôi luôn nỗ lực và phấn <br /> đấu để cho ra đời những sản phẩm đẹp nhất, chất lượng nhất.</p>
        <div className='products' style={{ padding: "60px 230px" }}>
          <div className='row'>
            {productItems.map((productItem) => <ItemProduct productItem={productItem} handleAddItem={handleAddItem} />)}
          </div>
        </div>
      </div>
      <News />
    </div>
  );
};


export default Products;






