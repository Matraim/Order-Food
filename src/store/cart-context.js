import React, { useReducer } from 'react';

export const CartContext = React.createContext({
  addedMeals: [],
  totalAmount: 0,
  onAddMeal: () => {},
});

const reducer = (prevState, { type, payload }) => {
  switch (type) {
    case 'ADD_MEAL':
      // Добавляем новое блюдо в корзину
      return { ...prevState, addedMeals: [...prevState.addedMeals, payload] };
    case 'REPLACE_MEALS':
      // Заменяем список блюд в корзине на новый список
      return { ...prevState, addedMeals: payload };
    default:
      return prevState;
  }
};

const initialState = {
  addedMeals: [],
};

export const CartProvider = ({ children }) => {
  // Используем useReducer для управления состоянием корзины
  const [{ addedMeals }, dispatch] = useReducer(reducer, initialState);

  // Функция для добавления или обновления блюда в корзине
  const addNewHandler = (newMeal, variant) => {
    const currentIndex = addedMeals.findIndex((m) => m.id === newMeal.id);
    if (currentIndex === -1) {
      // Если блюдо не найдено в корзине, добавляем его
      return dispatch({ type: 'ADD_MEAL', payload: newMeal });
    }

    // Если блюдо уже есть в корзине, обновляем количество
    const newMeals = addedMeals.map((meal) => {
      if (meal.id === newMeal.id) {
        return {
          ...meal,
          amount:
            variant === 'plus'
              ? meal.amount + newMeal.amount
              : meal.amount - newMeal.amount,
        };
      }

      return meal;
    });

    // Фильтруем блюда с нулевым количеством и заменяем текущий список
    const filteredMeals = newMeals.filter((meal) => meal.amount > 0);

    dispatch({ type: 'REPLACE_MEALS', payload: filteredMeals });
  };

  return (
    <CartContext.Provider
      value={{
        addedMeals,
        onAddMeal: addNewHandler,
        totalAmount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
