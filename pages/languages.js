import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabs = () => {
  clearDom();
  const domString = '<h1>No Entries</h1>';
  renderToDOM('#vocab', domString);
};
// display cards for vocab data
const showVocabs = (array) => {
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
            <i class="btn btn-success" id="view-vocab-btn--${item.firebaseKey}">Details</span></i>
            <i class="btn btn-info" id="update-vocab-btn--${item.firebaseKey}">Edit</i>
            <i class="btn btn-danger" id="delete-vocab-btn--${item.firebaseKey}">Delete</i>
        </div>
        </div>
      </div>`;
  });
  renderToDOM('#vocab', domString);
};

export { showVocabs, emptyVocabs };

/*
<h4 class="card-type">${item.type}</h4>

console.warn('Before sorting:', array);
  const sortedArray = array.sort((a, b) => new Date(b.timeSubmitted) - new Date(a.timeSubmitted));
  console.warn('After sorting:', array);

  sortedArray.forEach((item) => {
*/
