import { useContext } from 'react';
import { Cart } from './components/cart/Cart';
import { Header } from './components/header/Header';
import { MealsSummary } from './components/meals-summary/MealsSummary';
import { Meals } from './components/meals/Meals';
import { ModalContext } from './store/modal-context';

// Массив блюдa
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function App() {
  const { isModalOpen, onClose } = useContext(ModalContext);

  return (
    <div>
      <Header />
      <MealsSummary />
      <Meals meals={DUMMY_MEALS} />
      {isModalOpen && <Cart onClose={onClose} />}
    </div>
  );
}

export default App;
