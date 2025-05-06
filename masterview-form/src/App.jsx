import React from 'react';

function App() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Proforma</h2>

      <form>
        {/* SHIPPER/EXPORT - Títulos */}
        <div className="row">
          <div className="col-6">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              Shipper/Export
            </label>
          </div>
          <div className="col-3">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              Booking Number
            </label>
          </div>
          <div className="col-3">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              Bill of Lading No.
            </label>
          </div>
        </div>

        {/* Campos SHIPPER/EXPORT + BOOKING/BILL OF LADING */}
        <div className="row">
          <div className="col-6">
            <textarea
              className="form-control mt-0"
              name="shipper"
              rows="8"
              placeholder="Principal or Seller licensee and full address"
              style={{ resize: 'none' }}
            />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6 mb-2">
                <input
                  type="text"
                  className="form-control mt-0"
                  name="bookingNumber"
                  placeholder="Enter booking number"
                />
              </div>
              <div className="col-6 mb-2">
                <input
                  type="text"
                  className="form-control mt-0"
                  name="billOfLading"
                  placeholder="Enter bill of lading no."
                />
              </div>
              <div className="col-12">
                <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
                  Export References
                </label>
                <textarea
                  className="form-control mt-0"
                  name="exportReferences"
                  rows="4"
                  placeholder="Enter export references"
                  style={{ resize: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CONSIGNEE + FORWARDING AGENT */}
        <div className="row mt-4">
          {/* CONSIGNEE */}
          <div className="col-6">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              Consignee
            </label>
            <textarea
              className="form-control mt-0"
              name="consignee"
              rows="8"
              placeholder="Name and Full Address / Non-Negotiable Unless Consigned to Order"
              style={{ resize: 'none' }}
            />

            <div className="row g-0 mt-0">
              <div className="col-3">
                <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
                  Contact
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className="form-control mt-0"
                  name="consigneeContact"
                  placeholder="Enter contact info"
                />
              </div>
            </div>

            {/* NOTIFY PARTY / INTERMEDIATE CONSIGNEE */}
            <div className="row g-0 mt-0">
              <div className="col-12">
                <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
                  Notify Party / Intermediate Consignee
                </label>
                <textarea
                  className="form-control mt-0"
                  name="notifyParty"
                  rows="8"
                  placeholder="Name and full address"
                  style={{ resize: 'none' }}
                />
              </div>
              <div className="col-3">
                <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
                  Contact
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className="form-control mt-0"
                  name="notifyContact"
                  placeholder="Enter contact info"
                />
              </div>
            </div>
          </div>

          {/* FORWARDING AGENT */}
          <div className="col-6">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              Forwarding Agent
            </label>
            <textarea
              className="form-control mt-0"
              name="forwardingAgent"
              rows="10"
              placeholder="References F.M. C. No."
              style={{ resize: 'none' }}
            />
          </div>
        </div>

        {/* Botón */}
        <div className="mb-3 mt-4">
          <button type="submit" className="btn btn-primary">
            Generar Excel
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
