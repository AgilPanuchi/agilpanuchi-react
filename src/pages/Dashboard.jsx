import React from "react";
import DashboardComponents from "../components/DashboardComponents";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import logob from "../assets/logoa.jpg";

export const Dashboard = () => {
  const dashboardQuote = "Welcome to the dashboard! Here you manage everything.";
  const nameBrand = "Mr.a / Mrs.a";
  const authorName = "Mr.a / Mrs.a";

  return (
    <div>
      <Header name={nameBrand} logo={logob} />
      <DashboardComponents />
      <Footer quote={dashboardQuote} authorName={authorName} />
    </div>
  );
};
