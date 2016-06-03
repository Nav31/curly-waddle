
app.factory('LotteryFactory', ($http) => {
	const parseData = res => res.data;
	return {
		getMegaMillions: () => $http.get('api/megamillions').then(parseData),
		getPowerBall: () => $http.get('api/powerball').then(parseData)
	};
});

