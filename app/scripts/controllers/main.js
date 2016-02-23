'use strict';

/**
 * @ngdoc function
 * @name geckometerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geckometerApp
 */
angular.module('geckometerApp')
  .controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject = ['feedService'];
  function MainCtrl(feedService){
    var vm = this;
    
    _activate();
    
    function _activate(){
        feedService.getMeter().then(success , error);
        
        function success(meterData){
            vm.meter = meterData;
        }
        function error(){
            vm.meter = null;
        }
    }
    
  }
