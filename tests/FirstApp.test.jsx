import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests on <FirstApp />', () => {
  //   test('Must match snapshot', () => {
  //     const title = 'Hola, Soy Goku';
  //     const { container } = render(<FirstApp title={title} />);

  //     expect(container).toMatchSnapshot();
  //   });

  test('Must show title in h1', () => {
    const title = 'Hola, Soy Goku';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByTestId('test-title').innerHTML).toBe(title);
  });

  test('Must show subtitle sent through props', () => {
    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtítulo';
    const { getAllByText } = render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    );

    expect(getAllByText(subTitle).length).toBe(2);
  });
});
