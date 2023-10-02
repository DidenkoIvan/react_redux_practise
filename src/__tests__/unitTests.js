import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalComponent from '../../src/components/Modal/Modal';  
import ButtonComponent from '../../src/components/Button/Button';

describe('ButtonComponent', () => {
    it('повинен відображати текст кнопки', () => {
      const buttonText = 'Текст кнопки';
      const { getByText } = render(<Button text={buttonText} />);
      expect(getByText(buttonText)).toBeInTheDocument();
    });
  
    it('повинен викликати функцію обробника onClick', () => {
      const handleClick = jest.fn();
      const { getByText } = render(<ButtonComponent onClick={handleClick} />);
      const button = getByText('Кнопка');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalled();
    });
  });
  
  describe('ModalComponent', () => {
    it('повинен бути прихованим за замовчуванням', () => {
      const { queryByText } = render(<ModalComponent />);
      expect(queryByText('Модальне вікно')).toBeNull();
    });
  
    it('повинен відображати модальне вікно після кліку на кнопку', () => {
      const { getByText, queryByText } = render(
        <>
          <ButtonComponent id="showModalButton" text="Показати модальне вікно" />
          <ModalComponent />
        </>
      );
      const showModalButton = getByText('Показати модальне вікно');
      fireEvent.click(showModalButton);
      expect(queryByText('Модальне вікно')).toBeInTheDocument();
    });
  
    it('повинен приховувати модальне вікно після кліку на кнопку закриття', () => {
      const { getByText, queryByText } = render(
        <>
          <ButtonComponent id="showModalButton" text="Показати модальне вікно" />
          <ModalComponent />
        </>
      );
      const showModalButton = getByText('Показати модальне вікно');
      fireEvent.click(showModalButton);
  
      const closeButton = getByText('Закрити');
      fireEvent.click(closeButton);
      expect(queryByText('Модальне вікно')).toBeNull();
    });
  });