import React from "react";
import { BsFacebook,BsGithub,BsInstagram,BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="p-3">
      <div className="container">
        <div className="row justfiy-content-center ">
          <div className="col-md-4 ">
          <div className="footer-brand d-flex align-items-center justify-content-center h-100 w-100">
          <a href="/" className="navbar-brand-footer text-decoration-none fs-1 text-light">
          {" "}
          Torino Whole Sale
        </a>
          </div>

          </div>
          <div className="col-md-4 text-light">
            <h3 className="brand-header">Popular Brands</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link fs-4 text-light text-decoration-none"
                >
                  Moncler
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link fs-4 text-light text-decoration-none"
                >
                  The North Face
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link fs-4 text-light text-decoration-none"
                >
                  Louis Vuitton
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="/"
                  className="footer-link fs-4 text-light text-decoration-none"
                >
                  Gucci
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-light">
            <h3 className="brand-header">Social Media</h3>
            <div className="social-area">
              <a href="/" className="icon-social">
                <BsInstagram/>
              </a>
              <a href="/" className="icon-social">
                <BsFacebook/>
              </a>
              <a href="/" className="icon-social">
                <BsGithub/>
              </a>
              <a href="/" className="icon-social">
                <BsTwitter/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
