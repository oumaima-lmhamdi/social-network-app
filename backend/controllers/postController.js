const router = require('express').Router();

const Poste = require('../models/postModel');
 


module.exports.createPost=async (req,res)=>{
  const newPoste= new Poste({
    posterId:req.body.posterId,
    Text:req.body.Text,
    likers:[],
    comments:[]
  });
  newPoste.save().then(poste => res.json(poste))

}

module.exports.deletePost= async (req,res)=>
{
  try{ 
    const post1=await Poste.findById(req.params.id)

    //if(post1.posterId===req.body.posterId){
     await post1.deleteOne();
    res.json("The poste has been deleted succfly");
    /*}
    else(
      res.json('U cant delete this poste')
    )*/
  }
  catch(err){
    res.status(500).json(err)
  }
}

module.exports.readPost= (req,res)=>
{
  
   Poste.find().sort({ createdAt: -1 }).then(posts=> res.json(posts))
 
}
module.exports.readById=async (req, res) => {
  try {
    const post = await Poste.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports.updatePost=async (req, res) => {
  try {
    const post = await Poste.findById(req.params.id);
    if (post.posterId === req.body.posterId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}


module.exports.likePost=(req,res) =>{
 const  posterId="6230bf1aec567aad2aeb2dab";
 const postId = "6229082087f7f517068e1071";

  // Poste.findByIdAndUpdate(req.body.postId,{$push : {likers : req.body.posterId} }, {new : true})
  Poste.findByIdAndUpdate(postId,{$push : {likers : posterId} }, {new : true})
  .exec((err,result) =>{
      if (err) res.json({error : err});
      res.json(result)
  }) 
}
module.exports.unlikePost=(req,res) =>{
  const  posterId="6228ce1b6d624fafffb06787";
 
   Poste.findByIdAndUpdate(req.body.postId,{$pull : {likers : req.body.posterId} }, {new : true})
   .exec((err,result) =>{
       if (err) res.json({error : err});
       res.json(result)
   }) 
 }