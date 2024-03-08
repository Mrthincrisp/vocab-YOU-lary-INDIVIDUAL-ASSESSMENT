import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

// form that pops up when updating or submitting a new language, not curently useable
const addLanguageForm = (uid, obj = {}) => {
  clearDom();
  console.warn(obj);
  const domString = `
  <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submit-language'}" class="mb-4">
      <div class="form-group">
        <label for="image" style="color: white">Name</label>
        <input type="text" class="form-control" id="title" placeholder="Language" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image" style="color: white">Description</label>
        <input type="text" class="form-control" id="description" placeholder="description" value="${obj.definition || ''}"required>
      </div>
      <div class="form-group" id="select-language"></div>
      <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Entry' : 'Submit Entry'}</button>
    </form>
`;
  renderToDOM('#form-container', domString);
  selectLanguage(uid, `${obj.language_id || ''}`);
};

export default addLanguageForm;
