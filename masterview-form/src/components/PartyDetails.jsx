import React from 'react';

export default function PartyDetails() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <label className="form-label fw-bold border p-2 d-block bg-primary-subtle text-start mb-0">CONSIGNEE</label>
          <textarea
            id="consignee"
            className="form-control mt-0"
            name="consignee"
            rows="6"
            placeholder="CONSIGNEE: Name and Full Address / Non-Negotiable Unless Consigned to Order"
            style={{ resize: 'none' }}
          />
          <div className="row g-0 mt-0">
            <div className="col-3">
              <label className="form-label fw-bold border p-2 d-block bg-primary-subtle text-start mb-0">Contact</label>
            </div>
            <div className="col-9">
              <input
                id="consigneeContact"
                type="text"
                className="form-control mt-0"
                name="consigneeContact"
                placeholder="Enter contact info"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0 mt-4">
        <div className="col-6 pe-1">
          <label className="form-label fw-bold border p-2 d-block bg-primary-subtle text-start mb-0">NOTIFY PARTY</label>
          <textarea
            id="notify"
            className="form-control mt-0"
            name="notifyParty"
            rows="6"
            placeholder="NOTIFY PARTY: Name and full address"
            style={{ resize: 'none' }}
          />
          <div className="row g-0 mt-0">
            <div className="col-3">
              <label className="form-label fw-bold border p-2 d-block bg-primary-subtle text-start mb-0">Contact</label>
            </div>
            <div className="col-9">
              <input
                id="notifyContact"
                type="text"
                className="form-control mt-0"
                name="notifyContact"
                placeholder="Enter contact info"
              />
            </div>
          </div>
        </div>

        <div className="col-6 ps-1">
          <label className="form-label fw-bold border p-2 d-block bg-primary-subtle text-start mb-0">SECOND NOTIFY PARTY</label>
          <textarea
            id="secondNotify"
            className="form-control mt-0"
            name="secondNotifyParty"
            rows="6"
            placeholder="Name and Full Address"
            style={{ resize: 'none' }}
          />
          <div className="row g-0 mt-0">
            <div className="col-3">
              <label className="form-label fw-bold border p-2 d-block bg-primary-subtle text-start mb-0">Contact</label>
            </div>
            <div className="col-9">
              <input
                id="secondNotifyContact"
                type="text"
                className="form-control mt-0"
                name="secondNotifyContact"
                placeholder="Enter contact info"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
