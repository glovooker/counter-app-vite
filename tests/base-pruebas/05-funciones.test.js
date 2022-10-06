import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Tests on 05-funciones', () => {
  test('getUser should return an object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test('getUsuarioActivo should return an object', () => {
    const name = 'Franklin';
    const testActiveUser = {
      uid: 'ABC567',
      username: name,
    };

    const activeUser = getUsuarioActivo(name);

    expect(testActiveUser).toEqual(activeUser);
  });
});
