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
      
        <div class="card">
            <img src="/index.html" alt="photo">
            <p class="title">Accusamus beatae ad facilis cum similique qui sunt</p>
            <div class="ids">
                <div class="book_id">2</div>
                <div class="id">2</div>
            </div>
        </div>
      
      `;
      container.appendChild(element);
    });
  });
console.log(tech);
