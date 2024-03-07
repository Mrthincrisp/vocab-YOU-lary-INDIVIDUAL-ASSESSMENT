import { deleteVocab, getVocab, getSingleVocab } from '../api/languageData';
import addLanguageForm from '../components/forms/languageForm';
import { showVocabs } from '../pages/languages';
import showdetails from '../pages/showdetails';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-language-btn')) {
      addLanguageForm(uid);
    }
    // Delete event
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm("That's gonna delete it... Are you sure?")) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(uid).then((vocab) => showVocabs(vocab, uid));
        });
      }
    }
    // View event
    if (e.target.id.includes('view-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then(showdetails);
    }

    // Edit event
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((langObj) => addLanguageForm(uid, langObj));
    }
  });
};

export default domEvents;
