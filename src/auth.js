import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const NewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Registro exitoso");
      return user // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      if (errorCode === 'auth/invalid-email') {
        alert('Correo invalido');
      } else if (errorCode === 'auth/email-already-in-use') {
        alert('Correo registrado');
      } else if (errorCode === 'auth/weak-password') {
        alert('La contraseña debe ser minímo de 6 caracteres');
      } else {
        alert("Ocurrió un error ");
      }
      // ..
    });
}
export const authGoogle = () => {
  return signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    return user
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}



export const loginEmail = (email, password) => {
return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user
     // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/invalid-email') {
      alert("Correo invalido");
    } else if (errorCode === 'auth/invalid-login-credentials') {
      alert("Correo o contraseña incorrecta");
    } else if (errorCode === 'auth/missing-password') {
      alert("Ingresar contraseña");
    } else {
        alert("Ocurrió un error: " + errorMessage);
    }
  });
}