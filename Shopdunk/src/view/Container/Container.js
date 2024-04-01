import React, { Component } from "react";
import "./Container.css";
class Container extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {/*  */}
          {/* <nav className="menu" style={{-bsBreadcrumbDivider: '">"'}} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
        <li className="breadcrumb-item"><a href="#">iPhone</a></li>
        <li className="breadcrumb-item"><a href="#">iPhone 13 series</a></li>
        <li className="breadcrumb-item"><span>iPhone 13</span></li>
      </ol>
    </nav> */}
          <div className="row">
            <div className="col-12 col-md-6">
              <div style={{ position: "sticky", top: 0 }}>
                <div className="picture">
                  <img
                    style={{
                      width: "80%",
                      backgroundColor: "#F5F5F7",
                      border: "none",
                      textAlign: "center",
                      paddingBottom: 10,
                    }}
                    src="https://shopdunk.com/images/thumbs/0000567_alpine-green_550.png"
                    className="img-thumbnail"
                    alt="..."
                  />
                </div>
                <div className="slick pt-2 pb-5">
                  <div className="card-slick ">
                    <div className="bg">
                      <img
                        style={{
                          position: "absolute",
                          width: 95,
                          height: 95,
                          right: 6,
                          backgroundColor: "#F5F5F7",
                        }}
                        src="https://shopdunk.com/images/thumbs/0000567_alpine-green_550.png"
                        alt="mota-ip"
                      />
                    </div>
                  </div>
                  <div className="card-slick ">
                    <div className="bg">
                      <img
                        style={{
                          position: "absolute",
                          width: 95,
                          height: 95,
                          right: 6,
                        }}
                        src="https://shopdunk.com/images/thumbs/0000568_alpine-green_550.webp"
                        alt="mota-ip"
                      />
                    </div>
                  </div>
                  <div className="card-slick ">
                    <div className="bg">
                      <img
                        style={{
                          position: "absolute",
                          width: 95,
                          height: 95,
                          right: 6,
                        }}
                        src="https://shopdunk.com/images/thumbs/0000569_alpine-green_550.webp"
                        alt="mota-ip"
                      />
                    </div>
                  </div>
                  <div className="card-slick ">
                    <div className="bg">
                      <img
                        style={{
                          position: "absolute",
                          width: 95,
                          height: 95,
                          right: 6,
                        }}
                        src="https://shopdunk.com/images/thumbs/0000570_alpine-green_550.webp"
                        alt="mota-ip"
                      />
                    </div>
                  </div>
                  <div className="card-slick ">
                    <div className="bg">
                      <img
                        style={{
                          position: "absolute",
                          width: 95,
                          height: 95,
                          right: 6,
                        }}
                        src="https://shopdunk.com/images/thumbs/0000571_alpine-green_550.webp"
                        alt="mota-ip"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="title">iPhone 13</div>
              <div className="assess">
                <div>
                  <i id="fas-1" className="fas fa-star" />
                  <i id="fas-1" className="fas fa-star" />
                  <i id="fas-1" className="fas fa-star" />
                  <i id="fas-1" className="fas fa-star" />
                  <i id="fas-1" className="fas fa-star" />
                </div>
                <div className="assess-1 px-2" style={{ cursor: "pointer" }}>
                  1 đánh giá
                </div>
                <div className="asses-2">
                  <span>|</span>
                </div>
                <div className="assese-plus mx-2" style={{ cursor: "pointer" }}>
                  <i className="fas fa-plus-circle" />
                </div>
                <div className="assess-3" style={{ cursor: "pointer" }}>
                  So sánh
                </div>
              </div>
              {/*crossbar*/}
              <div className="crossbar" />
              {/*Price*/}
              <div className="Price d-flex">
                <div>
                  <span className="no-promotion">14.250.000đ</span>
                </div>
                <div>
                  <span className="promotion">24.250.000đ</span>
                </div>
              </div>
              {/*-Property color*/}
              <div className="property">
                <div className="dl">
                  <h6>Dung lượng</h6>
                  <ul style={{ padding: 0 }}>
                    <li className="parameter m-0">
                      <div
                        className="1 border px-3 pt-2 pb-2"
                        style={{ cursor: "pointer" }}
                      >
                        128GB
                      </div>
                      <div
                        className="2 border px-3 ms-3 pt-2 pb-2"
                        style={{ cursor: "pointer" }}
                      >
                        256GB
                      </div>
                      <div
                        className="3 border px-3 mx-3 pt-2 pb-2"
                        style={{ cursor: "pointer" }}
                      >
                        512GB
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="color mb-4">
                  <div className="ms">
                    <span>Màu sắc</span>
                  </div>
                  <div className="icon d-flex">
                    <div className="black ms-2" style={{ cursor: "pointer" }}>
                      <i id="a1" className="fas fa-circle fs-2" />
                    </div>
                    <div className="pink ms-2" style={{ cursor: "pointer" }}>
                      <i id="a2" className="fas fa-circle fs-2" />
                    </div>
                    <div className="yellow ms-2" style={{ cursor: "pointer" }}>
                      <i id="a3" className="fas fa-circle fs-2" />
                    </div>
                    <div className="green ms-2" style={{ cursor: "pointer" }}>
                      <i id="a4" className="fas fa-circle fs-2" />
                    </div>
                    <div className="blue ms-2" style={{ cursor: "pointer" }}>
                      <i id="a5" className="fas fa-circle fs-2" />
                    </div>
                  </div>
                </div>
              </div>
              {/*discount*/}
              <div className="discount mt-3">
                <div className="gift d-flex pt-2 pb-2 px-2">
                  <div>
                    <i className="fas fa-gift fs-5" />
                  </div>
                  <p className="disconut-1 px-2 fw-bold">Ưu đãi</p>
                </div>
                <div className="body-text">
                  <p id="text-I" className="fw-bold">
                    I. Ưu đãi thanh toán
                  </p>
                  <div className="text-1">
                    <img
                      src="https://shopdunk.com/images/uploaded/t%C3%ADch%20tr%C3%B2n%20(1).jpg"
                      alt="hình ảnh tích tròn"
                      width={16}
                      height={17}
                    />
                    Giảm tới <strong>100.000đ qua cổng thanh toán</strong>
                    <a className="text-primary" href>
                      (Xem chi tiết)
                    </a>
                  </div>
                  <p id="text-II" className="fw-bold">
                    II. Ưu đãi trả góp
                  </p>
                  <div className="text-1">
                    <img
                      src="https://shopdunk.com/images/uploaded/t%C3%ADch%20tr%C3%B2n%20(1).jpg"
                      alt="hình ảnh tích tròn"
                      width={16}
                      height={17}
                    />
                    Ưu đãi tới 500.000đ khi thanh toán trả góp
                    <a className="text-primary" href>
                      (Xem chi tiết)
                    </a>
                  </div>
                  <p id="text-II" className="fw-bold">
                    III. Ưu đãi mua kèm
                  </p>
                  <div className="text-1">
                    <img
                      src="https://shopdunk.com/images/uploaded/icon-gif/best-offer.gif"
                      alt="hình ảnh tích tròn"
                      width={16}
                      height={17}
                    />
                    Mua kèm giảm sâu phụ kiện
                    <a className="text-primary" href>
                      (Xem chi tiết)
                    </a>
                  </div>
                  <div style={{ marginLeft: 25 }}>
                    <img
                      src="https://shopdunk.com/images/uploaded/t%C3%ADch%20tr%C3%B2n%20(1).jpg"
                      alt="hình ảnh tích tròn"
                      width={16}
                      height={17}
                    />
                    Mua
                    <a className="fw-bold text-info" href>
                      Tai nghe Jabra Elite 4 Active
                    </a>
                    giá chỉ
                    <span className="fw-bold">1.900.000đ</span>
                  </div>
                  <div style={{ marginLeft: 25 }}>
                    <img
                      src="https://shopdunk.com/images/uploaded/t%C3%ADch%20tr%C3%B2n%20(1).jpg"
                      alt="hình ảnh tích tròn"
                      width={16}
                      height={17}
                    />
                    Tặng PMH giảm <strong>300.000đ </strong> khi mua
                    <strong>Apple Watch S3/S7/S8</strong> (SL có hạn)
                  </div>
                  <div style={{ marginLeft: 25 }}>
                    <img
                      src="https://shopdunk.com/images/uploaded/t%C3%ADch%20tr%C3%B2n%20(1).jpg"
                      alt="hình ảnh tích tròn"
                      width={16}
                      height={17}
                    />
                    Tặng PMH giảm <strong>300.000đ </strong> khi mua
                    <strong>Apple Watch S3/S7/S8</strong> (SL có hạn)
                  </div>
                  <div style={{ marginLeft: 25 }}>
                    <img
                      src="https://shopdunk.com/images/uploaded/t%C3%ADch%20tr%C3%B2n%20(1).jpg"
                      alt="hình ảnh tích tròn"
                      width={16}
                      height={17}
                    />
                    Mua
                    <a className="fw-bold text-info" href>
                      ốp lưng trong Suốt MagSafe
                    </a>
                    giá chỉ
                    <strong>990.000đ</strong>
                  </div>
                  <div style={{ marginLeft: 25 }}>
                    <img
                      src="https://shopdunk.com/images/uploaded/t%C3%ADch%20tr%C3%B2n%20(1).jpg"
                      alt="hình ảnh tích tròn"
                      width={16}
                      height={17}
                    />
                    Giảm 10% khi mua Bảo hành tiêu chuẩn mở rộng (6 tháng, 12
                    tháng)
                  </div>
                  <div style={{ marginLeft: 25 }}>
                    <img
                      src="https://shopdunk.com/images/uploaded/t%C3%ADch%20tr%C3%B2n%20(1).jpg"
                      alt="hình ảnh tích tròn"
                      width={16}
                      height={17}
                    />
                    Giảm 20% khi mua Bảo hành kim cương, Bảo hành VIP (Rơi vỡ,
                    vào nước)
                  </div>
                  <p id="text-II" className="fw-bold mb-3">
                    IV. Ưu đãi lên đời
                  </p>
                  <div className="text-1 mb-4">
                    <img
                      src="https://shopdunk.com/images/uploaded/icon-gif/best-offer.gif"
                      alt="Best"
                      width={16}
                      height={17}
                    />
                    Trợ giá lên đời đến <strong>800.000đ</strong>
                    <a className="text-primary" href>
                      (Xem chi tiết)
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ color: "#457bc5" }} className="mt-3 mb-3">
                <i className="fas fa-building" />
                <a style={{ color: "#457bc5", fontWeight: 450 }} href>
                  Xem cửa hàng có sẵn sản phẩm
                </a>
              </div>
              {/*Mua trả góp quy đổi*/}
              <div className="func">
                <div className="mb-3">
                  <button
                    style={{
                      color: "aliceblue",
                      fontWeight: 600,
                      fontSize: 18,
                    }}
                    className="btn-buy d-block border-0"
                  >
                    MUA NGAY
                  </button>
                </div>
                <div className="all-btn-buttom">
                  <a className="tragop" href>
                    Trả góp
                  </a>
                  <a className="thucudoimoi" href>
                    Thu cũ đổi mới
                  </a>
                </div>
              </div>
              {/*Desription*/}
              <div className="description mb-5 mt-3">
                <div
                  className="body-description"
                  style={{ padding: "10px 10px" }}
                >
                  <div>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#0066CC" }}
                    />
                    <span>
                      Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp
                      Lightning - Type C
                    </span>
                  </div>
                  <div>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#0066CC" }}
                    />
                    <span>
                      Bảo hành chính hãng 1 năm{" "}
                      <a href className="text-primary fw-bold">
                        (chi tiết)
                      </a>
                    </span>
                  </div>
                  <div>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#0066CC" }}
                    />
                    <span>
                      Giao hàng nhanh toàn quốc{" "}
                      <a href className="text-primary fw-bold">
                        (chi tiết)
                      </a>
                    </span>
                  </div>
                  <div>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#0066CC" }}
                    />
                    <span>
                      Hoàn thế cho người nước ngoài{" "}
                      <a href className="text-primary fw-bold">
                        (chi tiết)
                      </a>
                    </span>
                  </div>
                  <div>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#0066CC" }}
                    />
                    <span>
                      Gọi đặt mua{" "}
                      <a href className="text-primary fw-bold">
                        1900.6626
                      </a>{" "}
                      (8:00 - 22:00)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Product #*/}
          <div className="all-product-detail">
            <div className="all-product-detail-title pb-5">
              <h3 className="fw-bold">Gợi ý phụ kiện đi kèm </h3>
            </div>
            <div className="product-detail">
              <div className="row">
                <div className="col">
                  <div
                    className="card-product-detail"
                    style={{ width: "100%", height: 380, cursor: "pointer" }}
                  >
                    <div className="content">
                      <img
                        src="https://shopdunk.com/images/thumbs/0004728_mieng-dan-cuong-luc-jcpal-preserver-iphone-13-13-pro-max-14plus_240.webp"
                        alt="motachitietsanpham"
                      />
                      <h4 className="card-product-detail-heading">
                        Miếng dán cường lực JCPAL Preserver iPhone 13 - 13
                        ProMax
                      </h4>
                      <div className="d-flex">
                        <h6 className="fw-bold text-primary">220.000đ</h6>
                        <h6 className="px-2 fw-bold">399.000đ</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card-product-detail"
                    style={{ width: "100%", height: 380, cursor: "pointer" }}
                  >
                    <div className="content">
                      <img
                        src="https://shopdunk.com/images/thumbs/0011250_applecare-for-iphone-13_240.png"
                        alt="motachitietsanpham"
                      />
                      <h4 className="card-product-detail-heading">
                        AppleCare+ for iPhone 13
                      </h4>
                      <div className="d-flex">
                        <h6 className="fw-bold text-primary">4.590.000đ</h6>
                        <h6 className="px-2 fw-bold">4.900.000đ</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card-product-detail"
                    style={{ width: "100%", height: 380, cursor: "pointer" }}
                  >
                    <div className="content">
                      <img
                        src="https://shopdunk.com/images/thumbs/0001395_sac-20w-usb-c-power-adapter_240.png  "
                        alt="motachitietsanpham"
                      />
                      <h4 className="card-product-detail-heading">
                        Sạc 20W USB-C Power Adapter
                      </h4>
                      <div className="d-flex">
                        <h6 className="fw-bold text-primary">490.000đ</h6>
                        <h6 className="px-2 fw-bold">690.000đ</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card-product-detail"
                    style={{ width: "100%", height: 380, cursor: "pointer" }}
                  >
                    <div className="content">
                      <img
                        src="https://shopdunk.com/images/thumbs/0002941_op-lung-iphone-13-clear-case-with-magsafe_240.jpeg"
                        alt="motachitietsanpham"
                      />
                      <h4 className="card-product-detail-heading">
                        Ốp lưng iPhone 13 Clear Case with MagSafe
                      </h4>
                      <div className="d-flex">
                        <h6 className="fw-bold text-primary">490.000đ</h6>
                        <h6 className="px-2 fw-bold">690.000đ</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-detail" style={{ textAlign: "center" }}>
                  <ul
                    className="d-flex p-0"
                    style={{ listStyleType: "none", justifyContent: "center" }}
                  >
                    <li
                      className="border mx-4 p-2"
                      style={{ width: 150, borderRadius: 5, cursor: "pointer" }}
                    >
                      <a className="fw-bold" style={{ color: "#515154" }} href>
                        Mô tả sản phẩm
                      </a>
                    </li>
                    <li
                      className="border mx-4 p-2"
                      style={{ width: 150, borderRadius: 5, cursor: "pointer" }}
                    >
                      <a className="fw-bold" style={{ color: "#515154" }} href>
                        So sánh iPhone
                      </a>
                    </li>
                    <li
                      className="border mx-4 p-2"
                      style={{ width: 150, borderRadius: 5, cursor: "pointer" }}
                    >
                      <a className="fw-bold" style={{ color: "#515154" }} href>
                        Thông số kĩ thuật
                      </a>
                    </li>
                    <li
                      className="border mx-4 p-2"
                      style={{ width: 150, borderRadius: 5, cursor: "pointer" }}
                    >
                      <a className="fw-bold" style={{ color: "#515154" }} href>
                        Chi tiết sản phẩm
                      </a>
                    </li>
                    <li
                      className="border mx-4 p-2"
                      style={{ width: 150, borderRadius: 5, cursor: "pointer" }}
                    >
                      <a className="fw-bold" style={{ color: "#515154" }} href>
                        Hỏi đáp
                      </a>
                    </li>
                  </ul>
                </div>
                <img
                  className="mt-3"
                  src="https://shopdunk.com/images/uploaded/html/iphone-13-256gb-260423-031651.jpg"
                  alt="hình ảnh giới thiệu iPhone"
                />
                <img
                  src="https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020308.jpg"
                  alt
                />
                <img
                  src="https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020302.jpg"
                  alt
                />
                <img
                  src="https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020303.jpg"
                  alt
                />
                <img
                  src="https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020303-1.jpg"
                  alt
                />
                <img
                  src="https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020304.jpg"
                  alt
                />
                <img
                  src="https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020305.jpg"
                  alt
                />
                <img
                  src="https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020306.jpg"
                  alt
                />
                <img
                  src="https://shopdunk.com/images/uploaded/html/iphone-13-256gb-221021-035733.jpg"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
