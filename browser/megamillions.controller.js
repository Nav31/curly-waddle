

app.controller('megamillionsCtrl', ($scope, LotteryFactory, $log) => {
	$scope.getMegaMillions = () => {
		LotteryFactory.getMegaMillions()
		.then(numbers => $scope.numbers = numbers)
		.catch($log);
	}
});

