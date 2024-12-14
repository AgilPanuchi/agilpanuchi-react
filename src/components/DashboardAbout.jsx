export const DashboardAbout = ({ name, skills, goals, projects }) => {
  return (
    <div id="about" className="row ">
      <div className="text-center pt-3">
        <h1 className="textUngu pb-1">Meet {name}</h1>
        <hr className="w-50 mx-auto" />
      </div>

      <div className="col-sm-12 col-md-3 offset-md-1">
        <h4>Keahlian Utama</h4>
      </div>
      <div className="col-sm-12 col-md-8">
        <div className=" border-ungu ps-4">
          <p> {skills} </p>
        </div>
      </div>
      <div className="col-sm-12 col-md-3 offset-md-1">
        <h4>Tujuan Utama</h4>
      </div>
      <div className="col-sm-12 col-md-8">
        <div className=" border-ungu ps-4">
          <p>{goals}</p>
        </div>
      </div>

      <div className="col-sm-12 col-md-3 offset-md-1">
        <h4>Proyek</h4>
      </div>
      <div className="col-sm-12 col-md-8">
        <div className=" border-ungu ps-4">
          <p>{projects}</p>
        </div>
      </div>
    </div>
  );
};
