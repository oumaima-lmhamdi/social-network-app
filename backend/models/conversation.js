const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
    {
        members: {
            type : Array,
            unique: true
        }
    },
    {timestamps: true}
);


const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;

// const mongoose = require("mongoose");

// const ConversationSchema = new mongoose.Schema(
//   {
//     members: {
//       type: Array,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Conversation", ConversationSchema);