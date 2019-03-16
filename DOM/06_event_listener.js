
// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('hello world');

//     e.preventDefault();
// });



document.querySelector('.clear-tasks').addEventListener('click',function(e){
    console.log('hello world');

    let val;

    val = e;

    // Event target element
    val = e.target;
    val = e.target.className;
    val = e.target.classList;

    // Event type
    val = e.type;

    // coordinat  relative to window
    val = e.clientY;
    val = e.clientX;
    console.log(val);
   
});