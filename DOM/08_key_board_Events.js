
const form = document.querySelector('form');
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5');

form.addEventListener('submit', runEvent);

// Clear input
taskInput.value = '';

// keyDown
// taskInput.addEventListener('keydown',runEvent);

// keyUp
// taskInput.addEventListener('keyup',runEvent);

// kwyPress
// taskInput.addEventListener('keypress',runEvent);

// kwyPress
// taskInput.addEventListener('focus',runEvent);


function runEvent(e) {
    console.log(`Event Type : ${e.type}`);
    console.log(e.target.value);  

    heading.innerText = e.target.value;
    // console.log(taskInput.value);
    // e.preventDefault();
}
