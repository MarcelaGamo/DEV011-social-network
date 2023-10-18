//  export register;

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

 const inputEmail = document.createElement('input');
 inputEmail.setAttribute ('type', 'email')
 inputEmail.placeholder = 'Email';
 inputEmail.required ="email";
 

 const inputPassword = document.createElement('input');
 inputPassword.setAttribute('type', 'password');
 inputPassword.placeholder = 'Password';
 inputPassword.required ="password";
 

 const linkButton = document.createElement ("div");
 linkButton.setAttribute("class", "link")


 const buttonLogin = document.createElement('button');
 buttonLogin.setAttribute ('type', 'submit');
 buttonLogin.setAttribute ('class', 'login');
 buttonLogin.textContent = 'Crear Cuenta';

const span = document.createElement("span");
span.classList.add('span-login');

 

container3.append(titleP1, titleP2, slogan, imgMujeres);
links.append(inputEmail, inputPassword, buttonLogin, span);
container2.append (container3,links);
container1.append(container2);

 console.log(container1);
 return container1;

};




