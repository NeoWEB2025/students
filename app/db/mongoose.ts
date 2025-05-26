const mongoose = require('mongoose');

main().catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://100.125.14.65:27017/students');
}