/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/styles.css">
  <title>Chuck Norris Jokes</title>
</head>
<body>
  <h1>Chuck Norris Jokes</h1>
  <button id="fetchJoke">Obtener Chiste</button>
  <ul id="jokeList"></ul>
  <script src="./js/script.js"></script>
</body>
</html>
*/ 



/*------------------------------------------------------------------*/
// revisar si fuera necesario `JSON.stringify` y `JSON.parse` para los datos del localStorage
  
// // ejemplo JSON.stringify
// const user = { name: "Ana", email: "ana@example.com" };
// localStorage.setItem('user', JSON.stringify(user));
// console.log(localStorage);

// // ejemplo JSON.parse
// const userJSON = localStorage.getItem('user');
// if (userJSON) {
//     const user = JSON.parse(userJSON);
//     console.log(user);} // user es ahora un objeto de JavaScript

    
    
// /*-------------------------------------------------------------------*/

//     const fetchJoke = document.getElementById("fetchJoke"); // el botón
//     const jokeArea = document.getElementById("jokeList");
    
// // - Una función para obtener un chiste de Chuck Norris desde la API 
//     fetchJoke.addEventListener('click', () => {
//         fetch('https://api.chucknorris.io/jokes/random')
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error('La solicitud no fue exitosa');
//             }
//             return response.json();
//           })
//           .then((data) => {
//             let template = 
//             `
//             <li>
//               <h2>${data.value}</h2>
//               <button class='botonEliminar'>Eliminar</button>
//             </li>
//             `;
          

//             let array = [];
//             array.push(data.value);
            
//             // console.log(array);
//             jokeArea.innerHTML += template;
//             localStorage.setItem('localArr', JSON.stringify(array));
//             console.log(localStorage);


            
//           })
//           .catch((error) => {
//             jokeArea.innerText = 'Error: No se pudo obtener la broma';
//           });
//           });
      
//           jokeArea.innerHTML= JSON.parse(localStorage.getItem('localArr'));

// // - Una función para renderizar la lista de chistes en el DOM
//       const addJokestoDom = () =>{}
// // - Una función para guardar la lista de chistes en localStorage
//       const saveJokesToLocalStorage = () => {}
// // - Una función para cargar la lista de chistes desde localStorage
//       const loadJokesfromLocalStorage = () => {}



// ## BONUS
// Como BONUS crear un botón para eliminar todos los elementos a la vez y/o un botón para eliminar uno a uno el elemento seleccionado 
// - Manejador de click en los botones de eliminación (se eliminará desde el local storage como del DOM)  
const arrChiste = []

localStorage.clear();

const btnJoke = document.getElementById("fetchJoke"); // el botón
const jokeArea = document.getElementById("jokeList");

btnJoke.addEventListener("click", () => {
  fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => {
            if (!response.ok) {
              throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
          })
          .then((data) => {
            const broma = data.value
            
            let template = 
                        `
                        <li>
                          <h2>${broma}</h2>
                          <button class='botonEliminar'>Eliminar</button>
                        </li>
                        `;
            jokeArea.innerHTML += template;

            newJoke()
            
          })} )
          
          const listaChistesLocalStorage = (x) => {
            localStorage.setItem("joke", x);
            console.log(localStorage);
          }
          
          
         // const getJokes = JSON.parse(localStorage.getItem('joke')) || [];
      


const newJoke = () => {
  arrChiste.push(broma);
  localStorage.setItem('jokes', JSON.stringify(arrChiste))
}


