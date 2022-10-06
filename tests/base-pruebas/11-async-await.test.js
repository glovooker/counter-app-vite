import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Tests on 11-async-await', () => {
  test('getImagen must return an error if theres no API key', async () => {
    const resp = await getImagen();

    expect(resp).toBe('Image not found!');
  });
});
