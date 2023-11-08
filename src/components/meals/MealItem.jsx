import React, { useContext } from 'react';
import { styled } from 'styled-components';
import { CartContext } from '../../store/cart-context';
import { MealItemForm } from './MealItemForm';

export const MealItem = ({ id, title, description, price }) => {
  // Получаем функцию onAddMeal из контекста CartContext
  const { onAddMeal } = useContext(CartContext);

  // Функция для добавления блюда в корзину с указанием количества
  const addMealToCartHandler = (amount) => {
    onAddMeal({ title, price, amount, id });
  };

  return (
    <StyledMealItem>
      <div>
        {/* Отображаем название блюда */}
        <MealName>{title}</MealName>
        {/* Отображаем описание блюда */}
        <MealDescription>{description}</MealDescription>
        {/* Отображаем цену блюда с фиксированным количеством десятичных знаков (2) */}
        <MealPrice>{Number(price).toFixed(2)}</MealPrice>
      </div>

      {/* Включаем компонент MealItemForm для управления количеством добавляемого блюда в корзину */}
      <MealItemForm id={id} onAddMeal={addMealToCartHandler} />
    </StyledMealItem>
  );
};

const StyledMealItem = styled.li`
  display: flex;
  border-bottom: 1px solid grey;
  padding: 2% 0;
  justify-content: space-between;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const MealName = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
`;

const MealDescription = styled.p`
  font-weight: 400;
`;

const MealPrice = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  color: #ad5502;
`;
