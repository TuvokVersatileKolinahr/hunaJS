app.service('DashboardServices', function($q){

  /**
   * Returns all domains which the current user is registered to
   */
  var mockHosts = [
    {'host':'elgervanboxtel.nl'}, 
    {'host':'wouterroosendaal.nl'}, 
    {'host':'tuvok.nl'}
  ];
  getHosts = function(){
    return $q(function(resolve, reject) {
      resolve(mockHosts); 
    });
  };
  var mockData = [
    {
      "errorComponent":"RegisterController.js",
      "line":23,
      "column":64,
      "ip":"206.45.67.30",
      "occurrences":1523
    },{
      "errorComponent":"RegisterController.js",
      "line":128,
      "column":99,
      "ip":"127.0.0.1",
      "occurrences":1478
    },{
      "errorComponent":"RegisterController.js",
      "line":542,
      "column":33,
      "ip":"172.56.52.13",
      "occurrences":892
    },{
      "errorComponent":"app.js",
      "line":150,
      "column":30,
      "ip":"127.0.0.1",
      "occurrences":253
    },{
      "errorComponent":"LoginController.js",
      "line":1501,
      "column":20,
      "ip":"82.26.64.3",
      "occurrences":240
    },{
      "errorComponent":"RegisterController.js",
      "line":88,
      "column":126,
      "ip":"72.62.84.2",
      "occurrences":55
    },{
      "errorComponent":"RegisterController.js",
      "line":23,
      "column":64,
      "ip":"98.26.35.2",
      "occurrences":12
    }
   ];
  getData = function() {
    return $q(function(resolve, reject) {
      resolve(mockData);
    });
  };
  return {
    getHosts:getHosts
  };

});