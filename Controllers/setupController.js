const Todos = require('../models/todoModel.js');
const moment = require('moment');

module.exports = function (app) {

    app.get('/api/setupTodos', function (req, res) {

        const starterTodos = [
            {
                username: 'rBachman',
                todo: 'Get new teacher with better manners',
                isDone: false,
                dueDate: moment().subtract(10, 'days').calendar()
            },
            {
                username: 'rBachman',
                todo: 'get snacks',
                isDone: false,
                dueDate: moment().subtract(4, 'days').calendar()
            },
            {
                username: 'rBachman',
                todo: 'something else',
                isDone: false,
                dueDate: moment().subtract(, 'days').calendar()
            }

        ];
        Todos.create(starterTodos, function (err, results) {
            res.send(results);

        })
    })

};
