import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Subheader from './subheader';

describe('Subheader component', () => {
  test('renders label correctly', () => {
    const labelProps = {
      label: 'Test Label'
    };

    render(<Subheader {...labelProps} />);

    const labelElement = screen.getByTestId('Test Label');

    expect(labelElement).toBeInTheDocument();
  });

  //   test('if onClick works properly', () => {
  //     const onClick = jest.fn();
  //     const Buttonprops: SubheaderPropType = {
  //       label: 'Button',
  //       onClick
  //     };

  //     render(<Subheader {...Buttonprops} />);

  //     const element = screen.getByTestId('button2-test');

  //     fireEvent.click(element);
  //     expect(onClick).toBeCalled();
  //   });
});
