
// Create element

const li = document.createElement('li');

// Add class
li.className  = 'collection-item';
// add id
li.id = 'new-item'

// add attribute
li.setAttribute('title', 'New item');
// li.textContent = 'hello world'

// Create text node and append
li.appendChild(document.createTextNode('Hello world :)'));

// Create new link
const link = document.createElement('a');

// link class name
link.className = "delete-item secondary-content";
// add icon html
link.innerHTML = `<i class="fa fa-remove"></i>`;

// append link to li
li.appendChild(link);
// Append li as child to ul

document.querySelector('ul.collection').appendChild(li);
console.log(li);