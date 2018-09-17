const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;


const todoSchema = new Schema(
    {
        username: String,
        todo: String,
        isDone: Boolean,
        dueDate: Date
    }
);

const Todos = mongoose.model('ToDos', todoSchema);

module.exports = Todos;
