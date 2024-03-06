import { getVocab, showLang, showTech } from '../api/languageData';
import addLanguageForm from '../components/forms/languageForm';
import { emptyLanguages, showLanguages } from '../pages/languages';
import clearDom from '../utils/clearDom';

const navigationEvents = (uid) => {
  document.querySelector('#all-entries').addEventListener('click', () => {
    getVocab(uid).then((response) => {
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

  document.querySelector('#technologies').addEventListener('click', () => {
    showTech(uid).then((response) => {
      if (response.length > 0) {
        showLanguages(response);
      } else {
        emptyLanguages();
      }
    });
  });

  document.querySelector('#languages').addEventListener('click', () => {
    showLang(uid).then((response) => {
      if (response.length > 0) {
        showLanguages(response);
      } else {
        emptyLanguages();
      }
    });
  });
};

export default navigationEvents;
