
const http = new easyHTTP();

// Get Post

// http.get('https://jsonplaceholder.typicode.com/posts', function(err,posts){
    
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(posts);
//     }
// });


// Get Single Post

// http.get('https://jsonplaceholder.typicode.com/posts/5', function(err,posts){
    
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(posts);
//     }
// });

//  Create Data
data = {
    title : 'My Custom Data',
    body : 'This is my custom body'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// })


// http.put('https://jsonplaceholder.typicode.com/posts/99', data, function(err, post){
//     if(err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// })

// Delete post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,response){
    
    if(err) {
        console.log(err);
    }else {
        console.log(response);
    }
});





