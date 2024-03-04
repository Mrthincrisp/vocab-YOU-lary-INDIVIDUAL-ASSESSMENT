import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLanguageForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-Language--${obj.firebaseKey}` : 'submit-language'}" class="mb-4">
      <div class="form-group">
        <label for="image">Language Name</label>
        <input type="text" class="form-control" id="title" placeholder="Language" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Description</label>
        <input type="text" class="form-control" id="description" placeholder="description" value="${obj.definition || ''}"required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="date" class="form-control" id="time" aria-describedby="Date" placeholder="Time" value="${obj.timeSubmitted || ''}"required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Language</button>
    </form>
`;

  renderToDOM('#form-container', domString);
};

export default addLanguageForm;

/*
<div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" value="${obj.email || ''}"required>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
      <label class="form-check-label" for="favorite">Favorite?</label>
    </div>
    */
