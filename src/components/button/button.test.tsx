import Button, { ButtonPropType } from './Button';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('if button works properly', () => {
  test('if label rendered correctly', () => {
    const Buttonprops: ButtonPropType = {
      label: 'Button'
    };

    render(<Button {...Buttonprops} />);
    const element = screen.getByTestId('button-test');

    expect(element).toHaveTextContent('Button');
  });

  test('if onClick works properly', () => {
    const onClick = jest.fn();
    const Buttonprops: ButtonPropType = {
      label: 'Button',
      onClick
    };

    render(<Button {...Buttonprops} />);

    const element = screen.getByTestId('button-test');

    fireEvent.click(element);
    expect(onClick).toBeCalled();
  });

  test('if snapshot rendered correctly', () => {
    const Buttonprops: ButtonPropType = {
      label: 'Button'
    };

    const element = render(<Button {...Buttonprops} />);

    expect(element).toMatchSnapshot();
  });
});
