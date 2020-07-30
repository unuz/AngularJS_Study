
angular.module('todo').factory('todoStorage', function () {
    var TODO_DATA = 'TODO_DATA';
    var storage = {
        todos: [],
        // _로 시작하는 함수는 private
        _saveToLocalStorage: function (data) { // 데이터를 localStorage로 저장
            localStorage.setItem('TODO_DATA', JSON.stringify(data));
        },

        _getFromLocalStorage: function () { // 데이터를 localStorage로 부터 가져옴
            return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
        },

        get: function () {
            //storage.todos = storage._getFromLocalStorage()
            angular.copy(storage._getFromLocalStorage(), storage.todos);
            return storage.todos;
        },

        remove: function (todo) {
            var show = confirm('Are you sure you want to delete?');
            if (show) {
                // find todo index in todos
                var idx = storage.todos.findIndex(function (item) {
                    return item === todo;
                });
                // remove from todos
                if (idx > -1) {
                    storage.todos.splice(idx, 1);
                    storage._saveToLocalStorage(storage.todos);
                }
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
                storage._saveToLocalStorage(storage.todos);
            }
        },

        update: function () {
            storage._saveToLocalStorage(storage.todos);
        }

    }
    return storage;
});

//service
//factory
//provider