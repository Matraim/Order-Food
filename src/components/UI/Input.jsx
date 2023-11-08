import React from 'react';
import { styled } from 'styled-components';

export const Input = ({ id }) => {
  return (
    <StyledLabel htmlFor={id}>
      {/* Отображаем текст "Amount" */}
      Amount
      {/* Отображаем поле ввода с атрибутами, такими как placeholder, тип (number) и ограничения (минимальное и максимальное значение) */}
      <StyledInput placeholder="1" id={id} type="number" min={1} max={5} />
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  font-size: 1.124rem;
  font-weight: 600;
  display: flex;
  gap: 20px;
  width: 110%;
`;

const StyledInput = styled.input`
  padding: 5%;
  outline: none;
  border-radius: 6px;
  border: 1px solid #d6d6d6;

  &:focus {
    outline: 1px solid #d6d6d6;
  }

  &::placeholder {
    color: black;
  }
`;
