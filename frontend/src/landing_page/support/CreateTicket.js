import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Account Opening",
    links: [
      { label: "Online Account Opening", path: "/support/account-opening/online" },
      { label: "Offline Account Opening", path: "/support/account-opening/offline" },
      { label: "Company, Partnership and HUF Account", path: "/support/account-opening/company" },
      { label: "NRI Account Opening", path: "/support/account-opening/nri" },
      { label: "Charges at Zerodha", path: "/support/account-opening/charges" },
      { label: "Zerodha IDFC FIRST Bank 3-in-1 Account", path: "/support/account-opening/3in1" },
      { label: "Getting Started", path: "/support/account-opening/getting-started" },
    ],
  },
  {
    title: "Trading and Markets",
    links: [
      { label: "Intraday Trading", path: "/support/trading/intraday" },
      { label: "Margins", path: "/support/trading/margins" },
      { label: "Order Types", path: "/support/trading/order-types" },
      { label: "Circuit Limits", path: "/support/trading/circuit-limits" },
      { label: "Corporate Actions", path: "/support/trading/corporate-actions" },
    ],
  },
  {
    title: "Funds",
    links: [
      { label: "Add Money", path: "/support/funds/add" },
      { label: "Withdraw Money", path: "/support/funds/withdraw" },
      { label: "Fund Statement", path: "/support/funds/statement" },
      { label: "Payout Issues", path: "/support/funds/issues" },
    ],
  },
  {
    title: "Console",
    links: [
      { label: "Portfolio", path: "/support/console/portfolio" },
      { label: "Reports", path: "/support/console/reports" },
      { label: "Tax P&L", path: "/support/console/tax" },
      { label: "Account Settings", path: "/support/console/settings" },
    ],
  },
  {
    title: "Kite",
    links: [
      { label: "Kite Web", path: "/support/kite/web" },
      { label: "Kite Mobile", path: "/support/kite/mobile" },
      { label: "Charting", path: "/support/kite/charts" },
      { label: "Alerts", path: "/support/kite/alerts" },
    ],
  },
  {
    title: "Coin",
    links: [
      { label: "Mutual Funds", path: "/support/coin/mutual-funds" },
      { label: "SIP", path: "/support/coin/sip" },
      { label: "Statements", path: "/support/coin/statements" },
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {sections.map((section, index) => (
          <div key={index} className="col-4 p-4">
            <h4>
              <i
                className="fa fa-plus-circle me-2"
                aria-hidden="true"
              ></i>
              {section.title}
            </h4>

            {section.links.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                style={{
                  textDecoration: "none",
                  lineHeight: "2.5",
                  display: "block",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;

