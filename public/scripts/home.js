angular.module('caceMusic', ['ngRoute'])

.run(['$rootScope', '$location', function ($rootScope, $location) {
    
    $rootScope.$on('$routeChangeStart', function (event, next, current) {

    	if (next.$route.controller == "")
    	{
    		$location.path("/");	
    	}
        
    });
}])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
			controller: 'artistsCtrl',
			templateUrl: '/views/ArtistMenu.html'
		});

	$routeProvider.when('/ErrolMcGlashan', {
			controller: 'ErrolMcGlashanCtrl',
			templateUrl: '/views/ErrolMcGlashan.html'
		});
}]) 

.controller('artistsCtrl', ['$scope', '$location', function($scope, $location) {
	//$scope.artist = "";
	
	$scope.artistClick = function(artistNumber) {
		switch (artistNumber)
		{
			case 1: 
			{
				$location.path("/ErrolMcGlashan");
			}
			
		}
		
	};	
}])

.controller('ErrolMcGlashanCtrl', ['$scope', '$location', function($scope, $location) {
	
 }]);