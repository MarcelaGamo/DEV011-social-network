import { getAuth, createUserWithEmailAndPassword , sendSignInLinkToEmail, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,  } from "firebase/auth";


// //Creación cuenta y contraseña-----

const auth = getAuth();

export const createUserWithEmailAndPassword =(email, password)
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("ud se ha registrado", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log ("error al crear usuario", errorCode, errorMessage)
    
  });



  //------ verificacion-------
// export const sendSignInLinkToEmail =(email)
// sendSignInLinkToEmail(auth, email, actionCodeSettings)
//   .then(() => {
//     // The link was successfully sent. Inform the user.
//     // Save the email locally so you don't need to ask the user for it again
//     // if they open the link on the same device.
//     window.localStorage.setItem('emailForSignIn', email);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ...
//   });


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









// //require---------
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');


// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());


// //-----Dirección de correo electrónico y contraseña-----
// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
//   });


// // ---- Proveedores de OAuth ------
//   ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       // List of OAuth providers supported.
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       firebase.auth.GithubAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
//   });