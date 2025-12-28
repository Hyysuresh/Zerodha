import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Zerodha logo"
              style={{ width: "50%" }}
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <Link to="/about">About</Link><br />
            <Link to="/product">Products</Link><br />
            <Link to="/pricing">Pricing</Link><br />
            <Link to="/referral">Referral programme</Link><br />
            <Link to="/careers">Careers</Link><br />
            <a href="https://zerodha.tech" target="_blank" rel="noreferrer">
              Zerodha.tech
            </a><br />
            <Link to="/press">Press & media</Link><br />
            <Link to="/csr">Zerodha cares (CSR)</Link><br />
          </div>

          <div className="col">
            <p>Support</p>
            <Link to="/contact">Contact</Link><br />
            <Link to="/support">Support portal</Link><br />
            <a href="https://zerodha.com/z-connect" target="_blank" rel="noreferrer">
              Z-Connect blog
            </a><br />
            <Link to="/pricing/charges">List of charges</Link><br />
            <Link to="/downloads">Downloads & resources</Link><br />
          </div>

          <div className="col">
            <p>Account</p>
            <Link to="/signup">Open an account</Link><br />
            <Link to="/funds">Fund transfer</Link><br />
            <Link to="/challenge">60 day challenge</Link><br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

