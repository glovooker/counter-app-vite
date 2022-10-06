import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests on <FirstApp />', () => {
  const title = 'Hola, Soy Goku';
  const subTitle = 'Soy un subtítulo';

  test('Must match snapshot', () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('Must show title "Hola, Soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug();
  });

  test('Must show title in h1', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('Must show subtitle sent through props', () => {
    render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    );

    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
