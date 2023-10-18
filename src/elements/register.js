//  export register;
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { doc } from "firebase/firestore";

 export function register(navigateTo) {

 const container1 = document.createElement('div');
 container1.setAttribute('class', 'container flex');

 const container2 = document.createElement('div');
 container2.setAttribute('class', 'mujeres-page flex');

 const container3 = document.createElement('div');
 container3.setAttribute('class', 'text');

 const titleP1 = document.createElement('h1');
 titleP1.setAttribute('class', 'title1');
 titleP1.textContent = 'MUJER';

 const titleP2 = document.createElement('h2');
 titleP2.setAttribute('class', 'title2');
 titleP2.textContent = '-Space-';

 const slogan = document.createElement('p');
 slogan.setAttribute('class','slogan')
 slogan.textContent = 'Conectadas las Mujeres de todo el mundo';
 

 const imgMujeres = document.createElement('img');
 imgMujeres.setAttribute ('alt','mujer')
 imgMujeres.setAttribute('class','image1')
 imgMujeres.src="img/Mujer -Space_-2.png";


 const links = document.createElement('form');
 links.setAttribute('action', '#');
 links.setAttribute('class', 'allRegister');

 const inputEmail = document.createElement('input');
 inputEmail.setAttribute ('type', 'email')
 inputEmail.setAttribute ('class', 'email2')
 inputEmail.placeholder = 'Registrate con tu Email';
 inputEmail.required ="Registrate con tu Email";
 

 const inputPassword = document.createElement('input');
 inputPassword.setAttribute('type', 'password');
 inputPassword.setAttribute('class', 'password2');

 inputPassword.placeholder = 'Crea tu Password';
 inputPassword.required ="Crea tu Password";
 

 const linkButton = document.createElement ("div");
 linkButton.setAttribute("class", "link")


 const buttonLogin = document.createElement('button');
 buttonLogin.setAttribute ('type', 'submit');
 buttonLogin.setAttribute ('class', 'login');
 buttonLogin.setAttribute ('onclick', 'createUser');
 buttonLogin.textContent = 'Registrarse';
buttonLogin.addEventListener('click', () => {
  buttonLogin.navigateTo('/home');
 });

const span = document.createElement("span");
span.classList.add('span-login');

 

container3.append(titleP1, titleP2, slogan, imgMujeres);
links.append(inputEmail, inputPassword, buttonLogin, span);
container2.append (container3,links);
container1.append(container2);

 console.log(container1);
 return container1;

};


// buttonLogin.addEventListener('click', () => {
//     const email = email2.value;
//     const password = password2.value;
//       createAccountFunction(email, password)
//         .then(() => {
//           navigateTo('/login');
//         })
//         .catch((errorCode) => {
//           errorMessage.style.display = 'block';
//           if (errorCode === 'auth/invalid-email') {
//             errorMessage.append = 'Correo invalido';
//         //   } else if (errorCode === 'auth/weak-password') {
//         //     errorMessage.innerHTML = 'La contraseña requiere mínimo 6 caracteres';
//         //   } else if (errorCode === 'auth/email-already-in-use') {
//         //     errorMessage.innerHTML = 'El correo ingresado ya esta registrado';
//         //   } else if (errorCode === 'auth/missing-password') {
//         //     errorMessage.innerHTML = 'Olvidaste escribir una contraseña';
//         //   }
//         };
//     });
 

//  return container1;
// });

