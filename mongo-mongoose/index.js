import mongoose from 'mongoose';
import Blog from './model/Blog.js';
import User from './model/User.js';

// PORT=5000
let db_host = 'black';
let db_port = 27017;
let db_name = 'mongmong';
// let db_uri = 'mongodb://black:27017/?directConnection=true';
let db_uri = `mongodb://${db_host}:${db_port}/${db_name}`;
// mongoose.connect("mongodb+srv://<username>:<password>@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
let conn_parms=[
    'directConnection=true'
    ,'retryWrites=true'
    ,'w=majority'
];
let conn_str = `${db_uri}` + '?' + conn_parms.join('&');
// SECRET=secret
mongoose.connect(conn_str);

// Create a new blog post object - Method 1
/*
const article = new Blog({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });


// Insert the article in our MongoDB database
await article.save();


// Find a single blog post
const firstArticle = await Blog.findOne({});
console.log(firstArticle);

// Create a new blog post object - Method 2
// Create a new blog post and insert into database
let article2 = await Blog.create({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });
  
  console.log(article);
*/
  let user = await User.create({
    name: 'Jesse Hall'
    ,email: 'jesse@email.com'
  });

let article = await Blog.create({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    author: user._id,
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });

article = await Blog.findOne({ title: "Awesome Post!" }).populate("author");
console.log(article);