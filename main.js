import './style.css';
import { routes } from './src/routes/index.js';

const rootElement = document.querySelector('#app'); 

function render(route){
 rootElement.innerHTML = route.template;
 if (typeof route.methods === 'function') {
  route.methods();
 }
}

function handleRouteListener() {
  const route = routes[window.location.pathname];
  render(route);
}

window.addEventListener('popstate', handleRouteListener);

handleRouteListener();

