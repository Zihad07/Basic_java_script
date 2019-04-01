

document.getElementById('btn1').addEventListener('click',loadCusotmer);
document.getElementById('btn2').addEventListener('click',loadCusotmers);

function loadCusotmer(){

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json',true);

    xhr.onload = function(){

        if(this.status === 200){
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            // console.log(customer);

            const html = `
                <ul>
                    <li> ID : ${customer.id} </li>
                    <li> NAME : ${customer.name} </li>
                    <li> EMAIL : ${customer.email} </li>
                    <li> CITY : ${customer.city} </li>
                </ul>
            
            `

            document.getElementById('customer').innerHTML = html;
        }
    };

    xhr.send();
}




function loadCusotmers(){

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json',true);

    xhr.onload = function(){

        if(this.status === 200){
            // console.log(this.responseText);
            const customers = JSON.parse(this.responseText);
            // console.log(customer);

            var html='';
            customers.forEach(function(customer){

                html += `
                <ul>
                    <li> ID : ${customer.id} </li>
                    <li> NAME : ${customer.name} </li>
                    <li> EMAIL : ${customer.email} </li>
                    <li> CITY : ${customer.city} </li>
                </ul>
            
            `
            })

            document.getElementById('customers').innerHTML = html;
        }
    };

    xhr.send();
}