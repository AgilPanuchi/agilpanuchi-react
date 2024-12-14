const ModalComponent = ({ showModal, handleClose, title, imageSrc, imageAlt, content }) => {
  if (!showModal) {
    return null;
  }

  return (
    <>
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-lg modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>
            <div className="modal-body bg-white">
              <div className="row d-flex align-items-center ">
                <div className="col-4">
                  <img src={imageSrc} alt={imageAlt} className="img-fluid" />
                </div>
                <div className="col-8">
                  <p className="text-black">{content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={handleClose}></div>
    </>
  );
};

export default ModalComponent;
