import React, { useContext } from 'react';
import { styled } from 'styled-components';
import { CartContext } from '../../store/cart-context';
import { Button } from '../UI/Button';
import { Modal } from '../UI/Modal';
import { CartItem } from './CartItem';
import { TotalAmount } from './TotalAmount';

export const Cart = ({ onClose }) => {
  // Получаем данные о добавленных блюдах из контекста CartContext
  const { addedMeals } = useContext(CartContext);

  return (
    <Modal onClose={onClose}>
      <Content>
        <CartList>
          {addedMeals.map((meal) => (
            <CartItem
              id={meal.id}
              title={meal.title}
              amount={meal.amount}
              price={meal.price}
              key={meal.id}
            />
          ))}
        </CartList>
        <TotalAmount
          totalAmount={addedMeals.reduce((prevPrice, carrMeal) => {
            // Рассчитываем общую сумму заказа путем умножения цены на количество каждого блюда и их суммирования
            return prevPrice + carrMeal.price * carrMeal.amount;
          }, 0)}
        />
        <ActionsContainer>
          <Button onClick={onClose}>Close</Button>

          <Button
            onClick={() => {
              alert('SUCCESSFULLY ORDERED!');
              onClose();
            }}
            disabled={!addedMeals.filter((meal) => meal.amount).length}
            variant="contained"
          >
            Order
          </Button>
        </ActionsContainer>
      </Content>
    </Modal>
  );
};

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 24px;
`;

const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  max-height: 360px;
  overflow-y: scroll;
`;

const Content = styled.div`
  padding: 1.5rem 1rem;
`;
