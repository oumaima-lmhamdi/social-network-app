const router = require('express').Router();
const messageController = require('../controllers/messageController');

// router.post('/', messageController.createMessage);

// const Message = require("../models/message");

//add

router.post("/", messageController.createMessage);
router.get("/", messageController.getAllMessages);
router.get("/:conversationId", messageController.getMessages);

module.exports = router;