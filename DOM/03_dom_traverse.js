
let val;

const list = document.querySelector('ul.collection');
const list_item = document.querySelector('li.collection-item:first-child');

val = list_item;
val = list;

// get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[1].nodeType;
// val = list.childNodes[2];


//  1 - Element
//  2 - Attribute(deprecated)
//  3 - Text Node
//  4 - Document itself
// 8 - Commetnt
//  10 - Doctype

// get child elements node
val = list.children;
val = list.children[0];
val = list.children[1].textContent = 'hello';

// children of children

val = list.children[0].children[0];
val = list.children[0].children[0].id = 'test-link';
val = list.children[0].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child

val = list.lastChild;
val = list.lastElementChild;

// child count

val = list.childElementCount;


// get parent node

val = list_item.parentNode;
val = list_item.parentElement;
val = list_item.parentElement.parentElement;
val = list_item.parentElement.parentElement.parentElement;

// get nextsivling

val = list_item.nextSibling;

val = list_item.nextElementSibling;
val = list_item.nextElementSibling.nextElementSibling;

// get privoous-sivling
val = list_item.previousElementSibling;
val = list.lastElementChild.previousElementSibling.previousElementSibling;

console.log(val);