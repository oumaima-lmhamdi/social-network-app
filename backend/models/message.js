const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
    {

        conversationId: {
            type : String,
            required: true,
        },
        sender: {
            type : String,
            unique: false
        },
        content: {
            type : String,
            unique: false
        }

    },
    {timestamps: true}
);

module.exports = mongoose.model('Message', MessageSchema);