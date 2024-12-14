import React from "react";
import Header from "../layouts/Header"; // Pastikan path sesuai
import MainPage from "../layouts/MainPage"; // Pastikan path sesuai
import Footer from "../layouts/Footer"; // Pastikan path sesuai
import logoa from "../assets/agil.png";

const HomePage = () => {
  const dashboardQuote = "You Will Never Know Your Potential until You Try - Agil Panuchi";
  const nameBrand = "Agil Panuchi";
  const showSearch = true;
  const authorName = "AgilPanuchi";

  return (
    <div>
      <Header name={nameBrand} logo={logoa} showSearch={showSearch} />
      <MainPage />
      <Footer quote={dashboardQuote} authorName={authorName} />
    </div>
  );
};

export default HomePage;
