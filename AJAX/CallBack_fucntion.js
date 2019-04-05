

posts = [
    {title: 'post one'},

    {title: 'post two'}
]


function createPost(post, mycallBack){
    setTimeout(function(){
        posts.push(post);
        mycallBack();
    }, 2000)
}

function getPosts() {
    setTimeout(function(){
        posts.forEach(function(each_post){
            console.log(each_post.title);
        })
    },1000)
}

createPost({title:'post three'}, getPosts);
// getPosts();