angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.activities', {
    url: '/activities',
    views: {
      'side-menu21': {
        templateUrl: 'templates/activities.html',
        controller: 'activitiesCtrl'
      }
    }
  })

  .state('menu.goals', {
    url: '/goals',
    views: {
      'side-menu21': {
        templateUrl: 'templates/goals.html',
        controller: 'goalsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.help', {
    url: '/help',
    views: {
      'side-menu21': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
      }
    }
  })

  .state('menu.addActivity', {
    url: '/add_activity',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addActivity.html',
        controller: 'addActivityCtrl'
      }
    }
  })

  .state('menu.addNewActivityToGoal', {
    url: '/add_activity_goal',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewActivityToGoal.html',
        controller: 'addNewActivityToGoalCtrl'
      }
    }
  })

  .state('menu.addAGoal', {
    url: '/add_goal',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addAGoal.html',
        controller: 'addAGoalCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});