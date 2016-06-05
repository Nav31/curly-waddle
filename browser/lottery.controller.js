'use strict'

app.controller('lotteryCtrl', ($scope, LotteryFactory, $log) => {
	$scope.getMegaMillions = () => {
		LotteryFactory.getMegaMillions()
		.then(numbers => $scope.numbers = numbers)
		.catch($log);
	}
	$scope.getPowerball = () => {
		LotteryFactory.getPowerBall()
		.then(numbers => $scope.numbers = numbers)
		$scope.info = LotteryFactory.getPowerBallInfo()
		.then(info => $scope.powerInfo = info)
		.catch($log);
	}

});

