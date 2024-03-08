const clearDom = () => {
  document.querySelector('#vocab').innerHTML = '';
  document.querySelector('#filter-select').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
