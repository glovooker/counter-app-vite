import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Tests on 02-template-string', () => {
  test('getSaludo must return "Hola Fernando"', () => {
    const name = 'Fernando';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
