const express = require('express');
const https = require('https');
const request = require('request-promise-native');

const User = require('../models/User');
const config = require('../config');
const nanoid = require("nanoid");

const createRouter = () => {
    const router = express.Router();

    router.post('/', (req, res) => {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });

        user.save()
            .then(user => res.send(user))
            .catch(error => res.status(400).send(error))
    });


    router.post('/facebookLogin', async (req, res) => {
        const debugTokenUrl = `https://graph.facebook.com/debug_token?input_token=${req.body.accessToken}&access_token=${config.facebook.appId}|${config.facebook.appSecret}`

        try {

            const response = await request(debugTokenUrl);
            const decodedResponse = JSON.parse(response);

            if (decodedResponse.data.error) {
                return res.status(401).send({message: 'Facebook token incorrect'});
            }

            if (req.body.id !== decodedResponse.data.user_id) {
                return res.status(401).send({message: 'Wrong user ID'});
            }

            let user = await User.findOne({facebookId: req.body.id});
            const token = nanoid();
            if (!user) {

                user = new User({
                    email: req.body.email,
                    password: nanoid(),
                    facebookId: req.body.id,
                    displayName: req.body.name,
                    token: token
                });

                await user.save();
            }
            ;


            return res.send({message: 'Login or register successful', user, token: user.token});

        } catch (error) {
            return res.status(401).send({message: 'Facebook token incorrect'});
        }
    });

    router.delete('/sessions', async (req, res) => {
        const token = req.get('Token');
        const success = {message: 'Logout success!'};

        if (!token) return res.send(success);

        const user = await User.findOne({token});

        if (!user) return res.send(success);

        user.token=nanoid();
        await user.save();

        return res.send(success);
    });


    return router;
};

module.exports = createRouter;