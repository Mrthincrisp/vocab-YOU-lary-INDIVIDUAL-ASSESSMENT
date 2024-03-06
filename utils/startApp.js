import { getVocab } from '../api/languageData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/DomBuilder';
import { showVocabs } from '../pages/languages';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navEvents';
import navBar from '../components/shared/navBar';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  domEvents(uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getVocab(uid).then(showVocabs);
};

export default startApp;
