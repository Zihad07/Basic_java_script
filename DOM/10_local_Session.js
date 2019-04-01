

// local session

// localStorage.setItem('name', 'Alex')
// localStorage.setItem('age', 30);

// // session storage

// sessionStorage.setItem('name', 'Ali');



// remove item

// localStorage.removeItem('age');

// clear storage

// localStorage.clear();

// get item

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// const len = localStorage.length;

// console.log(name,age,len);


document.querySelector('form').addEventListener('submit',function(e){
    // console.log(123);
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        
    }

    tasks.push(task);
    // console.log(tasks);
    // console.log(tasks.length);
    // console.log(JSON.stringify(tasks));
    // console.log(JSON.stringify(tasks).length);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('Task saved');
    e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks')); 
tasks.forEach(function(item){
    console.log(item);
})
