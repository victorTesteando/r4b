'use client'

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import './dropZone.css';

const DropZone = ({ validateCSV, validateXLS, keys, saveFile }) => {
  const dispatch = useDispatch();
  const [isInvalidFile, setIsInvalidFile] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFileLoaded, setIsFileLoaded] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileLoad = (file, data) => {
    const handleCSV = (result) => {
      const validationError = validateCSV(result.data);
      processValidation(validationError, result.data);
    };

    const handleXLS = (workbook) => {
      const sheetName = workbook.SheetNames[0];
      const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
      const validationError = validateXLS(worksheet);
      processValidation(validationError, worksheet);
    };

    const processValidation = (validationError, data) => {
      if (validationError) {
        setIsInvalidFile(true);
        setErrorMessage(validationError);
      } else {
        setIsInvalidFile(false);
        setIsFileLoaded(true);
        const rows = data.slice(1);
        const objects = rows.map(row => keys.reduce((obj, key, index) => ({ ...obj, [key]: row[index] }), {}));
        dispatch(saveFile(objects));
      }
    };

    if (file.type === 'text/csv') {
      Papa.parse(data, { complete: handleCSV });
    } else if (file.type.includes('spreadsheet') || file.type === 'application/vnd.ms-excel') {
      const workbook = XLSX.read(data, { type: 'binary' });
      handleXLS(workbook);
    }
  };

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    setIsFileLoaded(false);
    setIsInvalidFile(false);
    setErrorMessage('');

    if (fileRejections.length > 0) {
      setIsInvalidFile(true);
      setErrorMessage('El archivo no es compatible');
      return;
    }

    const file = acceptedFiles[0];
    const reader = new FileReader();
    setFileName(file.name);

    reader.onload = (e) => handleFileLoad(file, e.target.result);

    if (file.type === 'text/csv') {
      reader.readAsText(file);
    } else {
      reader.readAsBinaryString(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.xls', '.xlsx']
    },
    multiple: false
  });

  return (
    <div {...getRootProps()} className={`container-dropzone ${isDragActive ? 'drag-active' : ''}`}>
      <input {...getInputProps()} />
      <div className="dropzone">
        {isInvalidFile ? (
          <ErrorMessage message={errorMessage} />
        ) : isFileLoaded ? (
          <SuccessMessage fileName={fileName} />
        ) : (
          <UploadPrompt isDragActive={isDragActive} />
        )}
      </div>
    </div>
  );
}

const ErrorMessage = ({ message }) => (
  <>
    <Image
      src="/images/document-invalid.svg"
      width={56}
      height={56}
      alt="invalid"
    />
    <div className='dropzone-content'>
      <p className='text-invalid text-danger'>{message}</p>
      <p className="sub-text-invalid">
        Formatos aceptos: <span className="format-highlight">.CSV o .XLS</span>
      </p>
    </div>
  </>
);

const SuccessMessage = ({ fileName }) => (
  <>
    <Image
      src="/images/document-check.svg"
      width={56}
      height={56}
      alt="valid"
    />
    <div className='dropzone-content'>
      <p className='text-valid'>Éxito al leer el archivo</p>
      <p className="sub-text-invalid">{fileName}</p>
    </div>
  </>
);

const UploadPrompt = ({ isDragActive }) => (
  <>
    {isDragActive ? (
      <>
        <Image
          src="/images/document-drop.svg"
          width={56}
          height={56}
          alt="drop"
        />
        <div>
          <p className='text-drop text-primary'>Suelta el archivo</p>
          <p className='text-drop text-primary'>para ser leído</p>
        </div>
      </>
    ) : (
      <>
        <Image
          src="/images/document-add.svg"
          width={56}
          height={56}
          alt="add"
        />
        <div className='dropzone-content'>
          <p className='text'>Arrastra tu archivo acá, o</p>
          <Button size="small" className="button-fill button-dropzone">Seleccione un archivo</Button>
          <p className="sub-text">
            Formatos: <span className="format-highlight">.CSV o .XLS</span>
          </p>
        </div>
      </>
    )}
  </>
);

export default DropZone;
