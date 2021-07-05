const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const DiemThi = new Schema({
  ten: {type : String, require: true, maxLength : 20, minLength: 1 },
  diemtoan: {type: Number, min : 0 , max : 10, require: true ,},
  diemnguvan: {type: Number, min : 0 , max : 10, require: true ,},
  diemtienganh: {type: Number, min : 0 , max : 10, require: true ,},

  diemly: {type: Number, min : 0 , max : 10, require: true ,},
  diemhoa: {type: Number, min : 0 , max : 10, require: true ,},
  diemsinh: {type: Number, min : 0 , max : 10, require: true ,},

  diemlichsu: {type: Number, min : 0 , max : 10, require: true ,},
  diemdialy: {type: Number, min : 0 , max : 10, require: true ,},
  diemgiaoduccongdan: {type: Number, min : 0 , max : 10, require: true ,},
});

module.exports = mongoose.model('DiemThi', DiemThi)