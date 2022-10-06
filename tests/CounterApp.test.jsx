import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Tests on <CounterApp />', () => {
  const value = 100;

  test('Must match snapshot', () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test('Initial value should be 100', () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test('Must increase with button +1', () => {
    render(<CounterApp value={10} />);
    fireEvent.click(screen.getByText('+1'));

    expect(screen.getByText('11')).toBeTruthy();
  });

  test('Must decrease with button -1', () => {
    render(<CounterApp value={10} />);
    fireEvent.click(screen.getByText('-1'));

    expect(screen.getByText('9')).toBeTruthy();
  });

  test('Must reset with button Reset', () => {
    render(<CounterApp value={10} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));

    // fireEvent.click(screen.getByText('Reset'));

    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect(screen.getByText('10')).toBeTruthy();
  });
});
