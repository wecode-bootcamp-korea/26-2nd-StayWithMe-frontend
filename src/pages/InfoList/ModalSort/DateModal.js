import 'react-dates/initialize';
import React, { useState } from 'react';
import styled from 'styled-components';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import SortBoxButton from '../SortBox/SortBoxButton';

const DateModal = ({ modalSort, closeModal }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState('startDate');

  const convertAllDate = () => {
    const convertStartDate = startDate.format('YYYY-MM-DD');
    const convertEndDate = endDate.format('YYYY-MM-DD');

    return { convertStartDate, convertEndDate };
  };

  return (
    <Container>
      <DayPickerRangeController
        startDate={startDate}
        endDate={endDate}
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={focusedInput || 'startDate'}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        noBorder={true}
      />
      <SortBoxButton
        modalSort={modalSort}
        closeModal={closeModal}
        optionValue={startDate && endDate && convertAllDate()}
        buttonSort="dropdownButton"
      >
        적용하기
      </SortBoxButton>
    </Container>
  );
};

const Container = styled.div`
  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }
  .CalendarDay__default {
    border: none;
    vertical-align: middle;
    outline: none;
  }

  .CalendarDay__default:hover {
    background: transparent;
    background-color: #dee2e6;
    border: none;
    color: black;
  }

  .CalendarDay__selected_span {
    background-color: #f7f7f7;
    color: black;
  }

  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    color: black;
    background-color: #f7f7f7;
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: black;
    border-radius: 100%;
    border: none;
    color: white;
  }

  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: white;
    border: none;
    color: #d2d2d2;
    box-shadow: none;
    text-decoration: line-through;
  }

  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    color: black;
    background-color: #f7f7f7;
    border: none;
  }

  .CalendarMonth_caption {
    margin-bottom: 10px;
  }
`;

export default DateModal;
