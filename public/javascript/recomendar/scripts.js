const form = document.querySelector('#game');
const title = document.querySelector('#title');
const image = document.querySelector('#image');
const photo = document.querySelector('#photo');
const labelPhoto = document.querySelector('#lbl-photo')


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

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', e.target.elements[0].value);
    formData.append('description', e.target.elements[1].value);
    formData.append('image', e.target.elements[3].files[0]);

    console.log(formData)

    try{
        const result = await fetch('/api/suggest-game', {
            method: 'post',
            body: formData
        });
        location.href = '/';
    }catch(e){
        console.log(e);
    }
})