
angular.module('todo').factory('todoStorage', function () {
    var storage = {
        todos: [
            {
                title: 'JavaScript Study',
                completed: true,
                completedAt: Date.now()
            },
            {
                title: 'ReactJS Study',
                completed: false,
                completedAt: Date.now()
            },
            {
                title: 'AngularJS Study',
                completed: false,
                completedAt: Date.now()
            },
        ],
        get: function () {
            return storage.todos;
        },
        remove: function (todo) {
            // find todo index in todos
            var idx = storage.todos.findIndex(function (item) {
                return item.id === todo.id;
            });
            // remove from todos
            if (idx > -1) {
                storage.todos.splice(idx, 1);
            }
        },
        add: function (newTodoTitle) {
            // create new todo
            var newTodo = {
                title: newTodoTitle,
                completed: false,
                completedAt: Date.now()
            };
            // push into todos
            if (newTodo.title === undefined || newTodo.title === '') {
                alert('Insert in to new to do!!');
            } else {
                storage.todos.push(newTodo);
            }
        }
    }
    return storage;
});

//service
//factory
//provider