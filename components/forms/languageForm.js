import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLanguageForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submit-language'}" class="mb-4">
      <div class="form-group">
        <label for="image">Language Name</label>
        <input type="text" class="form-control" id="title" placeholder="Language" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Description</label>
        <input type="text" class="form-control" id="description" placeholder="description" value="${obj.definition || ''}"required>
      </div>
      <div class="form-group">
      </div>
      <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Language' : 'Submit Language'}</button>
    </form>
`;

  renderToDOM('#form-container', domString);
};

export default addLanguageForm;
