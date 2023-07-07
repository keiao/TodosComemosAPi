import { Home } from '../pages/home.js'
import { CreateRecipe } from '../pages/create-recipe.js'

export const routes = {
  '/': Home,
  '/crear-receta': CreateRecipe,
}

export const onNavigate = (pathname) => {
  window.history.pushState=({}, pathname, window.location.origin + pathname);
  const rootElement = document.querySelector('#app');
  rootElement.innerHTML = routes[pathname].template;
}