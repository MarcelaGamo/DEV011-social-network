export function home(navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const button = document.createElement('button');
    const imgMujeres = document.createElement('img');
    imgMujeres.setAttribute("class","image1")
    
    imgMujeres.src="img/Mujer -Space_-2.png";
    
  
    button.textContent = 'entrar';
    button.addEventListener('click', () => {
      navigateTo('/login');
    });
  
    title.textContent = 'Bienvenidas a Mujer -Space-';
  
    section.append(title, button, imgMujeres);
    return section;
  }
  // // se agrego el auth para usabilidad--
  // import { getAuth, onAuthStateChanged } from "firebase/auth";

  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/auth.user
  //     const uid = user.uid;
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });
  