const form = document.querySelector('#game');
const title = document.querySelector('#title');
const image = document.querySelector('#image');
const photo = document.querySelector('#photo');
const labelPhoto = document.querySelector('#lbl-photo')
const labelTitle = document.querySelector('#lbl-title');
const sugeridos = document.querySelector('#sugeridos');


image.addEventListener('change', e => {
    const img = e.target.files[0];
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
            photo.src = e.target.result;

        }
        reader.readAsDataURL(img);
    }
})

function createTag(type, innerText, classList, src, style, href) {
    const tag = document.createElement(type);

    innerText && (tag.innerText = innerText);
    classList && (tag.classList = classList);
    src && (tag.src = src);
    href && (tag.href = href);
    style && (tag.style = style);
    return tag
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', e.target.elements[0].value);
    formData.append('description', e.target.elements[1].value);
    formData.append('image', e.target.elements[3].files[0]);

    try {
        const result = await fetch('/api/suggest-game', {
            method: 'post',
            body: formData
        });
        location.href = '/';
    } catch (e) {
        console.log(e);
    }
})

var timer;

title.addEventListener('change', async (e) => {
    const name = e.target.value
    sugeridos.innerHTML = '';
    if(sugeridos.childNodes.length != 0){
        sugeridos.removeChild(sugeridos.childNodes[0])
        sugeridos.childNodes.forEach(node => sugeridos.removeChild(node))
    }
    try {
        const result = await fetch('/api/search', {
            method: 'post',
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await result.json();
        const h3 = createTag('h3', 'Quizá te refieres a esto', 'text-white');
        sugeridos.appendChild(h3);
        if(json.length != 0){
            json.map(game =>{
                const item = createTag('a', null, 'row d-flex justify-content-center align-items-center', null, null, `/like/${game._id}`);
                const img = createTag('img', null, 'col-md-3', game.photo);
                const span = createTag('span', game.title, 'col-md-4')
                item.appendChild(img);
                item.appendChild(span);
                sugeridos.appendChild(item)
    
            })
        }

    } catch (e) {
        console.log(e)
    }

})