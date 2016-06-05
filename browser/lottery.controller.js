'use strict'

app.controller('lotteryCtrl', ($scope, LotteryFactory, $log) => {
	var getInfo = info => $scope.info = info
	$scope.getMegaMillions = () => {
		LotteryFactory.getMegaMillions()
		.then(numbers => $scope.numbers = numbers)
		$scope.info = LotteryFactory.getMegaMillionsInfo().then(getInfo)
		.catch($log);
	}
	$scope.getPowerball = () => {
		$scope.nums = () => {
			LotteryFactory.getPowerBall()
			.then(numbers => $scope.numbers = numbers)
			$scope.info = LotteryFactory.getPowerBallInfo().then(getInfo)
			.catch($log);
		}
	}

});

