// CarouselComponent.jsx
import React from "react";
import { Carousel } from "react-bootstrap";
import asset1 from "../assets/carousel1.jpg";
import asset2 from "../assets/carousel2.jpg";
import asset3 from "../assets/carousel3.jpg";
import asset4 from "../assets/carousel4.jpg";
import asset5 from "../assets/carousel5.jpg";
import asset6 from "../assets/carousel6.jpg";
import asset7 from "../assets/carousel7.jpg";
import asset8 from "../assets/carousel8.jpg";
import asset9 from "../assets/carousel9.jpg";
import asset10 from "../assets/carousel10.jpg";

const images = [
  { src: asset1, alt: "Halaman Menu Utama dari Aplikasi" },
  { src: asset2, alt: "Halaman Selamat Datang di Aplikasi" },
  { src: asset3, alt: "Halaman Login ke Aplikasi" },
  { src: asset4, alt: "Halaman Menu Presensi Karyawan" },
  { src: asset5, alt: "Halaman Menu Cuti Karyawan" },
  { src: asset6, alt: "Halaman Form Pengajuan Cuti" },
  { src: asset7, alt: "Halaman Menu Daftar Karyawan" },
  { src: asset8, alt: "Halaman Tentang Aplikasi" },
  { src: asset9, alt: "Halaman Laporan Data Karyawan" },
  { src: asset10, alt: "Halaman Laporan Data Presensi" },
];

const PortofolioCarousel = ({ imgClassName }) => {
  return (
    <Carousel id="portfolioCarousel" className="rounded">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img alt={image.alt} src={image.src} className={imgClassName} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PortofolioCarousel;
