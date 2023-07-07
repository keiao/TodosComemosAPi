import { onNavigate } from "../routes";

export const Home = {
  template:`
  <button class="button" id="create">Crear receta...</button>
  `,
  methods: () => {
    const button = document.querySelector('#create');
    button.addEventListener('click', (event) => {
      event.preventDefault();
      onNavigate('/crear-receta');
    })
  }
}