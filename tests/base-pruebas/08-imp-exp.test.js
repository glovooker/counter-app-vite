import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

import heroes from '../../src/data/heroes';

describe('Tests on 08-imp-exp', () => {
  test('getHeroeById must return a hero by ID', () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    });
  });

  test('getHeroeById must return undefined if ID doesnt exist', () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner must return 3 DC heroes', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);

    expect(heroes).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC',
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC',
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC',
      },
    ]);

    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  test('getHeroesByOwner must return 2 Marvel heroes', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
