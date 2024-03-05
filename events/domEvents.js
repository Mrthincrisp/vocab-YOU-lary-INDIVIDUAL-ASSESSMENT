import { deleteLanguage, getLanguages, getSingleLanguage } from '../api/languageData';
import addLanguageForm from '../components/forms/languageForm';
import { showLanguages } from '../pages/languages';
import viewLanguage from '../pages/viewLanguage';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-language-btn')) {
      addLanguageForm(uid);
    }
    // Delete event
    if (e.target.id.includes('delete-language')) {
      // eslint-disable-next-line no-alert
      if (window.confirm("That's gonna delete it... Are you sure?")) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteLanguage(firebaseKey).then(() => {
          getLanguages(uid).then(showLanguages);
        });
      }
    }
    // View event
    if (e.target.id.includes('view-language-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleLanguage(firebaseKey).then(viewLanguage);
    }

    // Edit event
    if (e.target.id.includes('update-language')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleLanguage(firebaseKey).then((authorObj) => addLanguageForm(authorObj, uid));
    }
  });
};

export default domEvents;
