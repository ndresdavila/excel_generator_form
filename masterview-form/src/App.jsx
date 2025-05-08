import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './custom-toast.css';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

import FormHeader from './components/FormHeader';
import PartyDetails from './components/PartyDetails';
import PortDetails from './components/PortDetails';
import ParticularsSection from './components/ParticularsSection';
import DynamicRows from './components/DynamicRows';
import FooterFields from './components/FooterFields';

const fillExcelTemplate = async (formRef, rows) => {
  const response = await fetch('/Masterview-FORMATO_PROFORMA.xlsx');
  const arrayBuffer = await response.arrayBuffer();

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(arrayBuffer);
  const sheet = workbook.getWorksheet("BILL OF LADING ");

  const fieldMappings = [
    { id: 'shipper', cell: 'A12' },
    { id: 'bookingNumber', cell: 'G12' },
    { id: 'consignee', cell: 'A20' },
    { id: 'consigneeContact', cell: 'B26' },
    { id: 'notify', cell: 'A28' },
    { id: 'notifyContact', cell: 'B33' },
    { id: 'vessel', cell: 'A37' },
    { id: 'portOfLoading', cell: 'D37' },
    { id: 'portOfDischarge', cell: 'A39' },
  ];

  fieldMappings.forEach(({ id, cell }) => {
    const value = formRef.current.querySelector(`#${id}`)?.value || '';
    sheet.getCell(cell).value = value;
  });

  let startRow = 46;
  rows.forEach((row, index) => {
    const baseRow = startRow + (index * 5);

    const containerRow = sheet.getRow(baseRow);         // Fila para el container
    containerRow.getCell(1).value = row.container;      // Columna A
    containerRow.getCell(4).value = row.packages;       // Columna D
    containerRow.getCell(5).value = row.description;    // Columna E
    containerRow.getCell(9).value = row.grossWeight;    // Columna I
    containerRow.getCell(10).value = row.measurements;  // Columna J
    containerRow.commit();

    const sealsRow = sheet.getRow(baseRow + 1);         // Fila siguiente para seals
    sealsRow.getCell(1).value = row.seals;              // Columna A
    sealsRow.commit();
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, 'Masterview-FORMATO_PROFORMA.xlsx');
};


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
