import React from "react";
import "./Footer.css";
import FooterNavItem from "../../element/footerNavItem/FooterNavItem";

export default function Footer() {
  const usefulLinks = [
    "Home",
    "Movies",
    "My List",
    "Terms Of Service",
    "Privacy Policy",
  ];
  const locations = [
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "London",
    "Justo eget",
  ];
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <a href="/" className="logo d-flex align-items-center">
                  <span> WATCHERS </span>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                  <a href="#" className="facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="#" className="instagram">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a href="#" className="youtube">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  {usefulLinks.map((link, i) => (
                    <FooterNavItem key={i} name={link} />
                  ))}
                </ul>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  {usefulLinks.map((link, i) => (
                    <FooterNavItem key={i} name={link} />
                  ))}
                </ul>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Cinemas</h4>
                <ul>
                  {locations.map((link, i) => (
                    <FooterNavItem key={i} name={link} />
                  ))}
                </ul>
              </div>
              <div className="col-lg-2 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street New York, NY 535022 <br />
                  United States
                  <br />
                  <strong>Phone:</strong> +1 432 765 4321
                  <br />
                  <strong>Email:</strong> info@gmail.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Fantastic 4 </span>
            </strong>
            .All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#">Fantastic 4</a>
          </div>
        </div>
      </footer>
    </>
  );
}
