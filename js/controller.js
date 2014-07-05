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
    }]);