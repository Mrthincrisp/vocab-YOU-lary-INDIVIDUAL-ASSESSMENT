import { createLanguage, getVocab, updateLanguage } from '../api/languageData';
import { showLanguages } from '../pages/languages';

const formEvents = (uid) => {
  // event listener to submit a new language
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-language')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#description').value,
        language_id: document.querySelector('#language_id'),
        type: document.querySelector('#type').value,
        timeSubmitted: Date.now(),
        uid,
      };
      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateLanguage(patchPayload).then(() => {
          getVocab(uid).then(showLanguages);
        });
      });
    }

    // edit/update event
    if (e.target.id.includes('update-language')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#description').value,
        type: document.querySelector('#type').value,
        timeSubmitted: Date.now(),
        firebaseKey
      };
      updateLanguage(payload).then(() => {
        getVocab(uid).then(showLanguages);
      });
    }
  });
};

export default formEvents;
