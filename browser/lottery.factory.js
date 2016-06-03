

app.factory('LotteryFactory', ($http) => {
	return {
		getMegaMillions: () => $http.get('api/megamillions')
		.then(res => res.data),
		getPowerBall: () => $http.get('api/powerball')
		.then(res => res.data)
	};
});

