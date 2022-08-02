import React, { useEffect } from "react";
import { FormatMoney } from "format-money-js";
import "./GioHang.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const ThanhToan = ({ cartItem }) => {
  const fm = new FormatMoney({
    decimals: 0,
    separator: ".",
    decimalPoint: ",",
    symbol: " đ",
    append: true,
  });
  const thanhTien = cartItem.reduce(
    (gia, item) => gia + item.quantity * item.gia,
    0
  );
  const storeUser = JSON.parse(localStorage.getItem("formData")) || [];
  const [formData, setFormData] = useState(storeUser);

  const formKhachhang = (e) => {
    e.preventDefault();
    var newformData = {
      id: uuidv4(),
      hoten: document.getElementById("hoten").value,
      email: document.getElementById("email").value,
      tinh: document.getElementById("tinh").value,
      diachi: document.getElementById("diachi").value,
      tongtien: fm.from(thanhTien),
    }
    if (newformData) {
      localStorage.removeItem('cartItem');
      setFormData([...formData, newformData]);
      window.location.replace('/')
    } 
  };


  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));

  }, [formData]);

  return (
    <div>
      <form style={{ margin: "0", padding: "0" }} onSubmit={formKhachhang}>
        <div
          style={{ padding: "0px 250px", marginBottom: "200px" }}
          className="row"
        >
          <hr />

          <div className="col-sm-7 ">
            <h4
              style={{
                fontWeight: "600",
                textTransform: "uppercase",
                marginBottom: "1rem",
                marginTop: "30px",
                color: "#52627C",
              }}
            >
              hệ thống cửa hàng
            </h4>
            <div className="form-group" style={{ margin: "0", padding: "0" }}>
              <p
                style={{
                  fontWeight: "700",
                  margin: "0",
                  fontSize: "14px",
                  marginTop: "15px",
                }}
              >
                Họ và tên
              </p>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                id="hoten"
                className="form-control"
                required
              ></input>
            </div>
            <div className="form-group" style={{ margin: "0", padding: "0" }}>
              <p
                style={{
                  fontWeight: "700",
                  margin: "0",
                  fontSize: "14px",
                  marginTop: "15px",
                }}
              >
                Email
              </p>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                id="email"
                className="form-control"
                required
              ></input>
            </div>

            <div className="form-group" style={{ margin: "0", padding: "0" }}>
              <p
                style={{
                  fontWeight: "700",
                  margin: "0",
                  fontSize: "14px",
                  marginTop: "15px",
                }}
              >
                Số điện thoại
              </p>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                id="sdt"
                className="form-control"
                required
              ></input>
            </div>

            <div className="form-group" style={{ margin: "0", padding: "0" }}>
              <p
                style={{
                  fontWeight: "700",
                  margin: "0",
                  fontSize: "14px",
                  marginTop: "15px",
                }}
              >
                Tỉnh thành
              </p>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                id="tinh"
                className="form-control"
                required
              ></input>
            </div>

            <div className="form-group" style={{ margin: "0", padding: "0" }}>
              <p
                style={{
                  fontWeight: "700",
                  margin: "0",
                  fontSize: "14px",
                  marginTop: "15px",
                }}
              >
                Địa Chỉ
              </p>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                id="diachi"
                className="form-control"
                required
              ></input>
            </div>

            <h4
              style={{
                fontWeight: "600",
                textTransform: "uppercase",
                marginBottom: "1rem",
                marginTop: "50px",
                color: "#52627C",
              }}
            >
              Phương thức thanh toán
            </h4>
            <hr />
            <div style={{ margin: "15px 0" }} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              ></input>
              <label className="form-check-label" for="flexRadioDefault1">
                Thanh toán khi nhận hàng (COD)
              </label>
            </div>
            <div className="form-check" style={{ margin: "15px 0" }}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              ></input>
              <label className="form-check-label" for="flexRadioDefault2">
                Thẻ ATM nội địa/Internet Banking
              </label>
            </div>
            <div className="form-check" style={{ margin: "15px 0" }}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              ></input>
              <label className="form-check-label" for="flexRadioDefault1">
                Thanh toán bằng thẻ quốc tế Visa, Master, JCBDefault radio
              </label>
            </div>

            <hr />
            <div className="mb-3">
              <label
                for="exampleFormControlTextarea1"
                className="form-label"
                style={{ fontWeight: "700", margin: "0", fontSize: "14px" }}
              >
                Ghi chú
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>

          <div className="col-sm-5">
            <div
              style={{
                width: "100%",
                height: "60px",
                backgroundColor: "#F6F9FA",
                borderRadius: "10px",
                margin: "30px 0",
                display: "flex",
                justifyContent: "space-between",
                padding: "18px 50px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: "24px", height: "24px" }}
                  src="./img/ico_khuyen-mai.png"
                ></img>
                <p>Lựa chọn khuyến mãi</p>
              </div>
              <div>
                <i className="fa-solid fa-right-long"></i>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #00A79D",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <h4
                style={{
                  textTransform: "uppercase",
                  padding: "20px 0",
                  color: "#52627C",
                }}
              >
                tổng giỏ Hàng
              </h4>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ color: "#52627C", fontSize: "14px" }}>SẢN PHẪM</p>
                <p style={{ color: "#52627C", fontSize: "14px" }}>
                  THÀNH TIỀN{" "}
                </p>
              </div>
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>
                    {item.name}
                    <span style={{ fontWeight: "800" }}> x </span>
                    {item.quantity}
                  </p>
                  <p style={{ fontWeight: "700" }}>
                    {fm.from(item.gia * item.quantity)}{" "}
                  </p>
                </div>
              ))}
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <p>
                  Tạm tính<span style={{ fontWeight: "800" }}> x </span>
                </p>
                <p style={{ fontWeight: "700" }}>{fm.from(thanhTien)}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>
                  Phí vận chuyển <span style={{ fontWeight: "800" }}> x </span>
                </p>
                <p style={{ fontWeight: "700" }}>Freeship</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <p>Tổng cộng </p>
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "25px",
                    color: "#52627C",
                  }}
                >
                  {fm.from(thanhTien)}
                </p>
              </div>
              <div className="form-group" style={{ margin: "0", padding: "0" }}>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    height: "40px",
                    border: "0",
                    color: "white",
                    backgroundColor: "#00A79D",
                    fontSize: "14px",
                    fontWeight: "700",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                >
                  Mua Hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ThanhToan;
