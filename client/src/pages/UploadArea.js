import './styles/UploadArea.css'
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [pdf, setPdf] = useState(null);

  const handleFileUpload = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('file', file);

    fetch('http://localhost:5000/docxtopdf', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        setPdf(url);
      })
      .catch((error) => console.error(error));
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className='up'>
      <h2>Convert DOCX To PDF</h2>
      <Form onSubmit={handleFileUpload}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label className='Form'>Upload a docx file</Form.Label>
          <Form.Control className='FormCtrl' type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Convert to PDF
        </Button>
      </Form>
      {pdf && (
        <a className='downloadLink' href={pdf} download="output.pdf">
          Download PDF
        </a>
      )}
    </div>
  );
};

export default Upload;