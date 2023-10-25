// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
import { NewUser } from '../src/auth.js';

describe('NewUser', () => {
  test('is a function', () => {
    expect(typeof NewUser).toBe('function');
  });
});
