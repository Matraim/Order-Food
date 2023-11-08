import React, { useContext, useState } from 'react';
import { styled } from 'styled-components';
import { PlusIcon } from '../../assets';
import { CartContext } from '../../store/cart-context';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';

export const MealItemForm = ({ id, onAddMeal }) => {
  // Устанавливаем начальное значение количества как 1
  const [enteredAmount, setEnteredAmount] = useState(1);

  // Получаем список добавленных блюд из контекста CartContext
  const { addedMeals } = useContext(CartContext);

  // Функция для обработки изменения количества вводимых блюд
  const amountChangeHandler = (e) => {
    // Преобразуем введенное значение в число и обновляем состояние enteredAmount
    setEnteredAmount(Number(e.target.value));
  };

  // Функция для обработки отправки формы (добавления блюда в корзину)
  const submitHandler = (e) => {
    e.preventDefault();
    // Вызываем функцию onAddMeal и передаем в нее введенное количество блюд
    onAddMeal(enteredAmount);
  };

  return (
    <StyledForm>
      {/* Ввод для выбора количества блюд */}
      <Input id={id} onChange={amountChangeHandler} value={enteredAmount} />
      {/* Кнопка "Add" для добавления блюда в корзину */}
      <Button
        onClick={submitHandler}
        size="small"
        // Кнопка будет недоступной, если блюдо уже добавлено в корзину (количество больше 0)
        disabled={
          addedMeals.filter((meal) => meal.id === id && meal.amount).length !==
          0
        }
        weight={'medium'}
      >
        <PlusIcon /> Add
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-end;
`;
