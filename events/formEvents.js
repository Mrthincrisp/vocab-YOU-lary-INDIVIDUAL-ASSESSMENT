import { createVocab, getVocab, updateVocab } from '../api/languageData';
import { showVocabs } from '../pages/languages';

const formEvents = (uid) => {
  // event listener to submit a new language
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-language')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#description').value,
        language_id: document.querySelector('#language-id').value,
        timeSubmitted: Date.now(),
        uid,
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocab(patchPayload).then(() => {
          getVocab(uid).then((vocab) => showVocabs(vocab, uid));
        });
      });
    }

    // edit/update event
    if (e.target.id.includes('update-language')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#description').value,
        language_id: document.querySelector('#language-id').value,
        timeSubmitted: Date.now(),
        uid,
        firebaseKey
      };
      updateVocab(payload).then(() => {
        getVocab(uid).then((vocab) => showVocabs(vocab, uid));
      });
    }
  });
};

export default formEvents;
