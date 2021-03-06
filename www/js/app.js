// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

        // setup an abstract state for the tabs directive
          .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
          })

        // Each tab has its own nav history stack:

          .state('tab.dash', {
            url: '/dash',
            views: {
              'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
              }
            }
          })

          .state('tab.dash-server-detail', {
              url: '/dash/:serverId',
              views: {
                  'tab-dash': {
                      templateUrl: 'templates/server-detail.html',
                      controller: 'ServerDetailCtrl'
                  }
              }
          })

          .state('tab.servers', {
            url: '/servers',
            views: {
              'tab-servers': {
                templateUrl: 'templates/tab-servers.html',
                controller: 'ServerCtrl'
              }
            }
          })
          .state('tab.server-detail', {
            url: '/servers/:serverId',
            views: {
              'tab-servers': {
                templateUrl: 'templates/server-detail.html',
                controller: 'ServerDetailCtrl'
              }
            }
          })

          .state('tab.cloudpro', {
              url: '/cloudpro',
              views: {
                  'tab-cloudpro': {
                      templateUrl: 'templates/tab-cloudpro.html',
                      controller: 'CloudproCtrl'
                  }
              }
          })

          .state('tab.account', {
            url: '/account',
            views: {
              'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
              }
            }
          })

          .state('tab.account-detail', {
          url: '/account/:email',
          views: {
              'tab-account': {
                  templateUrl: 'templates/tab-account-detail.html',
                  controller: 'AccountDetailCtrl'
              }
          }
      });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/dash');


    })
    .filter('reverse', function() {
      return function(items) {
        return items.slice().reverse();
      };
    });

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}