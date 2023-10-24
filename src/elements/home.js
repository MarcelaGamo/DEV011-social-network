export function home(navigateTo) {
  const section = document.createElement('section');

  const title = document.createElement('h2');
  title.setAttribute('class', 'postitle');
  title.textContent = 'Bienvenida a Mujer Space';

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
  postTitle.setAttribute('placeholder', '¿Qué nos quieres compartir hoy?');

  const postContent = document.createElement('textarea');
  postContent.setAttribute('class', 'post-content');
  postContent.setAttribute('placeholder', 'Cuentanos aquí');

  const postButton = document.createElement('button');
  postButton.setAttribute('class', 'post-button');
  postButton.textContent = 'Publicar';
  postButton.addEventListener('click', () => {
    const title = postTitle.value;
    const content = postContent.value;
    // Aquí puedes implementar la lógica para publicar el post
  });

  // // Icono de Eliminar
  // const deleteIcon = document.createElement('img');
  // deleteIcon.classList.add('delete-icon');
  // deleteIcon.src = '/img/eliminar.png'; 
  // deleteIcon.addEventListener('click', () => {
 
  // });

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
  //   // Lógica para editar el post
  // });

  const postContainerInner = document.createElement('div');
  postContainerInner.setAttribute('class', 'post-container-inner');
  postContainerInner.append( postTitle, postContent, postButton);

  postContainer.append(postContainerInner);

  section.append(title, buttonExit, imgMujeres1, postContainer);
  return section;
}

//hola
