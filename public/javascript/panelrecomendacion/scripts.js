const panelrecomendacion = document.querySelector('#panelrecomendacion');

function createTag(type, innerText, classList, src, style){
    const tag = document.createElement(type);
    
    innerText && (tag.innerText = innerText);
    classList && (tag.classList = classList);
    src && (tag.src = src);
    style && (tag.style = style);
    return tag
}

function createCard(title, description, image, id){
    console.log(id)
    const column = createTag('div', null, 'col-md-4 my-3');
    const card = createTag('div', null, 'Card1 text-white');
    const img = createTag('img', null, 'card-img-top', image);
    const div = createTag('div', null, 'd-flex flex-row justify-content-around align-items-center w-75');
    const body = createTag('div', null, 'd-flex flex-column align-items-center justify-content-start h-50 mt-1');
    const h5 = createTag('h5', title, 'card-title', null, 'font-weight: bold;');
    const p = createTag('p', description, 'card-text w-75', null, 'max-height: 150px; overflow: hidden;');
    const a = createTag('a', 'Aceptar', 'btn btn-light justify-content-center');
    const a1 = createTag('a', 'Eliminar', 'btn btn-light justify-content-center');

    body.appendChild(h5);
    body.appendChild(p);
    body.appendChild(div);
    div.appendChild(a);
    div.appendChild(a1);
    card.appendChild(img);
    card.appendChild(body);
    column.appendChild(card);

    a.addEventListener('click', async (e) => {

        try{
            await fetch(`/api/authorize`, {
                method: 'post',
                body: JSON.stringify({id}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            location.reload();
        }
        catch(err){

            console.log(err);
            
        }
    
    })
    
    a1.addEventListener('click', async (e) => {
        try{
            await fetch(`/api/delete/${id}`, {
                method:'delete'
            });

            location.reload();
        }
        catch (err){

            console.log(err);

        }
    })

    return column
}

fetch('/api/get-suggested')
    .then(res => res.json())
    .then(json => {
        json.forEach(game => {
            const card = createCard(game.title, game.description, game.photo, game._id);
            panelrecomendacion.appendChild(card);
        })
    })