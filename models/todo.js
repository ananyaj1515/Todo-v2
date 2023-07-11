const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,

    },
});

module.exports = new mongoose.model("Todo", toDoSchema);