'use strict'

app.controller('lotteryCtrl', ($scope, LotteryFactory, $log) => {
	let getInfo = info => $scope.info = info.odds;
	let getNums = numbers => $scope.nums = numbers;
	let getJackpots = jackpots => $scope.value = jackpots
	$scope.hidden = true;

	$scope.getMegaMillions = () => {
		$scope.hidden = false;
		LotteryFactory.getMegaMillions().then(getNums)
		$scope.info = LotteryFactory.getMegaMillionsInfo().then(getInfo)
		$scope.value = LotteryFactory.getJackpots().then(getJackpots) //$scope.value = jackpots[0]
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
		LotteryFactory.getPlay3Info().then(getInfo).catch($log);
	}
	$scope.getPlay4 = () => {
		$scope.hidden = false;
		LotteryFactory.getPlay4().then(getNums)
		LotteryFactory.getPlay4Info().then(getInfo).catch($log);
	}

	$scope.getLucky4Life = () => {
		$scope.hidden = false;
		LotteryFactory.getLucky4Life().then(getNums).catch($log);
		$scope.info = LotteryFactory.getLucky4LifeInfo().then(getInfo).catch($log);
	}
});

