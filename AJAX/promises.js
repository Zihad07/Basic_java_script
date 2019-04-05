posts = [
    {title: 'post one'},

    {title: 'post two'}
]


function createPost(post, mycallBack){
    
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);

            const flag = false;
            if(!flag){
                resolve();
            }else{
                reject("Wrong: something went wrong.")
            }
        }, 2000)
    });
}

function getPosts() {
    setTimeout(function(){
        posts.forEach(function(each_post){
            console.log(each_post.title);
        })
    },1000)
}

createPost({title:'post three'})
.then(getPosts)
.catch(function(err){
    console.log(err);
});
getPosts();