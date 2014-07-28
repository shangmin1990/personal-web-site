/**
 * Created by benjamin on 14-6-12.
 */
angular.module("website.service",[])
    .factory('TodoService',['$timeout', function($timeout){
      return {
        getAllTodos: function(){
          $timeout(function(){
            return [{title:5,completed:true},{title:"Test you aaa",completed:false}];
          },3000);
        }
      }
    }]);