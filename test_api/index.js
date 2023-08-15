



fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => { 
    const container = document.querySelector("#app");

    const img = document.createElement("img");
    img.src =  `${data.results[0].picture.large}` 
    img.alt = "Foto";

    container.appendChild(img);

    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> Nombre: ${data.results[0].name.first}, ${data.results[0].name.last}</h5>
      <p class="card-text">Pais: ${data.results[0].location.country}</p>
      <p class="card-text">Estado: ${data.results[0].location.state}</p>
      <p class="card-text">Ciudad: ${data.results[0].location.city}</p>
      <p class="card-text">Email: ${data.results[0].email}</p>
      <p class="card-text">Fecha de Nacimiento: ${data.results[0].registered.date}</p>
      <p class="card-text">Edad: ${data.results[0].registered.age}</p>
      <p class="card-text">Cell: ${data.results[0].cell}</p>
    </div>
    </div>` 
$("#app").append(html)

console.log(data.results[0]);






            
});