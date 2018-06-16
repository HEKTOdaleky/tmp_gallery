const mongoose = require('mongoose');
const config = require('./config');


const User = require('./models/User');

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;


db.once('open', async () => {
    try {
        await db.dropCollection('users');
    } catch (e) {
        console.log('Collections were not present, skipping drop...');
    }



    await User.create({
        email: "test@test.kg",
        password: 123,
        facebookId: 123,
        displayName: "Тестовый"
    }, {
        email: "test@test.ru",
        password: 123,
        facebookId: 123,
        displayName: "Второй"
    });

    db.close();
});