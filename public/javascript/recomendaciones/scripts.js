const recomendaciones = document.querySelector('#recomendaciones');

function createCard(title, description, image, likes){

    const card = 
    `<div class="col-md-9">
        <div class="mb-3 card2 mt-3">
        <div class="row g-0">
        <div class="col-md-4">
          <img src="${image}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-white" style="font-weight: bold;">${title}</h5>
            <p class="card-text text-white">${description}</p>
            <p class="card-text text-white">${likes} personas recomendaron este juego</p>
            <a class="btn mx-auto text-center btn-light w-25">Jugar Ahora</a>
          </div>
        </div>

        </div>
    </div>
    `

    return card;
    
}

fetch('api/get-most-popular')
    .then(res => res.json())
    .then(json => {
        json.forEach(recomedacion => {
            const card = createCard(recomedacion.title, recomedacion.description, recomedacion.photo, recomedacion.likes);
            recomendaciones.innerHTML+=card;
        })
    })