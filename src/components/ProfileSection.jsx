import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";

const ProfileSection = () => {
  return (
    <section id="profile">
      <div className="container-fluid">
        <div className="row pt-lg-3">
          <div className="col-sm-12 col-md-4 order-md-2">
            <ProfileImage />
          </div>
          <div className="col-sm-12 col-md-8 order-md-1">
            <ProfileInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
