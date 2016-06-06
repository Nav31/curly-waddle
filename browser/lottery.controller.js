'use strict'

app.controller('lotteryCtrl', ($scope, LotteryFactory, $log) => {
	let getInfo = info => $scope.info = info;
	let getNums = numbers => $scope.nums = numbers;
	$scope.getMegaMillions = () => {
		LotteryFactory.getMegaMillions().then(getNums)
		$scope.info = LotteryFactory.getMegaMillionsInfo().then(getInfo)
		.catch($log);
	}
	$scope.getPowerball = () => {
		LotteryFactory.getPowerBall().then(getNums)
		$scope.info = LotteryFactory.getPowerBallInfo().then(getInfo)
		.catch($log);
	}
});

