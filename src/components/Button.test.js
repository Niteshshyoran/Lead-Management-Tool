// src/components/Button.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders the button with correct label', () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
  const onClickMock = jest.fn();
  render(<Button label="Click Me" onClick={onClickMock} />);
  fireEvent.click(screen.getByText('Click Me'));
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
