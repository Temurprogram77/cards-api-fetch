let container = document.querySelector(".container");

const tech = fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((elemn) => {
      const element = document.createElement("div");
      element.innerHTML = `
      
        <div class="card">
            <img src="${elemn.thumbnailUrl}" alt="photo">
            <p class="title">${elemn.title}</p>
            <div class="ids">
                <div class="book_id">${elemn.albumId}</div>
                <div class="id">${elemn.id}</div>
            </div>
        </div>
      
      `;
      container.appendChild(element);
    });
  });
console.log(tech);
