import {
  deleteVocab, getVocab, getSingleVocab, selectFilter
} from '../api/languageData';
import addLanguageForm from '../components/forms/languageForm';
import { emptyVocabs, showVocabs } from '../pages/languages';
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

  document.querySelector('#main-container').addEventListener('change', (e) => {
    if (e.target.id === 'select-language') {
      const selectedItem = e.target.value;
      if (selectedItem) {
        console.warn(selectedItem);
        selectFilter(uid, selectedItem).then((response) => {
          if (response.length > 0) {
            showVocabs(response, uid);
          } else {
            emptyVocabs();
          }
        });
      }
    }
  });
};
export default domEvents;
