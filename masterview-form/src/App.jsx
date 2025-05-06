import React from 'react';

function App() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulario de Exportación</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">SHIPPER/EXPORT</label>
          <input type="text" className="form-control" name="shipper" />
        </div>

        <div className="mb-3">
          <label className="form-label">BOOKING NUMBER</label>
          <input type="text" className="form-control" name="bookingNumber" />
        </div>

        {/* Agrega más campos aquí según tu lista... */}

        <button type="submit" className="btn btn-primary">
          Generar Excel
        </button>
      </form>
    </div>
  );
}

export default App;
