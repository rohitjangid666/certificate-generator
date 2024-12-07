import { useRef } from 'react';

import moment from 'moment';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import styles from '../assets/styles/certificateGenerator.module.scss';

const Certificate = ({ fullName, course, dateOfConductStart, dateOfConductEnd, signature, signatureDetails }) => {
  const certificateRef = useRef(null);

  const handleDownload = async () => {
    if (!certificateRef.current) {
      alert('Something went wrong! Please again later');
      return;
    }

    try {
      // use html2canvas to capture a screenshot of the certificate element
      const canvas = await html2canvas(certificateRef.current);
      const imgData = canvas.toDataURL('image/png');
      // create a new jsPDF instance and add the screenshot as an image
      const pdf = new jsPDF('l', 'mm', [1000, 670]);
      pdf.addImage(imgData, 'PNG', 0, 0, 1000, 670); // adjust dimension as needed

      // download the pdf file
      pdf.save(`${fullName.split(' ').join('_')}_certificate`);
    } catch (error) {
      console.log(`error: `, error);
    }
  };

  return (
    <>
      <div ref={certificateRef} className={styles.certificateWrapper}>
        <div className={styles.certificateContainer}>
          <div>Logo Here</div>

          <h1>CERTIFICATE OF APPRECIATION</h1>

          <span className={styles.smallText}>This certificate is proudly awarded to</span>

          <p className={styles.primaryItalicText}>{fullName}</p>

          <span className={styles.smallText}>for successfully completing the course</span>

          <h2>{course}</h2>

          <span className={styles.smallText}>{`conducted from ${
            dateOfConductStart ? moment(dateOfConductStart).format('MMMM YYYY') : '-'
          } to ${dateOfConductEnd ? moment(dateOfConductEnd).format('MMMM YYYY') : '-'}`}</span>

          <div className={styles.signatureBlock}>
            <img className={styles.signatureImage} src={signature.preview} alt='' />

            <span className={styles.horizontalBar} />

            <span className={styles.smallText}>{signatureDetails}</span>
          </div>
        </div>
      </div>

      <button style={{ marginTop: ' 3rem' }} onClick={handleDownload}>
        Download PDF
      </button>
    </>
  );
};

export default Certificate;
