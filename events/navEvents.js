import { getLanguages } from '../api/languageData';
import addLanguageForm from '../components/forms/languageForm';
import { emptyLanguages, showLanguages } from '../pages/languages';
import clearDom from '../utils/clearDom';

const navigationEvents = (uid) => {
  document.querySelector('#all-languages').addEventListener('click', () => {
    getLanguages(uid).then((response) => {
      if (response.length > 0) {
        showLanguages(response);
      } else {
        emptyLanguages();
      }
    });
  });

  document.querySelector('#add-entry-btn').addEventListener('click', () => {
    clearDom();
    addLanguageForm(uid);
  });
};

export default navigationEvents;
