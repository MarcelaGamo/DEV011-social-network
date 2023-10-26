// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
import { NewUser, auth } from '../src/auth.js';

describe('NewUser', () => {
  test('is a function', () => {
    expect(typeof NewUser).toBe('function');
  });
});

describe('button login', () => {
  test('testing button NewUser', () => {
    jest.spyOn(auth, NewUser).mockImplementation(() => Promise.resolve({ email: 'hola@hola.com', password: '123456' }));
    const DOM = document.createElement('div');
    DOM.append(NewUser());
    const email = DOM.querySelector('#emailR');
    const password = DOM.querySelector('#passwordR');
    email.value = 'prueba@prueba.com';
    password.value = '123456';
    const buttonLogin = DOM.querySelector('#buttonLogin');
    buttonLogin.click();
    expect(auth.NewUser).toHaveBeenCalledTimes(1);
  });
});
