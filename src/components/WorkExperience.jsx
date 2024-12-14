import { desktopProject, webPortfolio } from "../data/index";
import AppProject from "./AppProject";
import PortofolioCarousel from "./PortofolioCarousel";
import MarqueComponent from "./MarquenComponent";

export const WorkExperience = () => {
  const imgClassName = "img-thumbnail";
  const marquee = "marquee-content";
  const judul = "Platform dan Teknologi";

  return (
    <section>
      <div className="text-center pt-3">
        <h1 className="textUngu pb-1">Work Experience Me</h1>
        <hr className="w-50 mx-auto" />
      </div>

      <div className="row">
        <div className="col-lg-6 offset-lg-1 col-10 offset-1 pt-3">
          <AppProject {...desktopProject} />
        </div>
        <div className="col-lg-4 col-12 pt-3">
          <div>
            <h4 className="text-center">Gambaran Proyek yang Telah Saya Kerjakan</h4>
          </div>
          <PortofolioCarousel imgClassName={imgClassName} />
          <div className="pt-5">
            <MarqueComponent judul={judul} marquee={marquee} imageIndices={[4, 5, 8, 9]} showCaptions={false} />
          </div>
        </div>
      </div>

      <hr />
      <div className="row pt-5">
        <div className="col-lg-6 offset-lg-1 col-10 offset-1 pt-3">
          <AppProject {...webPortfolio} />
        </div>
        <div className="col-lg-4 col-12 pt-3">
          <div>
            <h4 className="text-center">Gambaran Proyek yang Telah Saya Kerjakan</h4>
          </div>
          <PortofolioCarousel imgClassName={imgClassName} />
          <div className="pt-5">
            <MarqueComponent judul={judul} marquee={marquee} imageIndices={[0, 1, 2, 6, 7]} showCaptions={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
