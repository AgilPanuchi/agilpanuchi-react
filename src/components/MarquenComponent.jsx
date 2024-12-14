import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import php from "../assets/php.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import ilustrator from "../assets/ilustrator.png";
import photoshop from "../assets/photoshop.png";
import github from "../assets/github.png";

const images = [
  { src: html, alt: "HTML Logo", caption: "HTML", description: "HTML (HyperText Markup Language) digunakan untuk membuat struktur halaman web." },
  { src: css, alt: "CSS Logo", caption: "CSS", description: "CSS (Cascading Style Sheets) digunakan untuk mendesain tampilan halaman web." },
  { src: javascript, alt: "JavaScript Logo", caption: "JavaScript", description: "JavaScript adalah bahasa pemrograman untuk membuat halaman web interaktif." },
  { src: php, alt: "PHP Logo", caption: "PHP", description: "PHP adalah bahasa pemrograman server-side untuk mengembangkan aplikasi web dinamis." },
  { src: java, alt: "Java Logo", caption: "Java", description: "Java adalah bahasa pemrograman yang digunakan untuk aplikasi berbasis desktop, web, dan mobile." },
  { src: mysql, alt: "MySQL Logo", caption: "MySQL", description: "MySQL adalah sistem manajemen basis data relasional open-source." },
  { src: bootstrap, alt: "Bootstrap Logo", caption: "Bootstrap", description: "Bootstrap adalah framework CSS untuk mempercepat pengembangan web responsif." },
  { src: react, alt: "React Logo", caption: "React", description: "React adalah library JavaScript untuk membangun antarmuka pengguna." },
  { src: ilustrator, alt: "Illustrator Logo", caption: "Illustrator", description: "Adobe Illustrator digunakan untuk membuat grafik vektor." },
  { src: photoshop, alt: "Photoshop Logo", caption: "Photoshop", description: "Adobe Photoshop digunakan untuk pengeditan foto dan desain grafis." },
  { src: github, alt: "GitHub Logo", caption: "GitHub", description: "GitHub adalah platform untuk versi kontrol dan kolaborasi kode." },
];

const MarqueComponent = ({ judul, marquee, imageIndices = [], showCaptions = true }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalImage, setModalImage] = useState({ src: "", alt: "" });

  const captionClasses = {
    0: "marquee-a",
    1: "marquee-b",
    2: "marquee-c",
    3: "marquee-d",
    4: "marquee-e",
    5: "marquee-f",
    6: "marquee-g",
    7: "marquee-h",
    8: "marquee-i",
    9: "marquee-j",
    10: "marquee-k",
  };

  const handleModal = (index) => {
    setModalContent(images[index].description);
    setModalTitle(images[index].caption);
    setModalImage({ src: images[index].src, alt: images[index].alt });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setModalContent("");
    setModalTitle("");
    setModalImage({ src: "", alt: "" });
  };

  return (
    <div id="marquee">
      <div className="text-center marquee-container">
        <h3 className="textUngu">{judul}</h3>
        <div className={marquee}>
          <div className="row">
            <div className="col-12">
              {imageIndices.map((index) => (
                <div key={index} className="d-inline-block text-center ms-3">
                  <img src={images[index].src} alt={images[index].alt} width="120" height="120" className="me-2" />
                  {showCaptions && (
                    <button className={`btn btn-ungu d-block ${captionClasses[index] || "marquee-default"}`} onClick={() => handleModal(index)}>
                      {images[index].caption}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showModal && <ModalComponent showModal={showModal} handleClose={handleClose} title={modalTitle} content={modalContent} imageSrc={modalImage.src} imageAlt={modalImage.alt} />}
    </div>
  );
};

export default MarqueComponent;
