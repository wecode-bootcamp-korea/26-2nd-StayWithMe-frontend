import React from 'react';
import DateModal from '../ModalSort/DateModal';
import SlideBar from '../ModalSort/SlideBar';

const ModalForm = ({ modal, closeModal }) => {
  const isModalSort = (modalSort, closeModal) => {
    switch (modalSort) {
      case 'date':
        return <DateModal modalSort={modalSort} closeModal={closeModal} />;
      case 'price':
        return <SlideBar modalSort={modalSort} closeModal={closeModal} />;
      default:
        break;
    }
  };

  return <>{isModalSort(modal, closeModal)}</>;
};

export default ModalForm;
