const Todos = require('../models/todoModel.js');

module.exports = function (app) {

    app.get('/api/setupTodos', function (req,res) {

        const starterTodos = [
            {
                username: 'rBachman',
                todo: 'Get new teacher with better manners',
                isDone: false
            },
            {
                username: 'rBachman',
                todo: 'get snacks',
                isDone: false
            },
            {
                username: 'rBachman',
                todo: 'something else',
                isDone: false
            }

        ];
        Todos.create(starterTodos, function (err,results) {
            res.send(results);

        })
    })

};
