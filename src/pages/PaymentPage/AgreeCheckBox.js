import React, { useState } from 'react';
import styled from 'styled-components';

const AgreeCheckBox = () => {
  const [isAgreed, setIsAgreed] = useState({
    terms: false,
    personalInfo: false,
    refund: false,
  });

  const handleAgreement = event => {
    const { name, checked } = event.target;

    setIsAgreed({ ...isAgreed, [name]: checked });
  };

  const handleAllChecked = () => {
    setIsAgreed({
      terms: !isAllChecked,
      personalInfo: !isAllChecked,
      refund: !isAllChecked,
    });
  };

  const isAllChecked = Object.values(isAgreed).every(agreement => !!agreement);

  return (
    <div className="agreeTerms">
      <AgreeTermsContents>이용자 약관 동의</AgreeTermsContents>
      <AgreeTermsTotal>
        <CheckboxInput
          type="checkbox"
          checked={isAllChecked}
          onClick={handleAllChecked}
        />
        <CheckboxContents>사용자 약관 전체 동의</CheckboxContents>
      </AgreeTermsTotal>
      <AgreeTermsLine>
        <CheckboxInput
          type="checkbox"
          name="terms"
          onClick={handleAgreement}
          checked={isAgreed.terms}
        />
        <CheckboxContents>서비스 이용 약관 동의(필수)</CheckboxContents>
      </AgreeTermsLine>
      <AgreeTermsLine>
        <CheckboxInput
          type="checkbox"
          name="personalInfo"
          onClick={handleAgreement}
          checked={isAgreed.personalInfo}
        />
        <CheckboxContents>개인정보 취급방침 동의(필수)</CheckboxContents>
      </AgreeTermsLine>
      <AgreeTermsLine>
        <CheckboxInput
          type="checkbox"
          name="refund"
          onClick={handleAgreement}
          checked={isAgreed.refund}
        />
        <CheckboxContents>환불규정에 대한 동의(필수)</CheckboxContents>
      </AgreeTermsLine>
    </div>
  );
};

const AgreeTermsContents = styled.ul`
  margin-top: 80px;
  margin-bottom: 15px;
  text-align: center;
`;

const AgreeTermsTotal = styled.li`
  list-style: none;
  font-size: 13px;
  padding-top: 13px;
  padding-bottom: 13px;
  border-bottom: 1px solid lightgray;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AgreeTermsLine = styled.li`
  list-style: none;
  font-size: 13px;
  padding-top: 13px;
  padding-bottom: 13px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckboxInput = styled.input``;

const CheckboxContents = styled.div`
  width: 93%;
`;

export default AgreeCheckBox;
