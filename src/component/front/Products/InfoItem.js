import { Col, Row } from "antd";
import "antd/dist/antd.css";
import { FormatMoney } from "format-money-js";
import React from "react";
import { useParams } from "react-router-dom";
import data from "../../back/Data";

const InfoItem = ({handleAddItem}) => {
  const fm = new FormatMoney({
    decimals: 0,
    separator: ".",
    decimalPoint: ",",
    symbol: " đ",
    append: true,
  });
  const { productItems } = data;
  const { itemID } = useParams();
  const productItem = productItems.find(
    (productItem) => productItem.id.toString() === itemID
  );
  return (
    <div style={{ display: "flex", justifyContent: "center", margin:"4rem 0"}}>
      <div style={{ width: "75%" }}>
        <Row>
          <Col span={12} style={{alignItems:"center", display:"flex",justifyContent:"center" }}>
            <img
              className="productImg"
              style={{ width: "70%"}}
              src={productItem.img}
              alt={productItem.name}
            />
          </Col>
          <Col span={12} style={{ padding: "1rem" }}>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              Tên sản phẩm:
              <span style={{ fontSize: "19px", fontWeight: "500" }}>
                {" "}
                {productItem.name}
              </span>
            </p>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              Loại sản phẩm:
              <span style={{ fontSize: "19px", fontWeight: "500" }}>
                {" "}
                {productItem.loai}
              </span>{" "}
            </p>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              Mô tả:
              <span style={{ fontSize: "19px", fontWeight: "500" }}>
                {" "}
                {productItem.mota}
              </span>{" "}
            </p>

            {(() => {
              if (productItem.giacu === productItem.gia) {
                return (
                  <div>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        textDecoration: "none",
                      }}
                    >
                      Giá:{" "}
                      <span
                        style={{
                          margin: "0",
                          color: "#D71010",
                          fontSize: "20px",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        {fm.from(productItem.gia)}
                      </span>
                    </p>
                  </div>
                );
              }
              {
                return (
                  <div>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        textDecoration: "none",
                      }}
                    >
                      Giá cũ:
                      <span
                        style={{
                          margin: "0",
                          fontWeight: "200",
                          fontSize: "16px",
                          textDecoration: "line-through",
                        }}
                      >
                        {" "}
                        {fm.from(productItem.giacu)}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        textDecoration: "none",
                      }}
                    >
                      Giá mới:
                      <span
                        style={{
                          margin: "0",
                          color: "#D71010",
                          fontSize: "20px",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        {fm.from(productItem.gia)}
                      </span>
                    </p>
                  </div>
                );
              }
            })()}

            <button
              className="btn_AddCart"
              style={{
                width: "140px",
                height: "60px",
                background: "white",
                border: "1px solid #F0EAEA",
                borderRadius: "2px",
              }}
              onClick={() => handleAddItem(productItem)}
            >
              <img src="./img/ico_gio-hang.svg" alt=""></img>
              <span style={{ lineHeight: "20px", paddingLeft: "6px" ,fontSize:"20px" }}>
                Giỏ hàng
              </span>
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InfoItem;
