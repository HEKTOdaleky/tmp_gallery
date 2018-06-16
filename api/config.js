const path = require('path');

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, '/public/uploads'),
  db: {
    url: 'mongodb://localhost:27017',
    name: 'kontrol12'
  },
  jwt: {
    secret: 'some kinda very secret string',
    expires: 3600
  },
  facebook: {
    appId: "210029192949359",
    appSecret: "163555e85c9404e6ca7b16c5c6c3d446"
  }
};

