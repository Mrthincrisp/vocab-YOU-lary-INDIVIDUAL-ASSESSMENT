import { createLanguage, getLanguages, updateLanguage } from '../api/languageData';
import { showLanguages } from '../pages/languages';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-language')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#description').value,
        timeSubmitted: document.querySelector('#time').value,
        language_id: document.querySelector('#language_id'),
        uid,
      };
      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateLanguage(patchPayload).then(() => {
          getLanguages(uid).then(showLanguages);
        });
      });
    }

    // next event
  });
};

export default formEvents;
