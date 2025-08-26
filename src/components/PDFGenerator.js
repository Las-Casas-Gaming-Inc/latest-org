// src/components/PdfGenerator.js
import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PdfGenerator = ({ chartRef }) => {
  const handleGeneratePdf = () => {
    const chartElement = chartRef.current;

    html2canvas(chartElement, {
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.scrollHeight,
      scale: 2,
      useCORS: true
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('org-chart.pdf');
    });
  };

  return <button onClick={handleGeneratePdf}>Generate PDF</button>;
};

export default PdfGenerator;
