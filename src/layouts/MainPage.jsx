import React from "react";
import AsideSection from "../components/AsideSection";
import AboutSection from "../components/AboutSection";
import KontakSection from "../components/KontakSection";
import PortofolioSection from "../components/PortofolioSection";
import ProfileSection from "../components/ProfileSection";

const MainPage = () => {
  return (
    <section id="Beranda">
      <div className="jumbotron text-center mt-5 mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block">
              <AsideSection />
            </div>
            <div className="col-lg-10 col-12">
              <div className="row justify-content-around">
                <ProfileSection />
              </div>
              <div className="">
                <AboutSection />
              </div>
              <div className="">
                <PortofolioSection />
              </div>
              <div className="">
                <KontakSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
