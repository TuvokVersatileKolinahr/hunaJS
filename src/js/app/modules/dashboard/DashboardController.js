

app.controller('DashboardController', function($scope, DashboardServices){

  DashboardServices.getHosts().then(function(hosts){
    $scope.hosts = hosts;
    if(hosts && angular.isArray(hosts)){
      $scope.selected = hosts[0];
    }
  });

  // main chart
  var mainChart = c3.generate({
    bindto: '#mainChart',
    data: {
      columns: [
        ['warnings', 30, 200, 100, 300, 150, 250],
        ['errors'  , 50,  20,  10,  40,  15,  25],
        ['info'    , 80,  75, 157,  86, 136, 182]
      ],
      type: 'spline'
    },
    axis: {
      x: {
        type: 'categories',
        categories: ['1 March 2015','2 March 2015','3 March 2015','4 March 2015','5 March 2015','6 March 2015']
      },
      y: {
        label: {
          text: 'Error Count',
          position: 'outer-middle'
        }
      }
    }
  });

  var relationsChart = c3.generate({
    bindto: '#relationChart',
    data: {
      columns: [
        ['warnings', 30, 200, 100, 300, 150, 250],
        ['errors'  , 50,  20,  10,  40,  15,  25],
        ['info'    , 80,  75, 157,  86, 136, 182]
      ],
      type: 'donut'
    },
    donut: {
        title: "Errors / warnings / info"
    }
  });

  $scope.select = function(host){
    $scope.selected = host;
  };

});