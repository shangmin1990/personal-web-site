angular.module("website",[
  'ui.router',
  'website.controller',
  'website.filter',
  'website.directive',
  'website.service',
  'ui.website'
]).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider.state('home',{
    url: "/"
  });
  /**
   * module article $urlRouter config begin
   */

  //TODO

  /**
   * module article $state config begin
   */
  $stateProvider.state('article',{
    //mean 此状态不能被单独激活.只能由其子状态激活
    abstract:"true",
    templateUrl:'template/article/article.html'
  });
  ////////////////////
  ///article > all///
  //////////////////
  $stateProvider.state('all',{
    url: "/article",
    parent:'article',
    templateUrl:'template/article/article.all.html'
  });
  ////////////////////
  ///article > type///
  //////////////////
  $stateProvider.state('type',{
    url: "/type",
    parent:'article',
    templateUrl:'template/article/article.type.html'
  });
  ////////////////////
  ///article > trash///
  //////////////////
  $stateProvider.state('trash',{
    url: "/trash",
    parent:'article',
    templateUrl:'template/article/article.all.html'
  });
  ////////////////////
  ///article > newArticle///
  //////////////////
  $stateProvider.state('newArticle',{
    url: "/newArticle",
    parent:'article',
    templateUrl:'template/article/article.newArticle.html'
  });
  //module article config end

  /**
   * module album $state config begin
   */
  $stateProvider.state('album',{
    url:'/album',
    templateUrl:'template/album/album.html'
  });

  /**
   * module comment $state config begin
   */
  $stateProvider.state('comment',{
    url:'/comment',
    templateUrl:'template/comment/comment.html'
  });
  $stateProvider.state('comment.writeComment',{
    url:'/write',
    controller:'WriteCommentCtrl',
    templateUrl:'template/comment/writeComment.html'
  });

  $stateProvider.state('aboutMe',{
    url:'/about',
    templateUrl:'template/aboutMe.html'
  });
  $stateProvider.state('todos',{
    url:'/todos',
    controller: "TodosCtrl",
    resolve:{
      todos: function($timeout, $q){
        var defer = $q.defer();
        $timeout(function(){
          defer.resolve([{title:5,completed:true},{title:"Test you aaa",completed:false}]);
        },1000);
        return defer.promise;
      },
      // Example using function with returned promise.
      // This is the typical use case of resolve.
      // You need to inject any services that you are
      // using, e.g. $http in this example
      promiseObj:  function($http){
        // $http returns a promise for the url data
        return $http({method: 'GET', url: 'http://www.baidu.com'});
      },

      // Another promise example. If you need to do some
      // processing of the result, use .then, and your
      // promise is chained in for free. This is another
      // typical use case of resolve.
      promiseObj2:  function($http){
        return $http({method: 'GET', url: 'http://www.shmin.net'})
            .then (function (data) {
          return data;
        });
      }
    },
    templateUrl:'template/todos/todos.html'
  });
}]);