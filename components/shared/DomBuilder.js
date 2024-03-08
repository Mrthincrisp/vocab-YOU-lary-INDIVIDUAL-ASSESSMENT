import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="filter-select"></div>
    <div id="form-container"></div>
    <div class="vocab" id="vocab"></div> 
    <div class="view" id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
