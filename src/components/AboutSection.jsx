import React, { useState } from "react";
import AboutDescription from "./AboutDescription";
import ModalComponent from "./ModalComponent";

const AboutSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const content = "Saya adalah seorang pengembang perangkat lunak yang berfokus pada front-end dan back-end development dan Latar belakang pendidikan Lulusan Teknik dan Ilmu Komputer.";

  return (
    <section id="about">
      <div className="text-center pt-3">
        <h1 className="textUngu pb-1 bbb" onClick={handleShow}>
          Meet Agil Panuchi
        </h1>
        <hr className="w-50 mx-auto" />
      </div>

      <div className="container-fluid text-start">
        <AboutDescription />
      </div>

      <ModalComponent showModal={showModal} handleClose={handleClose} title="Tentang Saya" content={content} />
    </section>
  );
};

export default AboutSection;
