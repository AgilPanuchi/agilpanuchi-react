import PortofolioAccordion from "./PortofolioAccordion";
import PortofolioCarousel from "./PortofolioCarousel";

const PortfolioSection = () => {
  const imgClassName = "d-block w-100 border border-dark rounded";

  return (
    <section id="portofolio">
      <div>
        <h1 className="textUngu pb-1">Portfolio Overview</h1>
        <hr className="w-50 mb-5 mx-auto" />
      </div>

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 mb-4">
            <PortofolioCarousel imgClassName={imgClassName} />
          </div>

          <div className="col-sm-12 col-md-6">
            <PortofolioAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
