import styles from '../assets/styles/modal.module.scss';

const Modal = ({ isOpen, handleClose, ...props }) => {
  const handleStopPropagation = e => e.stopPropagation();

  return (
    <>
      <div className={`${styles.modalWrapper} ${isOpen ? styles.modalOpen : ''}`} onClick={handleClose}>
        <div className={styles.modalContainer} onClick={handleStopPropagation}>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Modal;
