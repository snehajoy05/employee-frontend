import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input, { InputPropType } from './Input';
describe('Input component', () => {
  test('renders label correctly', () => {
    const labelProps: InputPropType = {
      label: 'Test Label',
      value: '',
      onChange: jest.fn(),
      placeholder: 'Enter value'
    };

    render(<Input {...labelProps} />);

    const labelElement = screen.getByTestId('Test Label');

    expect(labelElement).toHaveTextContent('Test Label');
  });

  test('calls onChange function correctly', () => {
    const onChangeMock = jest.fn();

    const inputProps : InputPropType = {
      label: 'Test Label',
      value: '',
      onChange: onChangeMock,
      placeholder: 'Enter value'
    };

    render(<Input {...inputProps} />);

    const inputElement = screen.getByPlaceholderText('Enter value');

    fireEvent.change(inputElement, { target: { value: 'Test Value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  test('renders input with correct details', () => {
    const inputProps: InputPropType = {
      label: 'Test Label',
      value: 'Test Value',
      onChange: jest.fn(),
      type: 'text',
      placeholder: 'Enter value'
    };

    render(<Input {...inputProps} />);

    const inputElement = screen.getByPlaceholderText('Enter value');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveValue('Test Value');
  });
});
