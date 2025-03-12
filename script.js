let container = document.querySelector(".container");

const tech = fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((elemn) => {
      const element = document.createElement("div");
      element.classList.add("post");
      element.innerHTML = `
      
      
      
      `;
      container.appendChild(element);
    });
  });
console.log(tech);
