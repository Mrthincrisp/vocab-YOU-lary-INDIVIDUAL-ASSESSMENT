import { getLanguages } from '../api/languageData';
import { emptyLanguages, showLanguages } from '../pages/languages';

const navigationEvents = (uid) => (

  document.querySelector('#all-languages').addEventListener('click', () => {
    getLanguages(uid).then((response) => {
      if (response.length > 0) {
        showLanguages(response);
      } else {
        emptyLanguages();
      }
    });
  })
);

export default navigationEvents;
