import React from 'react';
import { MealItem } from './MealItem';
import { styled } from 'styled-components';

export const Meals = ({ meals }) => {
  return (
    <StyledMeals>
      {/* Проходимся по списку блюд и создаем компонент MealItem для каждого из них */}
      {meals.map(({ id, title, description, price }) => (
        <MealItem
          key={id}
          id={id}
          title={title}
          description={description}
          price={price}
        />
      ))}
    </StyledMeals>
  );
};

const StyledMeals = styled.ul`
  background-color: #ffffff;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  list-style-type: none;
  padding: 3%;
  margin-top: 3%;
`;
