import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={styles['modal-overlay']} onClick={() => props.onModalClose()}>
      <div className='modal-content'>{props.error}</div>
    </div>
  )
}

export default Modal