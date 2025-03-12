let container = document.querySelector('.container');

fetch("https://jsonplaceholder.typicode.com/photos")
.then(response => {
    console.log(response);
})