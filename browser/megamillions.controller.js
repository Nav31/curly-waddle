

app.controller('megamillionsCtrl', ($scope, LotteryFactory) => {
	$scope.getMegaMillions = LotteryFactory.getMegaMillions();
});

