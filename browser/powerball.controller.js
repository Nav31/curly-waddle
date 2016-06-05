'use strict'

app.controller('powerballCtrl', ($scope, LotteryFactory, $log) => {
	$scope.getPowerball = () => {
		LotteryFactory.getPowerBall()
		.then(numbers => $scope.numbers = numbers)
		$scope.info = LotteryFactory.getPowerBallInfo()
		.then(info => $scope.powerInfo = info)
		.catch($log);
	}
});