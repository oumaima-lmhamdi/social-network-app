const router = require("express").Router();
const Conversation = require("../models/conversation");
const User = require('../models/User');

// get a user
router.get("/", async (req,res)=>{
    
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        return res.status(500).json(err);
    }
    });

    router.put("/add", (req,res) =>{
        User.findByIdAndUpdate(req.body.userId,{$push : {friendWith : req.body.friendId} }, {new : true})
        .exec((err,result) =>{
            if (err) res.json({error : err});
            res.json(result)
        }) 

        // conversationController.createConversation;

        const newConversation = new Conversation({
            members: [req.body.userId, req.body.friendId],
          });
        
        
            newConversation.save()
            .then((err,result) =>{
                if (err) res.json({error : err});
                res.json(result)
            }) 
        


    }
)

    // router.patch("/:userId", async (req,res)=>{
    
    //     try{
    //         const user = await User.findById(userId);
    //         updatedUser = user 
    //         res.status(200).json(users);
    //     }catch(err){
    //         return res.status(500).json(err);
    //     }
    //     });



// get a user
router.post("/", async (req,res)=>{
    const newUser = new User(req.body);
    
    try{

        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        return res.status(500).json(err);
    }
    });


// get a user
router.get("/:id", async (req,res)=>{
    
    try{
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc;
        res.status(200).json(other);
    }catch(err){
        return res.status(500).json(err);
    }
    });



// delete a user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
       
       try{
           const user = await User.findByIdAndDelete(req.params.id);

           res.status(200).json("Account has been deleted");


       }catch(err){
           return res.status(500).json(err);
       }
                
     } else {
      return res.status(403).json("You can delete only your account!");
  }
});



module.exports = router;