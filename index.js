const express = require('express');
var exphbs = require('express-handlebars');
const app = express();
const port = 3000;



// KET NOI DATABASE
const db = require('./DB/config');
const diemthi = require('./DB/DiemThi');
db.ketNoi();
// TEMPLE ENGINE
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        sum: function (a,b) { return a+b; },
    }
});
app.engine('handlebars', hbs.engine);
// override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home')
})

// CRUD
// bodyParse
app.use(
    express.urlencoded({
        extended : true
    })
)

// lấy danh sách
const DiemThi = require('./DB/DiemThi')
app.get('/QUANLYDIEMTHI', (req, res) => {
    DiemThi.find({})
        .then(diemthis => res.render('QUANLYDIEMTHI', {
            diemthis: diemthis.map(diemthis => diemthis.toObject()),
        }))
})
app.get('/QUANLYDIEMTHI/:id/edit', (req,res,next) => {
    DiemThi.findById(req.params.id)
        .then(diemthi => res.render('edit', {
            diemthi : diemthi.toObject()
        }))
        .catch(next) 
      
   
})
// tạo danh sách
app.post('/QUANLYDIEMTHI/create', (req, res) => {
    const diemthi = new DiemThi(req.body)
    diemthi.save()
        .then(() => res.redirect('back'))
})
// lưu danh sách
app.put('/QUANLYDIEMTHI/:id', (req, res) => {
    DiemThi.updateOne({_id : req.params.id}, req.body)
        .then(() => res.redirect('/QUANLYDIEMTHI'))
})
// xóa danh sách
app.delete('/QUANLYDIEMTHI/:id/trash', (req, res) => {
    DiemThi.deleteOne({_id : req.params.id})
        .then(() => res.redirect('back'))
})


app.listen(port, () => {
    console.log(`ứng dụng đang chạy trên http://locahost${port}`)
})