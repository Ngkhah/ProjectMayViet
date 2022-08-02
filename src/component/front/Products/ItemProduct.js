import { Col, Modal, Row } from "antd";
import { FormatMoney } from "format-money-js";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemProduct = ({ productItem, handleAddItem }) => {
  const fm = new FormatMoney({
    decimals: 0,
    separator: ".",
    decimalPoint: ",",
    symbol: " đ",
    append: true,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="col-sm-3">
      <div style={{ position: "relative" }}>
        <img
          className="productImg"
          onClick={showModal}
          style={{ width: "320px", height: "320px" }}
          src={productItem.img}
          alt={productItem.name}
        />
        <p
          style={{
            color: "white",
            left: "30px",
            top: "20px",
            right: "30px",
            position: "absolute",
            background: "red",
            width: "45px",
            paddingTop: "3px",
            height: "25px",
            textAlign: "center",
            fontSize: "14px",
            borderRadius: "3px",
          }}
        >
          MỚI
        </p>
        <img
          style={{
            position: "absolute",
            right: "30px",
            top: "20px",
            width: "28px",
            height: "28px",
          }}
          src="./img/ico_yeu-thich].svg"
          alt=""
        ></img>
      </div>
      <div style={{ textAlign: "left", margin: "15px 13px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "400",
              textTransform: "uppercase",
            }}
          >
            {productItem.loai}
          </div>
          <div style={{ fontSize: "10px" }}>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <Link
          style={{
            fontSize: "18px",
            fontWeight: "600",
            padding: "5px 0",
            margin: "0",
            color: "black",
          }}
          to={`sanpham/${productItem.id}`}
          key={productItem.id}
        >
          {productItem.name}
        </Link>
        <div style={{ marginTop: "5px" }}>
          <div style={{ display: "inline-flex" }}>
            <div
              style={{
                width: "13px",
                height: "13px",
                borderRadius: "50%",
                background: "#E9C697",
                marginRight: "5px",
              }}
            ></div>
            <div
              style={{
                width: "13px",
                height: "13px",
                borderRadius: "50%",
                background: "#814225",
              }}
            ></div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {/* <p style={{margin: '0', fontWeight: '200', fontSize: '12px',textDecoration: 'line-through'}}>{fm.from(productItem.giacu)}</p>
                          <p style={{margin: '0', color: '#D71010', fontSize: '15px', fontWeight: '500'}}>{fm.from(productItem.gia)}</p> */}
            {(() => {
              if (productItem.giacu === productItem.gia) {
                return (
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "200",
                        fontSize: "12px",
                        textDecoration: "line-through",
                        visibility: "hidden",
                      }}
                    >
                      {fm.from(productItem.giacu)}
                    </p>
                    <p
                      style={{
                        margin: "0",
                        color: "#D71010",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {fm.from(productItem.gia)}
                    </p>
                  </div>
                );
              }
              {
                return (
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "200",
                        fontSize: "12px",
                        textDecoration: "line-through",
                      }}
                    >
                      {fm.from(productItem.giacu)}
                    </p>
                    <p
                      style={{
                        margin: "0",
                        color: "#D71010",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {fm.from(productItem.gia)}
                    </p>
                  </div>
                );
              }
            })()}
          </div>
          <button
            className="btn_AddCart"
            style={{
              width: "40px",
              height: "40px",
              background: "white",
              border: "1px solid #F0EAEA",
              borderRadius: "2px",
            }}
            onClick={() => handleAddItem(productItem)}
          >
            <img src="./img/ico_gio-hang.svg" alt=""></img>
          </button>
        </div>
        <Modal
          title="SẢN PHẨM"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={800}
        >
          <Row>
            <Col span={12}>
              <img
                className="productImg"
                style={{ width: "100%" }}
                src={productItem.img}
                alt={productItem.name}
              />
            </Col>
            <Col span={12} style={{ padding: "1rem" }}>
              <p style={{ fontSize: "16px", fontWeight: "700" }}>
                Tên sản phẩm:
                <span style={{ fontSize: "15px", fontWeight: "500" }}>
                  {" "}
                  {productItem.name}
                </span>
              </p>
              <p style={{ fontSize: "16px", fontWeight: "700" }}>
                Loại sản phẩm:
                <span style={{ fontSize: "15px", fontWeight: "500" }}>
                  {" "}
                  {productItem.loai}
                </span>{" "}
              </p>
              <p style={{ fontSize: "16px", fontWeight: "700" }}>
                Mô tả:
                <span style={{ fontSize: "15px", fontWeight: "500" }}>
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
                          fontSize: "16px",
                          fontWeight: "700",
                          textDecoration: "none",
                        }}
                      >
                        Giá:{" "}
                        <span
                          style={{
                            margin: "0",
                            color: "#D71010",
                            fontSize: "18px",
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
                          fontSize: "16px",
                          fontWeight: "700",
                          textDecoration: "none",
                        }}
                      >
                        Giá mới:
                        <span
                          style={{
                            margin: "0",
                            color: "#D71010",
                            fontSize: "18px",
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
                <span style={{ lineHeight: "12px", paddingLeft: "6px" }}>
                  Giỏ hàng
                </span>
              </button>
            </Col>
          </Row>
        </Modal>
      </div>
    </div>
  );
};

export default ItemProduct;
