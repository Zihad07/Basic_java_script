
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// Click
// clearBtn.addEventListener('click', runEvent);
// double-Click
// clearBtn.addEventListener('dblclick', runEvent);

// Mouse-down
// clearBtn.addEventListener('mousedown',runEvent);

// Mouse-up
// clearBtn.addEventListener('mouseup',runEvent);

// Mouse-enter
// card.addEventListener('mouseenter',runEvent);

// Mouse-leave
// card.addEventListener('mouseleave',runEvent);

// Mouse-leave
// card.addEventListener('mouseover',runEvent);

// Mouse-leave
// card.addEventListener('mouseout',runEvent);

// Mouse Move

card.addEventListener('mousemove',function(e){
    heading.textContent = `Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},30)`
})






// Event Handler

function runEvent(e){
    console.log(`EVENT TYPE : ${e.type}`);
}