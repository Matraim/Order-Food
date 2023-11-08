import React from 'react';
import { css, styled } from 'styled-components';

export const Button = ({
  children,
  onClick,
  disabled,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  weight = 'small',
  ...restProps
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      size={size}
      {...restProps}
      weight={weight}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

const COLOR_VARIANTS = {
  primary: '#fff',
  outlined: {
    default: '#8A2B06',
    disabled: '#CAC6C4',
  },
};

const PADDING_VARIANTS = {
  primary: '10px 24px 10px 16px',
  outlinedOrContained: '10px 20px',
};

const OUTLINED_BORDER_VARIANTS = {
  default: '1px solid #8A2B06',
  disabled: '1px solid #CAC6C4',
};

const BACKGROUND_VARIANTS = {
  primary: {
    default: '#8A2B06',
    hover: '#7E2A0A',
    active: '#993108',
    disabled: '#CAC6C4',
  },
  outlined: {
    default: 'transparent',
    hover: '#8A2B06',
    active: '#993108',
    disabled: 'transparent',
  },
  contained: {
    default: '#8A2B06',
    hover: '#7E2A0A',
    active: '#993108',
    disabled: '#CAC6C4',
  },
};

const BUTTON_SIZES = {
  small: '0.875rem',
  medium: '1rem',
};

const BUTTON_WEIGHTS = {
  medium: 700,
  small: 500,
};

const getColor = (props) => {
  let color = props.variant;

  if (color === 'contained') {
    color = 'primary';
  }

  const currentVariant = COLOR_VARIANTS[color];

  return color === 'primary'
    ? css`
        color: ${currentVariant};
        & path {
          stroke: currentColor;
        }
      `
    : css`
        color: ${currentVariant.default};

        &:active:not(:disabled),
        &:hover:not(:disabled) {
          color: ${COLOR_VARIANTS.primary};
          & path {
            stroke: ${COLOR_VARIANTS.primary};
          }
        }
      `;
};

const getBackgroundColor = (props) => {
  const currentVariant = BACKGROUND_VARIANTS[props.variant];

  return css`
    background-color: ${currentVariant.default};

    &:hover:not(:disabled) {
      background-color: ${currentVariant.hover};
    }

    &:active:not(:disabled) {
      background-color: ${currentVariant.active};
    }

    &:disabled {
      background-color: ${currentVariant.disabled};
    }
  `;
};

const getPadding = (props) => {
  return PADDING_VARIANTS[
    props.variant !== 'primary' ? 'outlinedOrContained' : 'primary'
  ];
};

const getBorder = (props) => {
  return OUTLINED_BORDER_VARIANTS[props.border] || 'none';
};

const getWeight = (props) => {
  return BUTTON_WEIGHTS[props.weight];
};

const getSize = (props) => {
  return BUTTON_SIZES[props.size];
};

const StyledButton = styled.button`
  ${getColor};
  font-size: ${getSize};
  ${getBackgroundColor}
  border-radius: 20px;
  padding: ${getPadding};
  border: ${getBorder};
  max-width: 200px;
  font-weight: ${getWeight};
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;
