
// Replace Element

// Create Element

const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// new text node

newHeading.appendChild(document.createTextNode('Task List'));

// get the old-heading

const oldHeading = document.getElementById('task-title');

// parrent
const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading,oldHeading);

console.log(newHeading);

// Remove Element 

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove()

// reomove child element

list.removeChild(lis[2]);



// CLASS and ATTRIBUTE

const  firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');
link.classList.remove('test');
val = link;


// attrubute

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
// val = link.hasAttribute('title')
link.setAttribute('title','Google');

// remove attrubute
link.removeAttribute('')

val = link;

console.log(val);
























