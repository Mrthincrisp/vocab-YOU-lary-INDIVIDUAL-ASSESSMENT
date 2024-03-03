const clearDom = () => {
  document.querySelector('#store').innerHTML = ''; // change #ID
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
