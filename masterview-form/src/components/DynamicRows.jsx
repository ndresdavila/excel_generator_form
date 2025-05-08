import React from 'react';

export default function DynamicRows({ rows, setRows, addRow }) {
  return (
    <>
      <div className="d-grid border" style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr 4fr 2fr 2fr' }}>
        <label className="form-label fw-bold border px-2 py-1 bg-primary-subtle text-center mb-0 rounded-top">Marks and Numbers / Container Numbers</label>
        <label className="form-label fw-bold border px-2 py-1 bg-primary-subtle text-center mb-0 rounded-top">No. of Pkgs</label>
        <label className="form-label fw-bold border px-2 py-1 bg-primary-subtle text-center mb-0 rounded-top">Description of Packages and Goods</label>
        <label className="form-label fw-bold border px-2 py-1 bg-primary-subtle text-center mb-0 rounded-top">Gross Weight</label>
        <label className="form-label fw-bold border px-2 py-1 bg-primary-subtle text-center mb-0 rounded-top">Measurement</label>
      </div>
      {rows.map((row, index) => (
        <div key={index} className="mb-2 border" style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr 4fr 2fr 2fr', gap: '4px' }}>
          <div className="d-flex flex-column">
            <input id={`containerNumber-${index}`} type="text" className="form-control mb-1" value={row.container} onChange={e => { const nr=[...rows]; nr[index].container=e.target.value; setRows(nr);} } placeholder="Container number" />
            <input id={`seal-${index}`} type="text" className="form-control" value={row.seals} onChange={e => { const nr=[...rows]; nr[index].seals=e.target.value; setRows(nr);} } placeholder="Seals" />
          </div>
          <textarea id={`numberOfPackages-${index}`} className="form-control h-100 resize-none" value={row.packages} onChange={e => { const nr=[...rows]; nr[index].packages=e.target.value; setRows(nr);} } placeholder="No. of pkgs" />
          <textarea id={`description-${index}`} className="form-control h-100 resize-none" value={row.description} onChange={e => { const nr=[...rows]; nr[index].description=e.target.value; setRows(nr);} } placeholder="Enter description of packages and goods" />
          <textarea id={`grossWeight-${index}`} className="form-control h-100 resize-none" value={row.grossWeight} onChange={e => { const nr=[...rows]; nr[index].grossWeight=e.target.value; setRows(nr);} } placeholder="Gross weight" />
          <textarea id={`measurements-${index}`} className="form-control h-100 resize-none" value={row.measurements} onChange={e => { const nr=[...rows]; nr[index].measurements=e.target.value; setRows(nr);} } placeholder="Measurements" />
        </div>
      ))}
      <div className="mt-3 mb-3">
        <button type="button" className="btn btn-success" onClick={addRow}>Agregar fila</button>
      </div>
    </>
  );
}
