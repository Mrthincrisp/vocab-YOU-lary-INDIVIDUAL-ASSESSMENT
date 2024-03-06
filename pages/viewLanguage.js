import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
// attempted display card for language data

const viewLanguage = (array) => {
  clearDom();

  let domString = '';
  array.sort((a, b) => b.timeSubmitted - a.timeSubmitted);

  array.forEach((item) => {
    domString += `
    <div class="card-box">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
            <hr>
            <i class="btn btn-details" id="details-language-btn--${item.firebaseKey}">Details</span></i>
            <i class="btn btn-info" id="update-language-btn--${item.firebaseKey}">Edit</i>
            <i class="btn btn-danger" id="delete-language-btn--${item.firebaseKey}">Delete</i>
        </div>
        </div>
      </div>`;
  });
  renderToDOM('#vocab', domString);
};

export default viewLanguage;
