

app.controller('megamillionsCtrl', ($scope, LotteryFactory, $log) => {
	console.log("IM HERE BITCH")
	$scope.getMegaMillions = function(){
		LotteryFactory.getMegaMillions()
		.then(numbers => $scope.numbers = numbers)
		.catch($log);
	}
});

