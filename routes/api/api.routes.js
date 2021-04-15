const express = require('express');
const { authorizeGame } = require('../../db/authorize-game');
const { getAll } = require('../../db/get-last-added');
const { getSuggested } = require('../../db/get-suggested');
const { uploadPhoto } = require('../../storage/upload-photo');
const { addGame } = require('../../db/add-game');
const { uploader } = require('../../tools/multer-config');
const { searchGame } = require('../../db/search-game');
const { likeGame } = require('../../db/like-game');
const {getMostPopular} = require('../../db/get-most-popular');
const { getLessPopular } = require('../../db/get-less-popular');
const { search } = require('../../db/search');

const router = express.Router();

router.get('/get-all', async (req, res) => {
    try{
        const result = await getAll();
        res.status(200).send(result);
    }catch(e){
        res.status(500).send(e);
    }
});

router.get('/get-suggested', async (req, res) => {
    try{
        const result = await getSuggested();
        res.status(200).send(result);
    }catch(e){
        res.status(500).send(e);
    }
});

router.get('/get-most-popular', async (req, res) => {
    try{
        const result = await getMostPopular();
        res.status(200).send(result);
    }catch(e){
        res.status(500).send(e);
    }
});

router.get('/get-less-popular', async (req, res) => {
    try{
        const result = await getLessPopular();
        res.status(200).send(result);
    }catch(e){
        res.status(500).send(e);
    }
})

router.post('/subir', async (req, res) => {
    const {name, description, image} = req.body;

    try{
        const result = await addGame(name, description, image);
        res.status(200).send('ok');
    }catch(e){
        res.status(500).send(e);
    }
})

router.post('/suggest-game',uploader.single('image') ,async (req, res) => {
    const {name, description} = req.body;
    const {file} = req;

    try{
        const game = await searchGame(name);
        if(!game){
            const urlPhoto = await uploadPhoto(file);
            const result = await addGame(name, description, urlPhoto);
        }else{
            const updated = await likeGame(game.id);
        }
        res.status(200).send('ok');
    }catch(e){
        res.status(500).send(e);
    }
});

router.post('/authorize', async (req, res) => {
    const {id} = req.body;

    try{
        const result = await authorizeGame(id);
        res.status(200).send(result);
    }catch(e){
        res.status(500).send(e);
    }
});

router.post('/search', async (req, res) => {
    const {name} = req.body;

    try{
        const result = await search(name);
        res.status(200).send(result);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;