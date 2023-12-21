import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import './ProjectDesc.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ProjectDesc({contents}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={contents} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        <span
          onClick={() =>
            pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
          }
        >
          &lt;
        </span>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <span
          onClick={() =>
            pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
          }
        >
          &gt;
        </span>
      </p>
    </div>
  );
}
