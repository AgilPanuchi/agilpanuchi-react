import React from "react";
import FooterQuote from "../components/FouterQuote";
import FooterInfo from "../components/FouterInfo";

const Footer = ({ quote, authorName }) => {
  return (
    <footer className="bgUngu text-white" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <FooterQuote quote={quote} />
          </div>
          <div className="col-12">
            <FooterInfo authorName={authorName} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
