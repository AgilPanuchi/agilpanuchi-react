import { SiWhatsapp } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

const ContactDetail = ({ location, phone, email, linkedin }) => {
  return (
    <>
      <div className="text-start">
        <ul className="list-group list-group-flush lead custom-border">
          <li className="list-group-item">
            <a href="https://www.google.com/maps?q=-6.349889,106.813278">
              <i className="bi bi-geo-alt-fill fs-2 mb-3">
                <FiMapPin />
              </i>
            </a>
            <span className="fw-bold"> Lokasi :</span> {location}
          </li>

          <li className="list-group-item">
            <a href="https://wa.me/6289636393547?text=Halo Agil, saya telah melihat portofolio Anda dan ingin membahas potensi kesempatan kerja. Bisakah kita mengatur waktu untuk berbicara lebih lanjut?">
              <i className="bi bi-telephone-fill fs-2 mb-3">
                <SiWhatsapp />
              </i>
            </a>
            <span className="fw-bold"> Telepon Seluler :</span> {phone}
          </li>

          <li className="list-group-item">
            <a href="mailto:Panuchi28@gmail.com?subject=Halo Agil, saya telah melihat portofolio Anda dan ingin membahas potensi kesempatan kerja. Apakah Anda tersedia untuk berdiskusi lebih lanjut?">
              <i className="bi bi-envelope-fill fs-2 mb-3">
                <MdOutlineMailOutline />
              </i>
            </a>
            <span className="fw-bold"> E-mail :</span> {email}
          </li>

          <li className="list-group-item">
            <a href="https://id.linkedin.com/in/agil-panuchi-72a77928b">
              <i className="bi bi-linkedin fs-2 mb-3">
                <AiOutlineLinkedin />
              </i>
            </a>
            <span className="fw-bold">Linkedin :</span> {linkedin}
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactDetail;
