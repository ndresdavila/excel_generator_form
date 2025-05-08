import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './custom-toast.css';

import FormHeader from './components/FormHeader';
import PartyDetails from './components/PartyDetails';
import PortDetails from './components/PortDetails';
import ParticularsSection from './components/ParticularsSection';
import DynamicRows from './components/DynamicRows';
import FooterFields from './components/FooterFields';
import { fillExcelTemplate } from './utils/excelUtils';

function App() {
  const [rows, setRows] = useState([{ container: '', seals: '', packages: '', description: '', grossWeight: '', measurements: '' }]);
  const formRef = useRef(null);

  const addRow = () => {
    setRows([...rows, { container: '', seals: '', packages: '', description: '', grossWeight: '', measurements: '' }]);
  };

  const handleGenerateExcel = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const elements = form.querySelectorAll('input, textarea');
    for (let el of elements) {
      if (!el.value.trim()) {
        toast.error(
          <div className="toast-content">
            <i className="bi bi-exclamation-triangle-fill"></i>
            <b>Campo requerido:</b> <br></br>{el.placeholder || el.name}
          </div>,
          {
            position: 'bottom-right',
            className: 'error-toast',
            autoClose: 5000,
          }
        );
        return;
      }
    }

    toast.success(
      <div className="toast-content">
        <i className="bi bi-check-circle-fill"></i>
        <b>Exito:</b> <br></br> Todos los campos están completos. Generando archivo...
      </div>,
      {
        position: 'bottom-right',
        className: 'success-toast',
        autoClose: 4000,
      }
    );

    // Lógica de generación de Excel
    fillExcelTemplate(formRef, rows);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Proforma</h2>

      <form ref={formRef}>
        <FormHeader />
        <PartyDetails />
        <PortDetails />
        <ParticularsSection />
        <DynamicRows rows={rows} setRows={setRows} addRow={addRow} />
        <FooterFields />

        <div className="mb-3 mt-4">
          <button type="button" className="btn btn-primary" onClick={handleGenerateExcel}>
            Generar Archivo Excel
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default App;
