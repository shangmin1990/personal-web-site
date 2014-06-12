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
    }]);