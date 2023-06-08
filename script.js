var checkbox = document.querySelector('#checkbox');
var Followers = document.querySelectorAll('.Followers');
var h1 = document.querySelectorAll('h1');
var Overview = document.querySelectorAll('.Overview');

checkbox.addEventListener('input', () => {
    if (checkbox.checked) {
        console.log(checkbox.checked);
        document.body.style.background = 'hsl(230, 17%, 14%)';
        Followers.forEach((follower) => {
            follower.style.backgroundColor = 'hsl(228, 28%, 20%)';
        })
        h1.forEach((h1) => {
            h1.style.color = 'white';
        })
        Overview.forEach((Overview) => {
            Overview.style.backgroundColor = 'hsl(228, 28%, 20%)';
        })
    }
    else {
        document.body.style.backgroundColor = 'white';
        Followers.forEach((follower) => {
            follower.style.backgroundColor = 'white';
        })
        h1.forEach((h1) => {
            h1.style.color = 'black';
        })
        Overview.forEach((Overview) => {
            Overview.style.backgroundColor = 'white';
        })
    }
})
