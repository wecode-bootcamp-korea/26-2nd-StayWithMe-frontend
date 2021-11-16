import React from 'react';
import DateModal from '../ModalSort/DateModal';
import SlideBar from '../ModalSort/SlideBar';
import CountPeople from '../ModalSort/CountPeople';
import StayCheckBox from '../ModalSort/StayCheckBox';

const ModalForm = ({ modal, closeModal }) => {
  const isModalSort = (modalSort, closeModal) => {
    switch (modalSort) {
      case 'date':
        return <DateModal modalSort={modalSort} closeModal={closeModal} />;
      case 'price':
        return <SlideBar modalSort={modalSort} closeModal={closeModal} />;
      case 'people':
        return <CountPeople modalSort={modalSort} closeModal={closeModal} />;
      case 'stay':
        return <StayCheckBox modalSort={modalSort} closeModal={closeModal} />;
      default:
        break;
    }
  };

  return <>{isModalSort(modal, closeModal)}</>;
};

export default ModalForm;
