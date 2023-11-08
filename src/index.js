import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { CartProvider } from './store/cart-context'; // Провайдер для корзины
import { ModalProvider } from './store/modal-context'; // Провайдер для модального окна

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      {/* Предоставляет контекст для управления состоянием корзины */}
      <ModalProvider>
        {/* Предоставляет контекст для управления состоянием модального окна */}
        <App />
        {/* Основной компонент приложения */}
      </ModalProvider>
    </CartProvider>
  </React.StrictMode>
);
