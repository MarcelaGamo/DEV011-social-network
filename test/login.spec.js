/**
 * @jest-environment jsdom
 */

// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
// import { jest } from '@jest/globals';
import {
  authGoogle, loginEmail,
} from '../src/auth.js';
import { register } from '../src/elements/register.js';
import * as index from '../src/elements/register.js';
// import { register } from '../src/elements/register.js';

describe('authGoogle', () => {
  test('is a function', () => {
    expect(typeof authGoogle).toBe('function');
  });
});

test('have a button', () => {
  const DOM = document.createElement('div');
  DOM.append(loginEmail());
  const haveAButton = DOM.querySelector('#buttonLogin');
  expect(haveAButton).not.toBe(undefined);
});

// describe('button login', (done) => {
//   test('testing button NewUser', () => {
//     jest.spyOn(auth, NewUser).mockImplementation(() => Promise.resolve({}));
//     const DOM = document.createElement('div');
//     DOM.append(NewUser());
//     const buttonLogin = DOM.querySelector('#buttonLogin');
//     const navigateTo = jest.fn();
//     DOM.append(NewUser(navigateTo));
//     const email = DOM.querySelector('#emailR');
//     const password = DOM.querySelector('#passwordR');
//     email.value = 'prueba@prueba.com';
//     password.value = '123456';
//     buttonLogin.click();
//     setTimeout(() => {
//       expect(navigateTo).toHaveBeenLastCalledWith('/login');
//       done();
//     });
//   });
// });

// jest.mock('firebase/auth', () => ({
//   createUserWithEmailAndPassword: jest.fn(),
// }));

// describe('NewUser', () => {
//   it('registro exitoso', async () => {
//     realCreateUserWithEmailAndPassword.mockResolvedValue({
//       user: {

//       },
//     });
//     const user = await NewUser('test@test.com', '123456');
//     expect(realCreateUserWithEmailAndPassword).toHaveBeenCalledWith();
//     expect(user).toHaveProperty('user');
//   });
// });
describe('button login', () => {
  test('testing button NewUser', () => {
    const DOM = document.createElement('div');
    DOM.append(register());
    const email = DOM.querySelector('#emailR');
    const password = DOM.querySelector('#passwordR');
    const buttonLogin = DOM.querySelector('#buttonLogin');
    email.value = 'prueba@prueba.com';
    password.value = '123456';
    // const index = require('../src/elements/register.js');
    let spyNewUser;
    beforeAll(() => {
      spyNewUser = jest.spyOn(index, 'NewUser').mockResolvedValue({
        email: 'prueba@prueba.com',
        password: '123456',
      });
    });
    afterAll(() => {
      spyNewUser.mockRestore();
    });
    buttonLogin.click();
    // expect(spyNewUser).toHaveBeenCalled();
    expect(spyNewUser).toHaveBeenCalledWith('prueba@prueba.com', '123456');
  });
});
