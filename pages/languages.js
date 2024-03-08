// import { getCSharp } from '../api/languageData';
import { getLanguages } from '../api/vocabData';
import selectLanguage from '../components/forms/selectLanguage';
// import selectLanguage from '../components/forms/selectLanguage';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabs = () => {
  clearDom();
  const domString = '<h1>No Entries</h1>';
  renderToDOM('#vocab', domString);
};
// display cards for vocab data
const showVocabs = async (array, uid) => {
  clearDom();

  const selectString = `
<label for="language"></label>
  <select class="form-control btn-lg mb-4" id="select-language">
  <option value ="">Filter Language</option>
  <option value = "-NsGmSjhUAz4JOzPUtax">JS</option>
  <option value = "-NsGmSjiswtm112o4uZ7">Python</option>
  <option value = "-NsGmSjiswtm112o4uZ8">C#</option>
  <option value = "-NsGmSjiswtm112o4uZ9">SQL</option>
  <option value = "-NsGmSjiswtm112o4uZA">C++</option>
  <option value = "-NsGmSjjeQSGnrhbDSQP">Swift</option>
  <option value = "-NsGmSjjeQSGnrhbDSQQ">Perl</option>
  <option value = "-NsGmSjjeQSGnrhbDSQQ">HTML</option>
  <option value = "-NsGmSjjeQSGnrhbDSQS">Rust</option>
  </select>`;

  renderToDOM('#filter-select', selectString);

  let domString = '';
  const languages = await getLanguages(uid);

  array.sort((a, b) => b.timeSubmitted - a.timeSubmitted);

  array.forEach((item) => {
    const singleLanguage = languages.find((lang) => lang.firebaseKey === item.language_id);
    domString += `
    <div class="card-box">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h5 id="language-id">${singleLanguage.title}</h5>
            <hr>
            <i class="btn btn-success" id="view-vocab-btn--${item.firebaseKey}">Details</span></i>
            <i class="btn btn-info" id="update-vocab-btn--${item.firebaseKey}">Edit</i>
            <i class="btn btn-danger" id="delete-vocab-btn--${item.firebaseKey}">Delete</i>
        </div>
        </div>
      </div>`;
  });
  renderToDOM('#vocab', domString);
  selectLanguage(uid, array.language_id);
};

export { showVocabs, emptyVocabs };

// const selectString = `
// <label for="language"></label>
//   <select class="form-control btn-lg mb-4" id="select-language">
//   <option value ="">Filter Language</option>
//   <option value = "-NsGmSjhUAz4JOzPUtax">JS</option>
//   <option value = "-NsGmSjiswtm112o4uZ7">Python</option>
//   <option value = "-NsGmSjiswtm112o4uZ8">C#</option>
//   <option value = "-NsGmSjiswtm112o4uZ9">SQL</option>
//   <option value = "-NsGmSjiswtm112o4uZA">C++</option>
//   <option value = "-NsGmSjjeQSGnrhbDSQP">Swift</option>
//   <option value = "-NsGmSjjeQSGnrhbDSQQ">Perl</option>
//   <option value = "-NsGmSjjeQSGnrhbDSQQ">HTML</option>
//   <option value = "-NsGmSjjeQSGnrhbDSQS">Rust</option>
//   </select>`;
