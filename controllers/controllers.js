angular.module('todo').controller('TodoCtrl', function ($scope) {
    $scope.todos = [
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
    ];
  
    $scope.remove = function (todo) {
      // find todo index in todos
      var idx = $scope.todos.findIndex(function (item) {
        return item.id === todo.id;
      });
      // remove from todos
  
      if (idx > -1) {
        $scope.todos.splice(idx, 1);
      }
    };
  
    $scope.add = function (newTodoTitle) {
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
        $scope.todos.push(newTodo);
      }
      // empty form
      $scope.newTodoTitle = "";
    };
    
  });
  