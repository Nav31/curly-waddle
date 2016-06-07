'use strict'

app.controller('lotteryCtrl', ($scope, LotteryFactory, $log) => {
	let getInfo = info => $scope.info = info;
	let getNums = numbers => $scope.nums = numbers;
	$scope.hidden = true;

	$scope.getMegaMillions = () => {
		$scope.hidden = false;
		LotteryFactory.getMegaMillions().then(getNums)
		$scope.info = LotteryFactory.getMegaMillionsInfo().then(getInfo)
		.catch($log);
	}
	$scope.getPowerball = () => {
		$scope.hidden = false;
		LotteryFactory.getPowerBall().then(getNums)
		$scope.info = LotteryFactory.getPowerBallInfo().then(getInfo)
		.catch($log);
	}
	$scope.getPlay3 = () => {
		$scope.hidden = false;
		LotteryFactory.getPlay3().then(getNums)
	}

});

