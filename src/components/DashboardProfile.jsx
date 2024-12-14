import agilImage from "../assets/logoa.jpg";

export const DashboardProfile = () => {
  return (
    <div id="profile" className="row vh-100 align-items-center pb-5">
      <div className="col-md-5 col-sm-12 order-md-2 d-flex justify-content-center">
        <figure className="figure mt-5">
          <img src={agilImage} alt="Foto Agil Panuchi" width="270" height="270" className="rounded shadow rounded-circle img-fluid mx-auto d-flex bgUngu" />
          <figcaption className="user-select-none figure-caption mt-3 text-center">- Profile User -</figcaption>
        </figure>
      </div>
      <div className="col-md-6 col-sm-12 order-md-1 offset-md-1">
        <h1>
          Hello, <span className="textUngu">I'm Mr/Mrs.a </span>
        </h1>
        <p className="pt-3 textUngu">
          Ini adalah tampilan dashboard pengguna. Meskipun masih dalam tahap konsep, nantinya ini akan menjadi profil pengguna yang akan menampilkan informasi dan keahlian saya sebagai pengembang perangkat lunak.
        </p>
      </div>
    </div>
  );
};
