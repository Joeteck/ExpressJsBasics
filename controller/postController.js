// sample demo data
let posts = [
    {id:1, title:'Post One'},
    {id:2, title:'Post Two'},
    {id:3, title:'Post Three'},
    {id:4, title:'Post Four'},
    {id:5, title:'Post Five'}
];

// @desc  Get all Posts
// @route GET api/post
const getPost = (req,res) =>{
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit>0){
        return res.status(200).json(posts.slice(0, limit));
    }
        res.status(200).json(posts);
};

// @desc Get all posts
// @route GET api/post/:id
const getSinglePost = (req,res, next) =>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id);

    if(!post){
        const error =  new Error(`A post with the id of ${id} was not found. `);
        error.status = 404;
        return next(error);
    } 
    res.status(200).json(post);
};

// @desc Create New Post
// @route POST api/post
const createPost =(req,res, next) =>{
    const newPost = {
        id : posts.length+1,
        title : req.body.title
    }
    if(!newPost.title){
        const error =  new Error(` Please Include a Title `);
        error.status = 400;
        return next(error);
    }
    console.log(req.body);
    posts.push(newPost);
    res.status(201).json(posts);
};

// @desc Update Post
// @route PUT api/post:id
const updatePost =(req,res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id===id);

    if(!post){
        const error =  new Error(`Issue Updating the post.`);
        error.status = 404;
        return next(error);
    }
    post.title = req.body.title;
    res.status(200).json(posts);
};

// @desc Delete Post
// @route DELETE api/post/:id
const deletePost =(req,res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id===id);

    if(!post){
        const error =  new Error(`Issue deleting the post.`);
        error.status = 404;
        return next(error);
    }
    posts = posts.filter((post)=> post.id !== id)
    res.status(200).json(posts);
};


export { getPost, getSinglePost, createPost, updatePost, deletePost };
