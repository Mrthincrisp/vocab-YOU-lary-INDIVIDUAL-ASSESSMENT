import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submit-language'}" class="mb-4">
      <div class="form-group">
        <label for="image" style="color: white">Name</label>
        <input type="text" class="form-control" id="title" placeholder="Language" value="${obj.title || ''}" required>
      </div>

      <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Entry' : 'Submit Entry'}</button>
    </form>
`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
