import React from 'react';

export default function FormHeader() {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
          SHIPPER/EXPORT
          </label>
        </div>
        <div className="col-3">
          <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
            Booking Number
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <textarea id="shipper" className="form-control mt-0" name="shipper" rows="6" placeholder="SHIPPER/EXPORT: Principal or Seller licensee and full address" style={{ resize: 'none' }} />
        </div>
        <div className="col-3">
          <input id="bookingNumber" type="text" className="form-control mt-0" name="bookingNumber" placeholder="Enter booking number" />
        </div>
      </div>
    </>
  );
}