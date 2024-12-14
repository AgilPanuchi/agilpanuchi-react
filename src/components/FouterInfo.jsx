import { SiWhatsapp } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

const FooterInfo = ({ authorName }) => {
  return (
    <div className="row text-center footer-icons">
      <div className="col-sm-12 col-md-6">
        <p>&copy; 2024 {authorName}. Seluruh hak cipta dilindungi.</p>
      </div>

      <div className="col-sm-12 col-md-6">
        <div>
          <a href="mailto:Panuchi28@gmail.com?subject=Halo Agil, saya telah melihat portofolio Anda dan ingin membahas potensi kesempatan kerja. Apakah Anda tersedia untuk berdiskusi lebih lanjut?">
            <i>
              <MdOutlineMailOutline />
            </i>
          </a>
          <a href="https://id.linkedin.com/in/agil-panuchi-72a77928b">
            <i>
              <AiOutlineLinkedin />
            </i>
          </a>
          <a href="https://www.google.com/maps?q=-6.349889,106.813278">
            <i>
              <FiMapPin />
            </i>
          </a>
          <a href="https://wa.me/6289636393547?text=Halo Agil, saya telah melihat portofolio Anda dan ingin membahas potensi kesempatan kerja. Bisakah kita mengatur waktu untuk berbicara lebih lanjut?">
            <i>
              <SiWhatsapp />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
