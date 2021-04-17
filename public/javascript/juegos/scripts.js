const games = document.querySelector('#games');

function createTag(type, innerText, classList, src, style){
    const tag = document.createElement(type);
    
    innerText && (tag.innerText = innerText);
    classList && (tag.classList = classList);
    src && (tag.src = src);
    style && (tag.style = style);
    return tag
}

function createCard(title, description, image){
    const column = createTag('div', null, 'col-md-4 my-3');
    const card = createTag('div', null, 'Card1 text-white');
    const img = createTag('img', null, 'card-img-top', image);
    const body = createTag('div', null, 'd-flex flex-column align-items-center justify-content-center h-50 mt-1');
    const h5 = createTag('h5', title, 'card-title', null, 'font-weight: bold;');
    const p = createTag('p', description, 'card-text w-75');
    const a = createTag('a', 'Ver más', 'btn boton justify-content-center');

    body.appendChild(h5);
    body.appendChild(p);
    body.appendChild(a);
    card.appendChild(img);
    card.appendChild(body);
    column.appendChild(card);

    return column
}


fetch('/api/get-all')
    .then(res => res.json())
    .then(json => {
        json.forEach(game => {
            const card = createCard(game.title, game.description, game.photo);
            games.appendChild(card);
        })
    })
