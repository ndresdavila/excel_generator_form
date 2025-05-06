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
            <div className="row g-0 mt-4">
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

        {/* INITIAL CARRIAGE BY (MODE)* y PLACE OF INITIAL RECEIPT* */}
        <div className="row mt-4">
          <div className="col-3">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              INITIAL CARRIAGE BY (MODE)*
            </label>
            <input
              type="text"
              className="form-control mt-0"
              name="initialCarriageMode"
              placeholder="Enter mode of initial carriage"
            />
          </div>
          <div className="col-3">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              PLACE OF INITIAL RECEIPT*
            </label>
            <input
              type="text"
              className="form-control mt-0"
              name="initialReceiptPlace"
              placeholder="Enter place of initial receipt"
            />
          </div>
        </div>

        {/* VESSEL/VOY + PORT OF LOADING + LOADING PIER/TERMINAL + ORIGINAL(S) TO BE RELEASED AT */}
        <div className="row mt-4">
          <div className="col-3">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              VESSEL VOY
            </label>
            <input
              type="text"
              className="form-control mt-0"
              name="vesselVoy"
              placeholder="Enter vessel voy"
            />
          </div>
          <div className="col-3">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              PORT OF LOADING
            </label>
            <input
              type="text"
              className="form-control mt-0"
              name="portOfLoading"
              placeholder="Enter port of loading"
            />
          </div>
          <div className="col-3">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              LOADING PIER/TERMINAL
            </label>
            <input
              type="text"
              className="form-control mt-0"
              name="loadingPier"
              placeholder="Enter loading pier/terminal"
            />
          </div>
          <div className="col-3">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              ORIGINAL(S) TO BE RELEASED AT
            </label>
            <input
              type="text"
              className="form-control mt-0"
              name="originalsRelease"
              placeholder="Enter location of release"
            />
          </div>
        </div>

        {/* PORT OF DISCHARGE + PORT OF DELIVERY */}
<div className="row mt-4">
  <div className="col-3">
    <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
      PORT OF DISCHARGE
    </label>
    <input
      type="text"
      className="form-control mt-0"
      name="portOfDischarge"
      placeholder="Enter port of discharge"
    />
  </div>
  <div className="col-3">
    <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
      PORT OF DELIVERY
    </label>
    <input
      type="text"
      className="form-control mt-0"
      name="portOfDelivery"
      placeholder="Enter port of delivery"
    />
  </div>

  <div className="col-6">
    <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
      TYPE OF MOVE
    </label>
    <input
      type="text"
      className="form-control mt-0"
      name="typeOfMove"
      placeholder="Enter type of move"
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
