import React from "react";
import KontakDetails from "./KontakDetail";
import MarqueComponent from "./MarquenComponent";

const KontakSection = () => {
  const location = "JL. Moh Kahfi II, Gang Jambu Rt.001 Rw.008 No.58, Srengseng Sawah, Jagakarsa, Jakarta-Selatan, Dki Jakarta";
  const phone = "(+62) 896-3639-3547";
  const email = "Panuchi28@gmail.com";
  const linkedin = "Agil Panuchi";
  const marquee = "marquee-content";

  const judul = "Kemampuan Dasar Saya";

  return (
    <section className="container-fluid" id="contact">
      <div className="textUngu pt-md-2 pt-sm-4">
        <h1>Reach Out</h1>
        <hr className="w-50 mb-5 mx-auto" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <KontakDetails location={location} phone={phone} email={email} linkedin={linkedin} />
          </div>
          <div className="col-sm-12 col-lg-6 pt-md-2 pt-sm-5">
            <MarqueComponent marquee={marquee} judul={judul} imageIndices={[0, 1, 2, 3, 4]} showCaptions={false} />
            <MarqueComponent marquee={marquee} imageIndices={[5, 6, 7, 8, 9, 10]} showCaptions={false} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default KontakSection;
