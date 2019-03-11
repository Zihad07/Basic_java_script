
const name = 'Nahid';
const age = 27;
const job = 'Web devlopment';
const city = 'Dhaka';


//  wiht templete string(E6)
html = `
    <ul>
        <li>Name : ${name}</li>
        <li>Age: ${age}</li>
        <li>job : ${job}</li>
        <li>city : ${city}</li>
        <li>${age<25 ? 'Under 25' : 'Over 25'}</li>
    </ul>

`

document.body.innerHTML = html;