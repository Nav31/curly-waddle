
app.factory('LotteryFactory', ($http) => {
	const parseData = res => res.data;
	return {
		getMegaMillions: () => $http.get('api/megamillions').then(parseData),
		getMegaMillionsInfo: () => $http.get('api/megamillonsInfo').then(parseData),
		getPowerBall: () => $http.get('api/powerball').then(parseData),
		getPowerBallInfo: () => $http.get('api/powerballInfo').then(parseData),
		getPlay3: () => $http.get('api/play3').then(parseData),
		getPlay4: () => $http.get('api/play4').then(parseData)
	};
});

