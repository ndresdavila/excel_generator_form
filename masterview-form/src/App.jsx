import React, { useState } from 'react';

function App() {

  const [rows, setRows] = useState([
    { marks: '', packages: '', description: '' }
  ]);

  const addRow = () => {
    setRows([...rows, { marks: '', packages: '', description: '' }]);
  };

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
        </div>

        {/* VESSEL/VOY + PORT OF LOADING + LOADING PIER/TERMINAL + ORIGINAL(S) TO BE RELEASED AT */}
        <div className="row mt-4">
          <div className="col-3">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              Vessel
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
              Port of Loading
            </label>
            <input
              type="text"
              className="form-control mt-0"
              name="portOfLoading"
              placeholder="Enter port of loading"
            />
          </div>
        </div>

        {/* PORT OF DISCHARGE + PORT OF DELIVERY */}
        <div className="row mt-4">
          <div className="col-3">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0 rounded-top">
              Port of Discharge
            </label>
            <input
              type="text"
              className="form-control rounded-bottom"
              name="portOfDischarge"
              placeholder="Enter port of discharge"
            />
          </div>
        </div>

        {/* TITULO PARTE INFERIOR DEL FORMULARIO */}
        <div className="row mt-4">
          <div className="col-12">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-center rounded">
              PARTICULARS FURNISHED BY SHIPPER
            </label>
          </div>
        </div>

        {/* Encabezados */}
        <div className="d-grid border" style={{ 
          display: 'grid', 
          gridTemplateColumns: '2.5fr 1fr 4fr 2fr 2fr',
        }}>
          <label className="form-label fw-bold border px-2 py-1 bg-light text-dark text-center mb-0 rounded-top">
            Marks and Numbers / Container Numbers
          </label>
          <label className="form-label fw-bold border px-2 py-1 bg-light text-dark text-center mb-0 rounded-top">
            No. of Pkgs
          </label>
          <label className="form-label fw-bold border px-2 py-1 bg-light text-dark text-center mb-0 rounded-top">
            Description of Packages and Goods
          </label>
          <label className="form-label fw-bold border px-2 py-1 bg-light text-dark text-center mb-0 rounded-top">
            Gross Weight
          </label>
          <label className="form-label fw-bold border px-2 py-1 bg-light text-dark text-center mb-0 rounded-top">
            Measurement
          </label>
        </div>

        {/* Filas dinámicas */}
        {rows.map((row, index) => (
          <div 
            key={index} 
            className="mb-2 border"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '2.5fr 1fr 4fr 2fr 2fr',
              gap: '4px'
            }}
          >
            {/* Contenedor y Sellos (columna combinada) */}
            <div className="d-flex flex-column">
              <input
                type="text"
                className="form-control mb-1"
                value={row.container}
                onChange={(e) => {
                  const newRows = [...rows];
                  newRows[index].container = e.target.value;
                  setRows(newRows);
                }}
                placeholder="Contenedor"
              />
              <input
                type="text"
                className="form-control"
                value={row.seals}
                onChange={(e) => {
                  const newRows = [...rows];
                  newRows[index].seals = e.target.value;
                  setRows(newRows);
                }}
                placeholder="Sellos"
              />
            </div>
              
            {/* No. of Pkgs */}
            <textarea
              className="form-control h-100"
              value={row.packages}
              onChange={(e) => {
                const newRows = [...rows];
                newRows[index].packages = e.target.value;
                setRows(newRows);
              }}
              placeholder="Numero de paquetes"
            />

            {/* Description */}
            <textarea
              className="form-control h-100"
              value={row.description}
              onChange={(e) => {
                const newRows = [...rows];
                newRows[index].description = e.target.value;
                setRows(newRows);
              }}
              placeholder="Descripcion de paquetes y bienes"
            />

            {/* Gross Weight */}
            <textarea
              className="form-control h-100"
              value={row.grossWeight}
              onChange={(e) => {
                const newRows = [...rows];
                newRows[index].grossWeight = e.target.value;
                setRows(newRows);
              }}
              placeholder="Peso bruto"
            />

            {/* Measurements */}
            <textarea
              className="form-control h-100"
              value={row.measurements}
              onChange={(e) => {
                const newRows = [...rows];
                newRows[index].measurements = e.target.value;
                setRows(newRows);
              }}
              placeholder="Medidas"
            />
          </div>
        ))}

        {/* BOTÓN AGREGAR FILA */}
        <div className="mt-3 mb-3">
          <button
            type="button"
            className="btn btn-success"
            onClick={addRow}
          >
            Agregar fila
          </button>
        </div>

        {/* MARCAS, TOTAL PKGS. & DESCRIPTION - Títulos */}
        <div className="row">
          <div className="col-3">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              Marcas
            </label>
          </div>
          <div className="col-2">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              Total Pkgs
            </label>
          </div>
          <div className="col-5">
            <label className="form-label fw-bold border p-2 d-block bg-light text-dark text-start mb-0">
              Description of Packages and Goods
            </label>
          </div>
        </div>

        {/* Campos MARCAS, TOTAL PKGS. & DESCRIPTION */}
        <div className="row">
          <div className="col-3">
            <textarea
              className="form-control mt-0"
              name="shipper"
              rows="8"
              placeholder="Enter marks information"
              style={{ resize: 'none' }}
            />
          </div>

          <div className="col-2">
            <textarea
              className="form-control mt-0"
              name="shipper"
              rows="1"
              placeholder="Enter total packages"
              style={{ resize: 'none' }}
            />
          </div>

          <div className="col-5">
            <textarea
              className="form-control mt-0"
              name="shipper"
              rows="8"
              placeholder="Enter description of packages and goods"
              style={{ resize: 'none' }}
            />
          </div>
          
        </div>

        {/* Botón para generar Excel */}
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
