import React from "react";
export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-3 col-md-6 col-6 mt-5 mb-5">
              <h3 className="mb-5"> location</h3>
              <div className="d-flex flex-column gap-5">
                <a
                  className="fas fa-map-marker-alt"
                  href="https://www.google.com/maps/place/Shah+Faisal+Masjid/@33.7295198,73.0349649,17z/data=!3m1!4b1!4m5!3m4!1s0x38dfbefce01e6917:0x3e66e0de3e2598c0!8m2!3d33.7295198!4d73.0371536"
                >
                  <span className="loc ps-4 fs-4"> islamabad</span>
                </a>
                <a className="fas fa-map-marker-alt" href="#">
                  <span className="loc ps-4 fs-4">karachi</span>
                </a>
                <a className="fas fa-map-marker-alt" href="#">
                  <span className="loc ps-4 fs-4">lahore</span>
                </a>
                <a className="fas fa-map-marker-alt" href="#">
                  <span className="loc ps-4 fs-4">peshawer</span>
                </a>
                <a className="fas fa-map-marker-alt" href="#">
                  <span className="loc ps-4 fs-4">queta</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5 mb-5">
              <h3 className="mb-5"> qick links</h3>
              <div className="d-flex flex-column gap-5">
                <a className="fs-4" href="#home">home</a>
                <a className="fs-4" href="#dishes">dishes</a>
                <a className="fs-4" href="#about">about</a>
                <a className="fs-4" href="#menu">menu</a>
                <a className="fs-4" href="#review">review</a>
                <a className="fs-4" href="#order">order</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-6 mt-5 mb-5">
              <h3 className="mb-5">contect us</h3>
              <div className="d-flex flex-column gap-5">
                <a className="fs-4"  href="#">+923339004604</a>
                <a className="fs-4"  href="#">+923006784608</a>
                <a className="fs-4"  href="#">mudassirrehman1989@gmail.com</a>
                <a className="fs-4"  href="#">abudllahmuhammad10@yahoo.com</a>
                <a className="fs-4"  href="#">rahim yar khan punjab pakistan</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5 mb-5">
              <h3 className="mb-5">follow us</h3>
              <div className="d-flex flex-column gap-5">
                <a className="fs-4"  href="#">facebook</a>
                <a className="fs-4"  href="#">twitter</a>
                <a className="fs-4"  href="#">instagram</a>
                <a className="fs-4"  href="#">linkedink</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
