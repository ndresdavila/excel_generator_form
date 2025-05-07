import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormHeader from './components/FormHeader';
import PartyDetails from './components/PartyDetails';
import PortDetails from './components/PortDetails';
import ParticularsSection from './components/ParticularsSection';
import DynamicRows from './components/DynamicRows';
import FooterFields from './components/FooterFields';

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
        toast.error(`Por favor, complete el campo: ${el.placeholder || el.name}`, {
          position: 'bottom-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }
    }

    toast.success('Todos los campos están llenos. Generando archivo Excel...', {
      position: 'bottom-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Aquí irá la lógica de generación de Excel en el futuro
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
