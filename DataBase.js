//  در این فایل  میخواهیم مانگو دی بی رو راه اندازی کنیم و کانکت کنیم به فایل  اپ

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const MongoConnect = callback => {
    MongoClient.connect("mongodb://localhost")

        .then(client => {
            console.log('Connected');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
};


module.exports = MongoConnect;


