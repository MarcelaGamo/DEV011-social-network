import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,

} from 'firebase/auth';
import { app } from './firebase';

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const NewUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

// //Creación cuenta y contraseña-----

const auth = getAuth();

export const newUser =(email, password)
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  // Signed in
    console.log('ver: ', userCredential);
    navigateTo('/login');
    const user = userCredential.user;
    // alert('Registro exitoso');
    return user; // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    console.log(error);
    if (errorCode === 'auth/invalid-email') {
    // alert('Correo invalido');
    } else if (errorCode === 'auth/email-already-in-use') {
    // alert('Correo registrado');
    } else if (errorCode === 'auth/weak-password') {
    // alert('La contraseña debe ser minímo de 6 caracteres');
    } else {
    // alert(`Ocurrió un error:  ${errorMessage}`);
    }

  });

export const authGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    return user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.customData.email;
    console.log(email);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
    // ...
  });

export const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    return user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    if (errorCode === 'auth/invalid-email') {
      // alert('Correo invalido');
    } else if (errorCode === 'auth/invalid-login-credentials') {
      // alert('Correo o contraseña incorrecta');
    } else if (errorCode === 'auth/missing-password') {
      // alert('Ingresar contraseña');
    } else {
      // alert(`Ocurrió un error:  ${errorMessage}`);
    }

  });


  // Registro para ingresar------

  export const loginFunction = (email,password) => new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('resgitrada con exito')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error al ingresar el usuario:", errorCode, errorMessage);
        
        const errorSpan = document.querySelector(".span-login");
        if(errorCode === 'auth/invalid-email') {
          errorSpan.innerHTML = 'Correo invalido';
        } else if(errorCode === 'auth/invalid-login-credentials') {
          errorSpan.innerHTML = 'Datos incorrectos, revisa tu correo y contraseña';
        } else if(errorCode === 'auth/user-disabled') {
          errorSpan.innerHTML ='Tu cuenta se encuentra deshabilitada';
        }
      });
    })
