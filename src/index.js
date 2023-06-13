const express = require('express');
const app = express();
const port = 3000;
const booksRouter = require('./routes/book');
const prodRouter = require('./routes/prod');
const categoryRouter = require('./routes/category');
const userRouter = require('./routes/user');

// use params body start
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// use params body end

app.get("/", (req, res) => {
    res.send("<div style='color : red'> Hello World. Example API </div>");
})

app.use('/v1/', booksRouter);
app.use('/prod/', prodRouter);
app.use('/category/', categoryRouter);
app.use('/user/', userRouter);

app.get("/message/:mess", (req, res) => {
    let msg = req.params.mess;
    console.log("Message: ", msg);
    res.send('Message is sent....');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})