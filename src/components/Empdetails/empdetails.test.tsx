import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Empcontent from './empdetails';

describe('Empcontent component', () => {
  test('renders label correctly', () => {
    const labelProps = {
      label: 'Test Label'
    };

    render(<Empcontent {...labelProps} />);

    const labelElement = screen.getByTestId('label-test');

    expect(labelElement).toHaveTextContent('Test Label');
  });

  test('renders value correctly', () => {
    const valueProps = {
      label: 'Test Label',
      value: 'Test Value'
    };

    render(<Empcontent {...valueProps} />);

    const valueElement = screen.getByText('Test Value');

    expect(valueElement).toBeInTheDocument();
  });
});
