import { getVocab } from '../api/languageData';
import { getLanguages } from '../api/vocabData';
import addLanguageForm from '../components/forms/languageForm';
import { emptyVocabs, showVocabs } from '../pages/languages';
import viewLanguage from '../pages/viewLanguage';

const navigationEvents = (uid) => {
  document.querySelector('#all-entries').addEventListener('click', () => {
    getVocab(uid).then((response) => {
      if (response.length > 0) {
        showVocabs(response, uid);
      } else {
        emptyVocabs();
      }
    });
  });

  document.querySelector('#add-entry-btn').addEventListener('click', () => {
    addLanguageForm(uid);
  });

  document.querySelector('#vocabs').addEventListener('click', () => {
    getVocab(uid).then((response) => {
      if (response.length > 0) {
        showVocabs(response, uid);
      } else {
        emptyVocabs();
      }
    });
  });

  document.querySelector('#languages').addEventListener('click', () => {
    getLanguages(uid).then((response) => {
      if (response.length > 0) {
        viewLanguage(response, uid);
      } else {
        emptyVocabs();
      }
    });
  });
};
export default navigationEvents;
