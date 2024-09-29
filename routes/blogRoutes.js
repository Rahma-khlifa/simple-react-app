const express=require('express');
const router = express.Router();
const {Blog}=require('../models/blog.model');
router.get('/get-all-blogs',async (req,res)=>{
    try{
    const blogs=await Blog.find({});
    res.send({count:blogs.length,data:blogs});
    }catch(err){
        console.log(err);
        res.status(400).send({message:"something went wrong"});
    }
})
router.get('/blog/:id', async (req,res)=>{
    try{
     const id=req.params.id;
     const response=await Blog.findById(id);
     console.log(response);
     res.send(response);
    }catch(err){
        console.log(err);
        res.status(400).send({message:"something went wrong"});
    }
})
router.put('/blog/:id', async(req,res)=>{
    try{
        const id=req.params.id;
        const data =req.body;
        const response = await Blog.findByIdAndUpdate(id,data,{returnOriginal:false});
        console.log(response);
        res.send(response);
       }catch(err){
           console.log(err);
           res.status(400).send({message:"something went wrong"});
       }

})
router.delete('/blog/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const response = await Blog.findByIdAndDelete(id);
        console.log(response);
        res.send("sucess!");
       }catch(err){
           console.log(err);
           res.status(400).send({message:"something went wrong"});
       }
})
router.post('/create-blog', async (req,res)=>{
    
    try{
     const data=req.body;
     const blog=new Blog(data);
      const response =await blog.save();
      console.log(response);
      res.send(response);

    }catch(err){
        console.log(err);
        res.status(400).send({message:"something went wrong"});

    } 
})
module.exports=router;