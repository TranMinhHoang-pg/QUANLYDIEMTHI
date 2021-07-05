const mongoose = require('mongoose');

async function ketNoi() {
    try {
        await mongoose.connect('mongodb://localhost:27017/QL_DIEMTHI', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Ket noi DB thanh công")
    }
    catch (eror) {
        console.log("Ket noi DB thất bại")
    }
}

module.exports = {ketNoi}