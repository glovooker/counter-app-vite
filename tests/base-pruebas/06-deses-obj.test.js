import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Tests on 06-deses-obj', () => {
  test('usContext should return an object', () => {
    const clave = 'ABC123';
    const edad = 33;

    const testContext = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const context = usContext({ clave, edad });

    expect(testContext).toEqual(context);
  });
});
