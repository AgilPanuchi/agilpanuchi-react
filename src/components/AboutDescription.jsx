import { About } from "../data/index";

const AboutDescription = () => {
  return (
    <div>
      {About.map((about) => (
        <div key={about.id}>
          <div className="row pt-5 align-items-center d-flex">
            <div className="col-sm-12 col-md-3 offset-md-1">
              <h4>Keahlian Utama</h4>
            </div>
            <div className="col-sm-12 col-md-8">
              <div className=" border-ungu ps-4">
                <p>{about.skills}</p>
              </div>
            </div>
          </div>

          <div className="row pb-4 align-items-center d-flex pt-4">
            <div className="col-sm-12 col-md-2 offset-md-1">
              <h4>Tujuan Karir</h4>
            </div>
            <div className="col-sm-12 col-md-8 offset-md-1">
              <div className="aaa">
                <div className="border-ungu ps-4">
                  <p>{about.careerGoals}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-4 align-items-center d-flex pt-4">
            <div className="col-sm-12 col-md-2 offset-md-1">
              <h4>Proyek</h4>
            </div>
            <div className="col-sm-12 col-md-8 offset-md-1">
              <div className="aaa">
                <div className="border-ungu ps-4">
                  <p>{about.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutDescription;
