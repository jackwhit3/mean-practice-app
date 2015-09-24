var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',
	function($scope,$http){
		console.log("heello world from controller");
		$http.get('/contactlist').success(function(response){
			console.log("i got the response!");
			$scope.contactlist=response;
		});
}]);

myApp.controller('TestController',function(){
	console.log("2nd controller");
	this.greeting = "Hola!";
});