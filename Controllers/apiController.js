const Todos = require("../models/todoModel.js");
const bodyParser = require('body-parser');
const moment = require('moment');


module.exports = function (app) {

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());


    app.get('/api/todo/all/open/:numdays', function (req, res) {
        let ageDays = req.params.numdays;
        console.log('Checking for Todos older than ${ageDays} days.')
        var cutoff = moment().subtract(ageDays, "days")
        console.log(cutoff);

        Todos.find({$and: [{dueDate: {$lte: cutoff}}, {isDone: false}]}, function (err, todos) {
            if (err){
                throw err;
            }
            res.send(todos);

        })
    };







    // Get all open ToDos
    app.get('/api/todo/all/open', function (req, res) {
        Todos.find({isDone: false }, function (err, todos) {
            if (err) {
                throw err;
            }
            //We got results
            res.send(todos);
        })
    });

    //Implement routes for the API
    app.get('/api/todo/:username', function (req, res) {

        Todos.find({username: req.params.username}, function (err, todos) {

            if (err) {
                throw err;
            }
            //We got results
            res.send(todos);
        })

    });
    // ROUTE: GET a specific ToDo list item by it's record ID
    app.get('/api/todo/:id', function (req, res) {

        Todos.findById({_id: req.params.id}, function (err, todo) { //Use the findID method on the data model to search DB
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send the JSON back to the client in the web response
            res.send(todo);
        });

    });

// ROUTE: POST (create) a new Todo item to my list
    app.post('/api/todo', function (req, res) {

        const newTodo = Todos({
            username: req.body.username,
            todo: req.body.todo,
            isDone: req.body.isDone,
            // hasAttachment: req.body.hasAttachment
        });
        newTodo.save(function (err) {
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'OK'});
        });

    });

// ROUTE: UPDATE and existing item
    app.put('/api/todo', function (req, res) {

        Todos.findOneAndUpdate(req.body.id, {
            todo: req.body.todo,
            isDone: req.body.isDone,
            //  hasAttachment: req.body.hasAttachment
        }, function (err, todo) {
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'OK'});
        });
    });

// ROUTE: DELETE an existing todo item by its ID
    app.delete('/api/todo', function (req, res) {

        Todos.findByIdAndRemove(req.body.id, function (err) {
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'OK'});
        })

    });

};
