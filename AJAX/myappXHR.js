
document.getElementById('btn').addEventListener('click',loadData);

function loadData(){

    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    console.log(xhr.readyState);
    // Open
    xhr.open('GET','text.txt',true);
    console.log(xhr.readyState);
    xhr.onload = function(){
        console.log(xhr.readyState);
        if(this.status === 200){
            // console.log(this.responseText);
            document.querySelector('.text').innerHTML = `<p>${this.responseText}</p>`;
        }
    }
    // console.log(xhr.readyState);
    xhr.send();



}