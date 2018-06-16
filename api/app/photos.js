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
        console.log(req.params.id);
            Photo.find().populate('user')
                .then(results => {
                    res.send(results)
                })
                .catch(() => res.sendStatus(500));
    });

    router.get('/:id', (req, res) => {
        console.log(req.params.id);
        Photo.find({user:req.params.id}).populate('user')
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


    router.delete('/:id', async (req, res) => {
        console.log("DELETE")
        const token = req.get('Token');

        const id = req.params.id;

        User.findOne({token})
            .then(user => {
                if (!user) {
                    res.sendStatus(401);
                }
                else {
                    Photo.findOne({user: user._id, _id: id}).then(photo => {
                        if (photo)
                            Photo.deleteOne({_id: photo._id}).then(resp => {
                                res.send(resp);
                            }, error => res.sendStatus(403))
                        else res.sendStatus(403);

                    })

                }
            }, error => res.sendStatus(400).send("ERROR"));
    });


    return router;
};

module.exports = createRouter;