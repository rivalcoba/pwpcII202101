/* eslint-disable no-console */
/* eslint-disable no-alert */
import './stylesheets/style.css';
import './stylesheets/mystyles.css';

// Inicializando Scripts de materialize
document.addEventListener('DOMContentLoaded', () => {
  // Inicializando todos los sidenavs
  document.querySelectorAll('.sidenav').forEach((sideNav) => {
    // eslint-disable-next-line no-undef
    M.Sidenav.init(sideNav);
  });
  // Inicializando todos los dropdowns
  document
    .querySelectorAll('.dropdown-trigger')
    // eslint-disable-next-line no-undef
    .forEach((dropdown) => M.Dropdown.init(dropdown));
});
