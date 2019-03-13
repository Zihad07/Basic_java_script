
// Single Slector
// document.getElementById()

// console.log(document.getElementById('task-title'))

// // Get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#444';
// taskTitle.style.color = 'green';
// taskTitle.style.padding = '5px';

// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'my task';
// taskTitle.innerText = 'tasking';

// taskTitle.innerHTML = `<span style="color: yellow">
//                             Task list
//                         </span>`;


console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'))

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'pink';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';



