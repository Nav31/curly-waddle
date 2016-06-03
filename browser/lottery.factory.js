

app.factory('LotteryFactory', ($http) => {
	return {
		getMegaMillions: () => $http.get('api/megamillions');
		getPowerBall: () => $http.get('api/powerball');
	};
});

