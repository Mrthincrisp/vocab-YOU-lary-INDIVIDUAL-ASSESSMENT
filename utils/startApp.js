import { getLanguages } from '../api/languageData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/DomBuilder';
import navBar from '../components/shared/navBar';
import { showLanguages } from '../pages/languages';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
// import navigationEvents from '../events/navigationEvents';

const startApp = (uid) => {
  domBuilder(uid); // BUILD THE DOM
  domEvents(uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getLanguages(uid).then(showLanguages);
};

export default startApp;
