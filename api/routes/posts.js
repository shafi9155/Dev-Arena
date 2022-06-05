const router=require("express").Router();
const User=require("../models/User");
const Post = require("../models/Post");
//create Post
 router.post("/",async(req,res)=>{
     const newpost=new Post(req.body);
     try{
         const savepost=await  newpost.save();
         res.status(200).json(savepost);
     }
     catch(err){
         res.status(500).json(err);
     }
 })
//update post
router.put("/:id",async(req,res)=>{
   try{
       const post=Post.findById(req.params.id);
       if(post.username===req.body.username){
           try{
  const updatedpost=await Post.findByIdAndUpdate(
      req.params.id,{
          $set:req.body,
      },
      {new:true}
  );
res.status(200).json(updatedpost);
           }catch(err){
            res.status(500).json(err);
           }
       }
       else{
res.status(401).json("You can only update your own post");
       }
   }
   catch(err){
       res.status(500).json(err);
   }      
});
//delete post
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//get Post
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //GET all post
  router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username });
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports=router