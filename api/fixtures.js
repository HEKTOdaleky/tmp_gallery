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



    const [userIgor, userAlex] =await User.create({
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

    await Product.create({
            title: 'Hello World',
            image: 'HelloWorld.jpg',
            author: userIgor._id
        }, {
            title: 'Bad',
            image: 'bad.jpg',
            author: userAlex._id
        },
        {
            title: 'Fish',
            image: 'fish.jpg',
            author: userAlex._id
        });

    db.close();
});