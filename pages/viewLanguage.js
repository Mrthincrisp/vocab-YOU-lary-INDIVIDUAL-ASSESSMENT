import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewLanguage = (obj) => {
  clearDom();

  const domString = `
   <div class="mt-5 d-flex flex-wrap">
  <div class="d-flex flex-column">
  <div class="text-white ms-5 details">
    <h5>${obj.title}/h5>
    Language brief: <a>${obj.definition}</a>
    <hr>
       <i class="btn btn-info" id="update-language--${obj.firebaseKey}">Edit</span></i>
       <i class="btn btn-danger" id="delete-language-btn--${obj.firebaseKey}">Delete</i>
    </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewLanguage;
