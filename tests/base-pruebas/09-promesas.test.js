import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Tests on 09-promesas', () => {
  test('getHeroebyIdAsync should return a hero', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });

      done();
    });
  });

  test('getHeroebyIdAsync must return an error if hero doesnt exist', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe('No se pudo encontrar el héroe' + id);
        done();
      });
  });
});
