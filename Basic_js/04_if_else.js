
var whoIsHere = '';

if(whoIsHere === 'user'){
    console.log('greeting message for user');
    console.log('allow access to view all course');
}else if (whoIsHere === 'teacher'){
    console.log('Greeting message for Teacher');
    console.log('Allow access to his course');
}else {
    console.log('Message : please verify your email');
    console.log('Send user an email for verification.')
}