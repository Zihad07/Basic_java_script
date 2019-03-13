
// document.getElementByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items)
// console.log(items[0]);
// items[0].style.color = 'red';
// items[1].textContent = 'Hello';

// let listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.querySelectorAll()

const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);

items.forEach(function(li, index) {
    li.textContent = `${index} : world`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((item)=>{
    item.style.background = '#ccc';
});

liEven.forEach((item)=>{
    item.style.background = '#f4f4f4';
});