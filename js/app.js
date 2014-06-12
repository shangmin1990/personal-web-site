angular.module("website",[
  'ui.router',
  'website.controller',
  'website.filter',
  'website.directive',
  'website.service'
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
    url: "/article",
    //mean 此状态不能被单独激活.只能由其子状态激活
    abstract:"true",
    templateUrl:'template/article/article.html'
  });
  ////////////////////
  ///article > all///
  //////////////////
  $stateProvider.state('all',{
    url: "/all",
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

  $stateProvider.state('photo',{
    
  });
}]);