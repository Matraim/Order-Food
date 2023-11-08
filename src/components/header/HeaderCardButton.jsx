import React, { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { BasketIcon } from '../../assets';
import { CartContext } from '../../store/cart-context';
import { ModalContext } from '../../store/modal-context';

export const HeaderCardButton = () => {
  // Получаем функцию onOpen из контекста ModalContext
  const { onOpen } = useContext(ModalContext);

  // Получаем список добавленных блюд из контекста CartContext
  const { addedMeals } = useContext(CartContext);

  // Вычисляем общее количество добавленных блюд в корзину
  const addedMealsCount = addedMeals.reduce((acc, meal) => {
    return acc + meal.amount;
  }, 0);

  const [bump, setBump] = useState('');

  useEffect(() => {
    setBump('bump');
    setTimeout(() => {
      setBump('');
    }, 200);
  }, [addedMealsCount]);

  return (
    <StyledButton onClick={onOpen} className={bump}>
      <BasketIcon />
      <span className="bump">Your Cart</span>
      <Badge>{addedMealsCount}</Badge>

    </StyledButton>
  );
};

const Badge = styled('span')`
  background-color: #8a2b06;
  font-weight: 700;
  padding: 4px 20px;
  border-radius: 30px;
  font-size: 20px;
  margin-left: 1rem;
`;

const StyledButton = styled('button')`
  cursor: pointer;
  border: none;
  color: white;
  background-color: #5a1f08;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  &:hover,
  &:active {
    background-color: #461805;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:active,
  &:hover > ${Badge} {
    background-color: #671f03;
    animation: BUMP 300ms ease-out;
  }

  &.bump {
    background-color: #671f03;
    animation: BUMP 300ms ease-out;
  }

  & > svg {
    margin-right: 0.5rem;
  }

  & > .bump {
    font-size: 1rem;
    font-weight: 600;
  }
`;
