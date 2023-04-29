import styles from '../assets/styles/modal.module.scss'

const Modal = ({ isOpen, handleClose, ...props }) => {
  return (
    <>
      <div className={`${styles.modalWrapper} ${isOpen ? styles.modalOpen : ''}`} onClick={handleClose}>
        <div className={styles.modalContainer} onClick={e => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Modal
