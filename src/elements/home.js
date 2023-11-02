
import { addPost, paintRealTime } from '../lib/index.js';

export function home(navigateTo) {
  const section = document.createElement('section');

  const title = document.createElement('h2');
  title.setAttribute('class', 'postitle');
  title.textContent = 'Bienvenida a MUJER SPACE';
  

  const buttonExit = document.createElement('button');
  buttonExit.setAttribute('type', 'submit');
  buttonExit.setAttribute('class', 'buttonexit');
  buttonExit.textContent = 'Salir';
  buttonExit.addEventListener('click', () => {
    navigateTo('/login');
  });

  const imgMujeres1 = document.createElement('img');
  imgMujeres1.setAttribute('alt', 'mujer1');
  imgMujeres1.setAttribute('class', 'image2');
  imgMujeres1.src = 'img/MUJERES1.png';

  const postContainer = document.createElement('div');
  postContainer.setAttribute('class', 'post-container');
  
  const postTitle = document.createElement('input');
  postTitle.setAttribute('type', 'text');
  postTitle.setAttribute('class', 'post-title');
  postTitle.setAttribute('id', 'postTitle');
  postTitle.setAttribute('placeholder', '¿Qué nos quieres compartir hoy?');

  const postButton = document.createElement('button');
  postButton.setAttribute('class', 'post-button');
  postButton.textContent = 'Publicar';
  postButton.addEventListener('click', () => {
    const comment = postTitle.value;
    addPost(comment);
    postTitle.value= '';
  });

  const publicationPost = document.createElement('article');
  publicationPost.setAttribute('class', 'post-section');
  paintRealTime((querySnapshot) => {
    publicationPost.textContent = '';
    querySnapshot.forEach((doc, home) => {
      const post = document.createElement('div');
      post.classList.add('post-container-in');
      
      post.innerHTML = `
      <div class="post-container1">
        <p class="post-title">${doc.data().comment}</p>
        <img class="delete" src="/img/eliminar.png" alt="Eliminar">
        <img class="like-icon" src="/img/like.png" alt="Like">
        <button class="post-edit">Editar</button>
      </div>
      `;
      publicationPost.append(post);
    });
  });

  //Icono de Eliminar
  const deleteIcon = document.createElement('img');
  deleteIcon.classList.add('delete-icon');
  deleteIcon.src = '/img/eliminar.png';
  deleteIcon.addEventListener('click', () => {
    //Lógica para eliminar la publicación
  });

  // // Icono de Like
  // const likeIcon = document.createElement('img');
  // likeIcon.classList.add('like-icon');
  // likeIcon.src = '/img/like.png';
  // likeIcon.addEventListener('click', () => {
  // });

  // // Botón de Editar
  // const editButton = document.createElement('button');
  // editButton.setAttribute('class', 'post-edit');
  // editButton.textContent = 'Editar';
  // editButton.addEventListener('click', () => {
  //   // Lógica para editar la publicación
  // });

  const postContainerInner = document.createElement('div');
  postContainerInner.setAttribute('class', 'post-container-inner');
  postContainerInner.append(postTitle, postButton);

  postContainer.append(postContainerInner);

  section.append(title, buttonExit, imgMujeres1, postContainer, publicationPost);

  return section;
}
=======
// export function principal(navigateTo) {
//   displayAllPosts();
//   const divPrincipal = document.createElement('div');

//   const headerPrincipal = document.createElement('header');
//   headerPrincipal.className = 'headerPrincipal';

//   const divSloganUser = document.createElement('div');
//   divSloganUser.className = 'divSloganUser';

//   const sloganBon = document.createElement('h1');
//   sloganBon.className = 'sloganBon';
//   sloganBon.textContent = 'Consiente a tu familia';

//   const user = auth.currentUser;
//   const userName = user.displayName;

//   const nameUser = document.createElement('h2');
//   nameUser.className = 'nameUser';
//   nameUser.textContent = userName;

//   const logoBon = document.createElement('img');
//   logoBon.className = 'logoBonPrincipal';

//   const mainPrincipal = document.createElement('main');
//   mainPrincipal.className = 'mainPrincipal';

//   const recetaUser = document.createElement('input');
//   recetaUser.className = 'recetaUser';
//   recetaUser.setAttribute('placeholder', `¿Cuál es tu receta, ${userName}?`);

//   const textAllPostUsers = document.createElement('p');
//   textAllPostUsers.textContent = ('Lo que otros han compartido:');
//   textAllPostUsers.className = 'textAllPostUsers';

//   const sectionAllPostUsers = document.createElement('section');
//   sectionAllPostUsers.className = 'sectionAllPostUsers';

//   const menu = document.createElement('nav');
//   menu.className = 'menuNav';
//   const divMenu = document.createElement('div');
//   divMenu.className = 'divMenu';

//   const sectionRecetaIcon = document.createElement('section');
//   sectionRecetaIcon.className = 'sectionRecetaIcon';
//   const recetaIcono = document.createElement('img');
//   recetaIcono.className = 'recetaIcono';
//   recetaIcono.src = iconoReceta;
//   recetaIcono.setAttribute('width', '30');
//   recetaIcono.setAttribute('hide', '30');
//   const misRecetasText = document.createElement('p');
//   misRecetasText.textContent = 'Mis recetas';
//   misRecetasText.className = 'misRecetasText';

//   const sectionSingOutIcon = document.createElement('section');
//   sectionSingOutIcon.className = 'sectionSingOutIcon';
//   const singOutIcono = document.createElement('img');
//   singOutIcono.className = 'singOut';
//   singOutIcono.src = iconoSingOut;
//   singOutIcono.setAttribute('width', '30');
//   singOutIcono.setAttribute('hide', '30');
//   const singOutText = document.createElement('p');
//   singOutText.textContent = 'Cerrar sesión';
//   singOutText.className = 'singOutText';

//   singOutIcono.addEventListener('click', () => {
//     signOutSession()
//       .then(() => {
//         navigateTo('/');
//       })
//       .catch((error) => {
//         throw error;
//       });
//   });
// }

