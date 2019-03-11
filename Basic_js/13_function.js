

//  Function Declaration
function myfun(firstName='Nhid') {

    return 'Hello ' + firstName ;
}

console.log(myfun());


// Function Expression

const square = function (x = 2) {
    return x*x;
};

console.log(square(100))

// IIFEs

// (function(){
//     console.log('hello');
// })();


const todo = {

    add : function() { console.log('Add todd')}
}

todo.add();

todo.delete = function() { console.log('Todo delete')}

todo.delete();