import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ButtonPdfDownload = () => {
  const generatePDF = () => {
    const input = document.getElementById("print-area");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("lista-de-materiais.pdf");
    });
  };

  return <button onClick={generatePDF}> Baixar Lista </button>;
};

export default ButtonPdfDownload;
