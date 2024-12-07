import moment from 'moment';
import styles from '../assets/styles/certificateGenerator.module.scss';

const Certificate = ({ fullName, course, dateOfConductStart, dateOfConductEnd, signature, signatureDetails }) => {
  return (
    <>
      <div className={styles.certificateWrapper}>
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

        <button style={{ marginTop: ' 3rem' }}>Download PDF</button>
      </div>
    </>
  );
};

export default Certificate;
