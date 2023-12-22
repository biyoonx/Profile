import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import './ProjectDesc.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const buttonInfo = [
  { text: '프로젝트 소개', type: 'desc' },
  { text: '기능 상세 설명', type: 'func' },
];
const selectedPdfStyle = { background: '#000', color: '#fff' };

export default function ProjectDesc({ contents }) {
  const [selectedPdf, setSelectedPdf] = useState(buttonInfo[0].type);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <div className="select_pdf_button">
        {buttonInfo.map((item) => (
          <button
            key={item.type}
            onClick={() => setSelectedPdf(item.type)}
            style={selectedPdf === item.type ? selectedPdfStyle : {}}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div className="selected_pdf">
        <Document
          file={contents[selectedPdf]}
          onLoadSuccess={onDocumentLoadSuccess}
        >
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
    </>
  );
}
