import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLanguageForm = (obj = {}) => {
  clearDom();
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
      <div class="form-group">
        <label for="type" style="color: white">Type</label>
         <select class="form-control" id="type" required>
          <option value="">Select a Type</option>
          <option value="Technology">Technology</option>
          <option value="Language">Language</option>
         </select>
      </div>

      <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Entry' : 'Submit Entry'}</button>
    </form>
`;

  renderToDOM('#form-container', domString);
};

export default addLanguageForm;
