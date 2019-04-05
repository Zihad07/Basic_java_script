
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);


//  get text
function getText(){
    // console.log('getText');

    fetch('text.txt')
        .then(function(res){
            // console.log(res.text());
            return res.text();
        }).then(function(data){
            // console.log(data)
            document.getElementById('output').innerHTML = data;
        }).catch(function(err){
            console.log(err);
        })

}

//  get JSON

function getJSON(){
    // console.log('getText');

    fetch('json.json')
        .then(function(res){
            // console.log(res.text());
            return res.json();
        }).then(function(datas){
            console.log(datas)
            let output = '';
            datas.forEach(function(post){
                output += `<li>${post.title}</li>`;
            })
            document.getElementById('output').innerHTML = output;
        }).catch(function(err){
            console.log(err);
        })

}


//  get external file

function getExternal(){
    // console.log('getText');

    fetch('https://api.github.com/users')
        .then(function(res){
            // console.log(res.text());
            return res.json();
        }).then(function(datas){
            // console.log(datas)
            let output = '';
            datas.forEach(function(user){
                output += `<li>${user.login}</li>`;
            })
            document.getElementById('output').innerHTML = output;
        }).catch(function(err){
            console.log(err);
        })

}