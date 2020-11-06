/* Variables */

const viewportWidth   = window.innerWidth || document.documentElement.clientWidth;



/* Functions */

// Document ready function

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}


// Teleport function

const appendElem = (elem, cont) => {
  if (cont) cont.appendChild(elem)
}


// Set active class

const setActive = (elems, selector) => {
  [].forEach.call(elems, (item, index) => {
    item.addEventListener('click', e => {
      const target = e.target,
            childs = item.querySelectorAll(''+ selector +'');

      if (target === item) return;

      [].forEach.call(childs, (childItem, index) => {
        childItem.classList.remove('active');
        target.classList.add('active');
      })
    })
  })
}
