
//For loop

// for(let i = 1; i<=10; i++){

//     if(i===3){
//         console.log('3 is my favourite number')
//         continue;
//     }

//     if(i==7){
//         console.log('Stop iteration');
//         break;
//     }
//     console.log(i);
// }

const cars = ['Ymaha', 'Toyota','Tesla'];

// for(let i =0; i<cars.length; i++){
//     console.log(cars[i]);
// }

// FOREACH

cars.forEach(function(car){
    console.log(car);
});


// MAP

const users = [
    {id:1, name : 'jara'},
    {id:2, name : 'sara'},
    {id:3, name : 'kais'}
]


const ids = users.map(function(user){
    return user.id + '-' + user.name;
});

console.log(ids)


// FOR IN

const person = {
    name : 'Alex',
    age : 23,
    email : 'ales667@gmail.com'
}

for(key in person){
    console.log(`${key} : ${person[key]}`);
}

