import React from 'react';

export default function FooterFields() {
  return (
    <>
      <div className="row">
        <div className="col-3"><label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">Marcas</label></div>
        <div className="col-2"><label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">Total Pkgs</label></div>
        <div className="col-5"><label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">Description of Packages and Goods</label></div>
      </div>
      <div className="row">
        <div className="col-3"><textarea className="form-control mt-0" rows="6" placeholder="Enter marks information" style={{ resize: 'none' }} /></div>
        <div className="col-2"><textarea className="form-control mt-0" rows="1" placeholder="Enter total packages" style={{ resize: 'none' }} /></div>
        <div className="col-5"><textarea className="form-control mt-0" rows="6" placeholder="Enter description of packages and goods" style={{ resize: 'none' }} /></div>
      </div>
    </>
  );
}