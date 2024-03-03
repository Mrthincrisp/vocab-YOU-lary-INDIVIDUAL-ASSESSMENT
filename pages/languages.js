import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyLanguages = () => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-Language-btn">Add A Language</button>';
  renderToDOM('#add-button', btnString);
  const domString = '<h1>No Languages</h1>';
  renderToDOM('#store', domString);
};

const showLanguages = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-language-btn">Add A Language</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <!-- <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;"> -->
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
           <!-- <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p> -->
            <hr>
            <i class="btn btn-success" id="view-language-btn--${item.firebaseKey}">Details</span></i>
            <i class="btn btn-info" id="edit-language-btn--${item.firebaseKey}">Edit</i>
            <i class="btn btn-danger" id="delete-language-btn--${item.firebaseKey}">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showLanguages, emptyLanguages };
