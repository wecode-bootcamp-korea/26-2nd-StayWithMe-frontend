import React from 'react';
import styled from 'styled-components';
import ModalForm from './ModalForm';

const ModalTemplate = ({ modal, closeModal }) => {
  const { modalSort, modalTitle, top, left } = modal;

  return (
    <Container modalTop={top} modalLeft={left}>
      <ModalTopContainer>
        <ModalTitle>{modalTitle}</ModalTitle>
        <ModalCloseButton onClick={closeModal} />
      </ModalTopContainer>
      <ModalForm modal={modalSort} closeModal={closeModal} />
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  position: absolute;
  top: ${({ modalTop }) => `${modalTop + 50}px`};
  left: ${({ modalLeft }) => `${modalLeft}px`};
  border: 1px solid #e4e4e4e4;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  z-index: 999;
`;

const ModalTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ModalTitle = styled.div`
  margin-right: 20px;
  font-size: 28px;
  font-weight: 700;
`;

const ModalCloseButton = styled.button`
  display: inline-block;
  width: 28px;
  height: 28px;
  border: none;
  background: #fff url(./images/btn_layer_close.png) no-repeat;
  background-size: 25px 25px;
  cursor: pointer;
`;

export default ModalTemplate;
