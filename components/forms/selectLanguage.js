/* eslint-disable camelcase */
import { getLanguages } from '../../api/vocabData';
import renderToDOM from '../../utils/renderToDom';

// creates the select menu for language items
const selectLanguage = (uid, language_id) => {
  let domString = `
  <label for="language" style="color: white">Select Language</label>
   <select class="form-control" id="language-id" required>
    <option value="">Select a Language</option>`;

  getLanguages(uid).then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
        <option
        value="${language.firebaseKey}"
        ${language_id === language.firebaseKey ? 'selected' : ''}>
        ${language.title}
        </option>`;
    });
    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
