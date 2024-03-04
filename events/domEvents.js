import { deleteLanguage, getLanguages } from '../api/languageData';
import { showLanguages } from '../pages/languages';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-language')) {
      // eslint-disable-next-line no-alert
      if (window.confirm("That's gonna delete it... Are you sure?")) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteLanguage(firebaseKey).then(() => {
          getLanguages(uid).then(showLanguages);
        });
      }
    }
  });
};

export default domEvents;
