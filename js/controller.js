/**
 * Created by benjamin on 14-6-12.
 */
angular.module("website.controller",[])
    .controller("WriteCommentCtrl",["$scope",'$state','$stateParams',function($scope,$state,$stateParams){
      console.log($state);
      console.log($stateParams);
      $scope.publishComment = function(evt){
        $state.go('^',$stateParams)
      };
      $scope.cancel = function(evt){
        $state.go('^',$stateParams)
      }
    }]).controller('MusicListCtrl',['$scope',function($scope){
      var list = [];
      var obj = {};
      obj.title = "小苹果";
      obj.artist = "筷子兄弟";
      obj.url = 'http://cc.stream.qqmusic.qq.com/C1000035GveV3i9dBM.m4a?fromtag=52';
      obj.special = 'xxx主题曲';
      var obj2 = {};
      obj2.title = "The Saltwater Room";
      obj2.artist = "Owl City";
      obj2.url = 'http://cc.stream.qqmusic.qq.com/C10000336GOt2vRgQh.m4a?fromtag=52';
      obj2.special = 'xxx主题曲';
      var obj3 = {};
      obj3.title = "all alone with you";
      obj3.artist = "心理测量者";
      obj3.url = 'http://cc.stream.qqmusic.qq.com/C100000uX2eS4NlvrX.m4a?fromtag=52';
      obj3.special = 'all alone with you';

      list.push(obj);
      list.push(obj2);
      list.push(obj3);
      $scope.musicList = list;
    }])
    .controller("TodosCtrl", ['$scope', '$state', 'todos', 'promiseObj', 'promiseObj2', function($scope, $state, todos, promiseObj, promiseObj2){

      console.log(promiseObj);
      console.log(promiseObj2);
      $scope.time = "1:00:00";

      $scope.todos = todos;

      $scope.filter = $state.filter;

      $scope.newTodo = '';

      $scope.$watch('todos',function(){
        console.log("todos has changed");
      },true);


      /**
       * Count the number of incomplete todo items.
       *
       * @returns {number}
       */
      $scope.remainingCount = function () {
        var remaining = 0;
        angular.forEach(this.todos, function (todo) {
          remaining += todo.completed ? 0 : 1;
        });
        return remaining;
      };

      /**
       * Add a new todo item to the list, resets the new item text.
       */
      $scope.addTodo = function () {
        if (this.newTodo) {
          var todo = {};
          todo.title = this.newTodo;
          todo.completed = false;
          this.newTodo = '';
          this.todos.push(todo);
        }
      };

      /**
       * Begin editing of an item.
       */
      $scope.editTodo = function (todo) {
        $scope.editedTodo = todo;
      };

      /**
       * Cancel editing.
       */
      $scope.doneEditing = function () {
        $scope.editedTodo = null;
      };

      /**
       * Delete an individual todo by removing it from the list.
       *
       * @param todo
       */
      $scope.removeTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        console.log(index);
        this.todos.splice(index,1);
      };

      /**
       * Remove all completed todos from the list
       */
      $scope.clearDoneTodos = function () {
        var todos = this.todos;
        angular.forEach(this.todos, function (todo) {
          if (todo.completed) {
            var index = $scope.todos.indexOf(todo);
            $scope.todos.splice(index,1);
          }
        });
      };

      /**
       * Toggle the completed status of all items.
       *
       * @param done
       */
      $scope.markAll = function (done) {
        angular.forEach(this.todos, function (todo) {
          todo.completed = done;
        });
      };

      $scope.$watch('filter', function (filter) {
        $scope.statusFilter = (filter === 'active') ?
        { completed: false } : (filter === 'completed') ?
        { completed: true } : null;
      });


    }]);