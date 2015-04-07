

app.controller('DashboardController', function($scope, DashboardServices, ChartService){


  // update data when selected host has been changed
  $scope.$watch('selected', function(value, oldValue){
    ChartService.getData(value.host).then(function(data){
      mainChart.load(data);
      relationsChart.load(data);
    });
  });


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
      columns: [],
      type: 'spline'
    },
    color: {
        pattern: ['#e67e22','#e74c3c','#E8C53A']
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
    },
    legend: {
      item: {
        onclick: function (id) { 
          relationsChart.toggle(id, {withLegend: false});
          mainChart.toggle(id, {withLegend: false});
        }
      }
    }
  });

  var relationsChart = c3.generate({
    bindto: '#relationChart',
    data: {
      columns: [  ],
      type: 'donut'
    },
    color: {
        pattern: ['#e67e22','#e74c3c','#E8C53A']
    },
    donut: {
        title: "Errors / warnings / info"
    },
    legend: {
      item: {
        onclick: function (id) {
          //debugger;
          relationsChart.toggle(id, {withLegend: false});
          mainChart.toggle(id, {withLegend: false});
        }
      }
    }
  });

  $scope.select = function(host){
    $scope.selected = host;
  };

});