const btnJoke = document.getElementById("fetchJoke");
const jokeArea = document.getElementById("jokeList");

const savedJokes = JSON.parse(localStorage.getItem('jokes')) || [];
savedJokes.forEach(joke => {
  añadirBromaAlDOM(joke);
});

btnJoke.addEventListener("click", () => {
  fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => {
          if (!response.ok) {
              throw new Error('La solicitud no fue exitosa');
          }
          return response.json();
      })
      .then((data) => {
          const broma = data.value;
          añadirBromaAlDOM(broma);
          guardarBromaEnLocalStorage(broma);
      })
      
});

function añadirBromaAlDOM(joke) {
  const li = document.createElement('li');
  li.innerHTML = `
      <h2>${joke}</h2>
      <button class='botonEliminar'>Eliminar</button>
  `;
  li.querySelector('.botonEliminar').addEventListener('click', () => {
      borrarBroma(joke, li);
  });
  jokeArea.appendChild(li);
}

function guardarBromaEnLocalStorage(joke) {
  const jokes = JSON.parse(localStorage.getItem('jokes')) || [];
  const updatedJokes = [...jokes, joke]; // <-- importante el spread operator para añadir las anteriores
  localStorage.setItem('jokes', JSON.stringify(updatedJokes));
}

function borrarBroma(joke, li) {
  let jokes = JSON.parse(localStorage.getItem('jokes')) || [];
  jokes = jokes.filter(j => j !== joke); // recorremos todo el array y filtramos las que no sean iguales a la que queremos borrar 
  localStorage.setItem('jokes', JSON.stringify(jokes)); // se añaden todas al localStorage menos la que queremos borrar
  jokeArea.removeChild(li); // por último borramos también el elemento del DOM 
}
;