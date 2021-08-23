const express = require('express');
const { userInfo } = require('os');
const app = express();
const users = [];

const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

function getUser(req, res) {
    res.json({
        jumlahUser: users.length,
        data: users
    });
}

function getRegister(req, res) {
    return res.render('register');
}

function postRegister(req, res) {
    users.push({
        email: req.body.email,
        password: req.body.password
    })

    res.redirect('/');
}

app.get('/', getUser);

app.get('/register', getRegister);

app.post('/register', postRegister);


app.listen(port);





// app.get('/', (req, res) => {
//     res.render('index');
//     res.send(`Jumlah user ${users.length}`);
// });

// app.get('/greet', (req, res) => {
//     const name = req.query.name || 'void';
//     res.render('greet', {
//         name
//     });
// });


// app.get('/register', (req, res) => {
//     res.render('register');
// });

// app.post('/register', (req, res) => {
//     const { email, password } = req.body;

//     user.push({ email, password })
//     res.redirect('/');
// })