'use strict';
/* global angular */

/**
 * @ngdoc service
 * @name geckometerApp.feedService
 * @description
 * # feedService
 * Service in the geckometerApp.
 */
angular.module('geckometerApp')
  .service('feedService', feedService);
  
  feedService.$inject = ['$http', '$q'];
  function feedService($http, $q){
      var service = {
          getMeter: getMeter
      };
      
      return service;
      
      function getMeter(){
          var deferred = $q.defer();
          
          $http.get('https://widgister.herokuapp.com/challenge/frontend').then(success, error);
          
          return deferred.promise;
          
          function success(response){
              deferred.resolve(response.data);
          }
          
          function error(response){
              console.error('Error retrieving meter values', response.data);
              deferred.reject(response.data);
          }
      }
  }
