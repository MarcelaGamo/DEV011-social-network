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
