'use strict';

angular.module('maps')
  .controller('controllerMap', controllerMap);

// -----------------------------------------------------------------------------------
//
// CONTROLLER: Maps
//
// -----------------------------------------------------------------------------------
controllerMap.$inject = ['$scope'];
/* @ngInject */
function controllerMap($scope) {
  var mpl = this;
  $scope.showPoint = false;

  if ($scope.project) {
    mpl.center = {latitude: $scope.project.lat, longitude: $scope.project.lon};
  } else {
    mpl.center = {latitude: 54.726668, longitude: -127.647621};
  }

  mpl.layers = {};
  mpl.markers = [];

  mpl.map = {
    center: mpl.center,
    zoom: 5,
    options: {
      scrollwheel: false,
      minZoom: 4
    },
    markers: mpl.projectFiltered // array of models to display
  };

  $scope.$watch('showPoint', function(newValue){
    if (newValue) {
      mpl.projectFiltered = mpl.markers;
    } else {
      mpl.projectFiltered = [];
    }
  });

  $scope.$watch('project', function(newValue) {
    if (newValue) {

      mpl.center = {
        latitude: newValue.lat,
        longitude: newValue.lon
      };

      mpl.markers.push({
        id: newValue._id,
        latitude: newValue.lat,
        longitude: newValue.lon
      });
      $scope.showPoint = true;
    }
  });
}
