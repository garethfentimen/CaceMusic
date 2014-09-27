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

	$routeProvider.when('/SavageNomads', {
			controller: 'SavageNomadsCtrl',
			templateUrl: '/views/SavageNomads.html'
		});

	$routeProvider.when('/MSet', {
			controller: 'MSetCtrl',
			templateUrl: '/views/MSet.html'
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
				break;
			}
			case 2: 
			{
				$location.path("/SavageNomads");
				break;
			}
			case 3: 
			{
				$location.path("/MSet");
				break;
			}
			
		}
		
	};	
}])

.controller('ErrolMcGlashanCtrl', ['$scope', '$location', function($scope, $location) {
	
}])

.controller('SavageNomadsCtrl', ['$scope', '$location', function($scope, $location) {
	
}])

.controller('MSetCtrl', ['$scope', '$location', function($scope, $location) {
	
 }]);