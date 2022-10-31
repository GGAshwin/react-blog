require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const Post = require('./database/models/Post');
const path = require("path");
app.use(express.static(path.join(__dirname, "/frontend/build")));
const port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())

const url = `mongodb+srv://ashwin:chungus123@cluster0.cjcyr.mongodb.net/blogDB?retryWrites=true&w=majority`;
const localUrl = "mongodb://localhost:27017/blogDB"
// const url = `mongodb+srv:/<username:password>@cluster0.cjcyr.mongodb.net/blogDB?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

app.post('/blog', async (req, res) => {
    const posts = await Post.find({}).sort({ date: -1 })
    // console.log(posts[0].id)
    res.json({ data: posts })
});

app.get('/posts/new', (req, res) => {
    res.render('create')
})

app.get('/post/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    // console.log(post.author,post.title,post.content)
    res.json({ author: post.author, title: post.title, content: post.content })
})

app.post('/post/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    console.log(post)
    res.json({ data: post })
})

//write to the blog
app.post('/posts/store', (req, res) => {
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    console.log(req);
    Post.create(req.body, (error, post) => {
        res.json({ 'status': 'ok' })
    })
});

// delete article
app.post('/blog/:id', (req, res) => {
    const id = req.params.id
    Post.findByIdAndDelete(id, (err) => {
        if (err) throw err
        res.redirect('/blog')
    })
})

// test endpoint
app.get('/api/test', (req, res) => {
    res.send('Working at port ')
})

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging')
    app.get("*", function (_, res) {
        res.sendFile(
            path.join(__dirname, "/frontend/build/index.html"),
            function (err) {
                if (err) {
                    res.status(500).send(err);
                }
            }
        );
    });

app.listen(port, () => {
    console.log('listening on port ' + port);
})