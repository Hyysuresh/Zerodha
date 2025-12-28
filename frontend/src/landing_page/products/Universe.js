import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhafundhouseLogo.png"
           alt="small case Logo png"
           className="img-fluid"
           style={{ maxWidth: "160px" }} 
          />
          <p className="text-small text-muted">
            our asset management vanture<br />
            that is creating simple and transparent index<br />
            funds to help you save for your goals
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.png"
           alt="Product samall case logo"
           className="img-fluid2"
           style={{ width: "200px", height: "auto"}}
          />
          <p className="text-small text-muted">
            Options trading platform that lets you<br />
            create strategies, analyze positions, and examine<br />
            data points like open interest, Fll/Dll, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/tijoriLogo.png"
           alt="Product dashboard preview"
           className="imag-tijori"
           style={{ maxWidth: "160px"}}
          />
          <p className="text-small text-muted">
            Investment research platform<br />
            that offers detailed insights on stocks,<br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png"
           alt="Product dashboard preview"
           className="img-streak"
           style={{ maxWidth: "160px"}}
          />
          <p className="text-small text-muted">
            Systematic trading platfrom<br />
            that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.svg"
           alt="Product dashboard preview"
           className="img-smallcase"
           style={{ width: "230px", height: "auto"}}
          />
          <p className="text-small text-muted">
            Thematic investing platform<br />
            that helps you invest in diversified<br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png"
           alt="Product dashboard preview"
           className="img-ditto"
           style={{ maxWidth: "160px"}}
          />
          <p className="text-small text-muted">
            Personalized advice on life<br />
            and health insurance. No spam<br />
            and no mis-selling 
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
