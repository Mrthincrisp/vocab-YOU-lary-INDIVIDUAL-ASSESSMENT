import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyLanguages = () => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-Language-btn">Add A Language</button>';
  renderToDOM('#add-button', btnString);
  const domString = '<h1>No Languages</h1>';
  renderToDOM('#vocab', domString);
};

const showLanguages = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-language-btn">Add A Language</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  console.warn('Before sorting:', array);
  array.sort((a, b) => a.timeSubmitted - b.timeSubmitted);
  console.warn('After sorting:', array);

  array.forEach((item) => {
    domString += `
    <div class="card-box">  
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
            <hr>
            <i class="btn btn-success" id="view-language-btn--${item.firebaseKey}">Details</span></i>
            <i class="btn btn-info" id="update-language-btn--${item.firebaseKey}">Edit</i>
            <i class="btn btn-danger" id="delete-language-btn--${item.firebaseKey}">Delete</i>
        </div>
        </div>
      </div>`;
  });
  renderToDOM('#vocab', domString);
};

export { showLanguages, emptyLanguages };

/*
console.warn('Before sorting:', array);
  const sortedArray = array.sort((a, b) => new Date(b.timeSubmitted) - new Date(a.timeSubmitted));
  console.warn('After sorting:', array);

  sortedArray.forEach((item) => {
*/
