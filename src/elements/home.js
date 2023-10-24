export function home(navigateTo) {
  // const header1=documnet.createElement ("header")
  const section = document.createElement('section');
    const title = document.createElement('h2');
    const buttonExit = document.createElement('button');
    buttonExit.textContent = 'Salir';
    buttonExit.addEventListener('click', () => {
      navigateTo('/login');
    });
    title.textContent = 'Bienvenida a Mujer Space';
    const imgMujeres1 = document.createElement('img');
    imgMujeres1.setAttribute("class","image2")
    imgMujeres1.src="img/MUJERES1.png";
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
    });

  postContainer.append( postTitle, postContent, postButton);
  return postContainer;
}