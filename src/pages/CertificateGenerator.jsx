import { useReducer, useState } from 'react';

import styles from '../assets/styles/certificateGenerator.module.scss';
import Modal from '../components/Modal';
import Certificate from '../view/Certificate';

const initialState = {
  fullName: 'Rohit Jangid',
  course: 'Data Structure and Algorithm using JavaScript',
  dateOfConductStart: '2020-05-20',
  dateOfConductEnd: '2023-05-20',
  signature: '',
  signatureDetails: 'CEO, CipherGuy',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TEXT_CHANGE':
      return { ...state, [action.field]: action.payload };

    default:
      break;
  }
};

const CertificateGenerator = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleSubmitForm = e => {
    e.preventDefault();
    const { fullName, course, dateOfConductStart, dateOfConductEnd, signature, signatureDetails } = formState;

    if (fullName && course && dateOfConductStart && dateOfConductEnd && signature && signatureDetails) {
      setIsOpenModal(true);
    } else {
      alert('Please fill all details');
    }
  };

  const handleTextChange = e => {
    dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: e.target.value });
  };

  const handleFileChange = e => {
    const selected = e.target.files[0];

    if (selected && selected.type.startsWith('image/')) {
      const objectUrl = URL.createObjectURL(selected);
      dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: { ...selected, preview: objectUrl } });
    } else {
      e.target.value = '';
      alert('Please upload a valid image file.');
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <form onSubmit={handleSubmitForm}>
            <div className={styles.inputGroup}>
              <label htmlFor='user-name'>Name</label>
              <input
                type='text'
                name='fullName'
                value={formState.fullName}
                onChange={handleTextChange}
                id='user-name'
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='course'>Course</label>
              <input type='text' name='course' value={formState.course} onChange={handleTextChange} id='course' />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='dateOfConductStart'>Date of Conduct - Start</label>
              <input
                type='date'
                value={formState.dateOfConductStart}
                onChange={handleTextChange}
                name='dateOfConductStart'
                id='dateOfConductStart'
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='dateOfConductEnd'>Date of Conduct - End</label>
              <input
                type='date'
                value={formState.dateOfConductEnd}
                onChange={handleTextChange}
                name='dateOfConductEnd'
                id='dateOfConductEnd'
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='signature'>Signature</label>
              <input
                type='file'
                name='signature'
                id='signature'
                accept='image/jpeg, image/png'
                onChange={handleFileChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='signatureDetails'>Signature Details</label>
              <input
                type='text'
                name='signatureDetails'
                value={formState.signatureDetails}
                onChange={handleTextChange}
                id='signatureDetails'
              />
            </div>

            <button type='submit'>Generate Certificate</button>
          </form>
        </div>
      </div>

      <Modal isOpen={isOpenModal} handleClose={() => setIsOpenModal(false)}>
        <Certificate {...formState} />
      </Modal>
    </>
  );
};

export default CertificateGenerator;
