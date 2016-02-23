'use strict';

/**
 * @ngdoc directive
 * @name geckometerApp.directive:geckoMeter
 * @description
 * # geckoMeter
 */
angular.module('geckometerApp')
  .directive('geckoMeter', geckoMeter);
  geckoMeter.$inject = ['$document', '$timeout'];
  function geckoMeter($document, $timeout){
    return {
      templateUrl: 'partials/gecko-meter.html',
      restrict: 'E',
      scope: {'meter': '='},
      link: function postLink(scope, element, attrs) {
        var options = {
            size: 150,
            lineWidth: 15,
            rotate: 45
        };
        var context;
        var radius;
        var canvas;
        var displayVal;
        
        scope.$watch("meter",function(newValue,OldValue,scope){
            if (newValue){ 
              canvas = document.getElementsByTagName('canvas')[0];
        
            if (typeof(G_vmlCanvasManager) !== 'undefined') {
                G_vmlCanvasManager.initElement(canvas);
            }
            context = canvas.getContext('2d');
            radius = (options.size - options.lineWidth) / 2;
        
            displayVal = {
                max: scope.meter.max - scope.meter.min,
                value: scope.meter.value - scope.meter.min
            }
            console.log('range', displayVal);
        
            drawCircle('#efefef', options.lineWidth, 100 / 100);
            drawCircle('#555555', options.lineWidth, displayVal.value / displayVal.max);   
            }
        });

        $timeout(function(){
            
        }, 0);
    
        function drawCircle(color, lineWidth, percent) {
            console.log('division', percent);
            console.log('circle percent', Math.PI * 2 * percent);
            context.beginPath();
            context.arc(options.size/2, options.size/2, radius, 0, Math.PI * 2 * percent, false);
            context.strokeStyle = color;
            context.lineCap = 'round';
            context.lineWidth = lineWidth
            context.stroke();
        }
      }
    };
  }
