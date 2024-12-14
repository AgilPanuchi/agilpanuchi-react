import React from "react";
import agilImage from "../assets/agil.png";

const ProfileImage = () => {
  return (
    <div>
      <figure className="figure">
        <img src={agilImage} alt="Foto Agil Panuchi" width="270" height="270" className="rounded shadow rounded-circle mx-auto d-flex img-fluid mt-5 bgUngu" />
        <figcaption className="user-select-none figure-caption mt-2">- Pengembang Desktop & Web -</figcaption>
      </figure>
    </div>
  );
};

export default ProfileImage;
