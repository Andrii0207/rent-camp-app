import { useEffect } from 'react';
import { Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import { ModaCardInfo } from 'components/ModaCardInfo/ModaCardInfo';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ closeModal, modalData }) {
  useEffect(() => {
    const handlePressESC = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handlePressESC);
    return () => {
      window.removeEventListener('keydown', handlePressESC);
    };
  }, [closeModal]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <div>
        <ModaCardInfo data={modalData} closeModal={closeModal} />
      </div>
    </Overlay>,
    modalRoot
  );
}
