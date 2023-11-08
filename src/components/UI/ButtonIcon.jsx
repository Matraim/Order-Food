import React from 'react';
import { css, styled } from 'styled-components';

export const ButtonIcon = ({ Icon, disabled, onClick }) => {
  return (
    <StyledIcon disabled={disabled} onClick={onClick}>
      {/* Отображаем переданную иконку */}
      <Icon />
    </StyledIcon>
  );
};

const BACKGROUND_VARIANTS = {
  primary: 'transparent',
  hover: '#8A2B06',
  active: '#993108',
};

const getBackgroundColor = () => {
  return css`
    background-color: ${BACKGROUND_VARIANTS.primary};

    &:hover {
      background-color: ${BACKGROUND_VARIANTS.hover};
    }

    &:active {
      background-color: ${BACKGROUND_VARIANTS.active};
    }

    &:disabled {
      background-color: ${BACKGROUND_VARIANTS.primary};
    }
  `;
};

const COLOR_VARIANTS = {
  primary: '#8A2B06',
  hover: '#FFFFFF',
  disabled: '#CAC6C4',
};

const getColor = () => {
  return css`
    color: ${COLOR_VARIANTS.primary};

    & path {
      stroke: ${COLOR_VARIANTS.primary};
    }

    &:hover,
    &:active {
      color: ${COLOR_VARIANTS.hover};
      & path {
        stroke: ${COLOR_VARIANTS.hover};
      }
    }
  `;
};

const BORDER_COLOR_VARIANTS = {
  hoverOrActive: 'none',
  primary: '1px solid #8A2B06',
};

const getBorder = () => {
  return css`
    border: ${BORDER_COLOR_VARIANTS.primary};

    &:hover,
    &:active {
      border: ${BORDER_COLOR_VARIANTS.hoverOrActive};
    }

    &:disabled {
      border: ${BORDER_COLOR_VARIANTS.disabled};
    }
  `;
};

const StyledIcon = styled.button`
  ${getBackgroundColor};
  ${getColor};
  border-radius: 6px;
  width: 48px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getBorder};
  cursor: pointer;
`;
