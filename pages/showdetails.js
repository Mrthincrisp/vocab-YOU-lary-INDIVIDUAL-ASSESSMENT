import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// display details for vocab data
const showdetails = (obj) => {
  clearDom();

  const domString = `
    <div class="card-box">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${obj.title}</h5>
          <p>${obj.definition}</p>
            <hr>
            <i class="btn btn-info" id="update-vocab-btn--${obj.firebaseKey}">Edit</i>
            <i class="btn btn-danger" id="delete-vocab-btn--${obj.firebaseKey}">Delete</i>
        </div>
        </div>
      </div>`;
  renderToDOM('#vocab', domString);
};

export default showdetails;
