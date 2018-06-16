const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const Photo = require('../models/Photo');
const User = require('../models/User');

const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

const createRouter = (db) => {

    router.get('/', (req, res) => {
            Photo.find().populate('user')
                .then(results => {
                    res.send(results)
                })
                .catch(() => res.sendStatus(500));
    });

    router.get('/:prof', (req, res) => {
        Photo.find({user:req.params.prof}).populate('user')
            .then(results => {
                res.send(results)
            })
            .catch(() => res.sendStatus(500));
    });

    router.post('/', upload.single('image'), (req, res) => {
        const data = req.body;
        User.findOne({token:req.get('Token')}).then(result=>{
            data.user=result._id;
            if (req.file) {
                data.image = req.file.filename;
            } else {

            }

            const photoItem = new Photo(data);

            photoItem.save()
                .then(result => res.send(result))
                .catch(error => res.status(400).send(error));
        })




    });





    return router;
};

module.exports = createRouter;