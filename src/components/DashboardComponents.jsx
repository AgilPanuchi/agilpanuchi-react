import KontakDetails from "./KontakDetail";
import DashboardCard from "./DashboardCard";
import { DashboardProfile } from "./DashboardProfile";
import { DashboardAbout } from "./DashboardAbout";
import { contactData, aboutData } from "../data/index";

const DashboardComponents = () => {
  return (
    <div id="dashboard" className="pt-5">
      <div className="container-fluid">
        <div>
          <DashboardProfile />
        </div>
        <div>
          <DashboardAbout name={aboutData.name} skills={aboutData.skills} goals={aboutData.goals} projects={aboutData.projects} />
        </div>
        <div id="portofolio">
          <div className="text-center pb-5">
            <h1 className="textUngu pb-1">Portofolio {aboutData.name}</h1>
            <hr className="w-50 mx-auto" />
          </div>

          <div className="row gx-5 d-flex justify-content-around">
            <div className="col-sm-12 col-md-6 col-lg-4 order-lg-2">
              <DashboardCard />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 order-lg-2">
              <DashboardCard />
            </div>
          </div>
        </div>
        <div id="contact">
          <div className="text-center">
            <h1 className="textUngu pb-1">Contact Mr/Mrs. a</h1>
            <hr className="w-50 mx-auto" />
          </div>
          <div className="row pt-5">
            <KontakDetails location={contactData.location} phone={contactData.phone} email={contactData.email} linkedin={contactData.linkedin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponents;
