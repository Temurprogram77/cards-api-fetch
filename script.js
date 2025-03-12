let container = document.querySelector('.container');

const tech = fetch("https://jsonplaceholder.typicode.com/photos")
.then(response => {
    return response.json();
})
console.log(tech);