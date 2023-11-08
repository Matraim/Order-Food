import React, { useState } from 'react';

export const ModalContext = React.createContext({
  isModalOpen: false,
  onClose: () => {},
  onOpen: () => {},
});

export const ModalProvider = ({ children }) => {
  // Используем состояние, чтобы отслеживать состояние модального окна (открыто или закрыто)
  const [isOpen, setIsOpen] = useState(false);

  // Функция для открытия модального окна
  const openModalHandler = () => setIsOpen(true);

  // Функция для закрытия модального окна
  const closeModalHandler = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen: isOpen,
        onClose: closeModalHandler,
        onOpen: openModalHandler,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
