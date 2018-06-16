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
    // Product index
    router.get('/', (req, res) => {
        if (req.query.id)
            Product.findOne({_id: req.query.id}).populate('category').populate('author')
                .then(results => {
                    res.send(results)
                })
                .catch(() => res.sendStatus(500));
        else if(req.query.category)
            Product.find({category: req.query.category}).populate('category').populate('author')
                .then(results => {
                    res.send(results)
                })
                .catch(() => res.sendStatus(500));
        else
            Product.find().populate('category')
                .then(results => {
                    res.send(results)
                })
                .catch(() => res.sendStatus(500));
    });

    // Product create
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

    // Product get by ID
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        db.collection('products')
            .findOne({_id: new ObjectId(req.params.id)})
            .then(result => {
                if (result) res.send(result);
                else res.sendStatus(404);
            })
            .catch(() => res.sendStatus(500));
    });

    router.delete('/:id', async (req, res) => {
        const token = req.get('Token');

        const id = req.params.id;

        User.findOne({token})
            .then(user => {
                console.log(user)
                if (!user) {
                    res.sendStatus(401);
                }
                else {
                    Product.findOne({author: user._id, _id: id}).then(product => {
                        console.log(product, !product)
                        if (product)
                            Product.deleteOne({_id: product._id}).then(resp => {
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