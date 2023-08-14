import SmallButton, { InputPropType } from './Smallbutton';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('if smallbutton works properly', () => {
  test('if label rendered correctly', () => {
    const Buttonprops: InputPropType = {
      label: 'Button',
      color: 'blue'
    };

    render(<SmallButton {...Buttonprops} />);
    const element = screen.getByTestId('label-id');

    if (element) expect(element).toHaveTextContent('Button');
  });
  test('if color rendered correctly', () => {
    const Buttonprops: InputPropType = {
      label: 'Button',
      color: 'blue'
    };

    render(<SmallButton {...Buttonprops} />);
    const element = screen.getByTestId('label-id');

    if (element) expect(element.getAttribute('class')).toBe('blue-button');
  });
});
