// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

import { NewUser, auth } from '../src/auth.js';
import { register } from '../src/elements/register.js';
// import * as index from '../src/elements/register.js';

jest.setTimeout(30000); // 10 segundos

describe('NewUser', () => {
  test('is a function', () => {
    expect(typeof NewUser).toBe('function');
  });
});

describe('button login', () => {
  test('testing button NewUser', async () => {
    const DOM = document.createElement('div');
    DOM.append(register());
    const email = DOM.querySelector('#emailR');
    const password = DOM.querySelector('#passwordR');
    const buttonLogin = DOM.querySelector('#buttonLogin');
    email.value = 'prueba@prueba.com';
    password.value = '123456';
    const spyNewUser = jest.spyOn(auth, 'NewUser').mockResolvedValue({
      email: 'prueba@gmail.com',
      password: '123456',
    });
    await buttonLogin.click();
    expect(spyNewUser).toHaveBeenCalledTimes(1);
    spyNewUser.mockRestore();
  });
});
