const Conversation = require('../models/conversation');

/**
 * handling conversation requests
 */

// Create a conversation

const createConversation = async (req, res) => {
      const newConversation = new Conversation({
        members: [req.body.userId, req.body.friendId],
      });
    
      try {
        const conversation = await newConversation.save();
        res.status(200).json(conversation);
      } catch (err) {
        res.status(500).json(err);
      }
    }

// get conversation with a user
const getConversation = async (req, res) => {
    try {
      const conversation = await Conversation.find({
        members: { $in: [req.params.userId] },
      });
      res.status(200).json(conversation);
    } catch (err) {
      res.status(500).json(err);
    }
  };


module.exports = {
    createConversation,
    getConversation,
}




// const createConversation = (req, res) => {
//     const conversation = new Conversation({
//       members: [req.body.senderId, req.body.receiverId],
//     });
  
//     conversation.save()
//     .then(res.status(200).json(conversation))
//     .catch(err => {
//       console.log(res.status(500).json(err));
//     });
//   }