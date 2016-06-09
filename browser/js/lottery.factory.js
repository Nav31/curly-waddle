

app.factory('LotteryFactory', ($http) => {
	const parseData = res => res.data;
	return {
		getMegaMillions: () => $http.get('api/megamillions').then(parseData),
		getMegaMillionsInfo: () => $http.get('api/megamillonsInfo').then(parseData),

		getPowerBall: () => $http.get('api/powerball').then(parseData),
		getPowerBallInfo: () => $http.get('api/powerballInfo').then(parseData),

		getPlay3: () => $http.get('api/play3').then(parseData),
		getPlay3Info: () => $http.get('api/play3Info').then(parseData),
		
		getPlay4: () => $http.get('api/play4').then(parseData),
		getPlay4Info: () => $http.get('api/play4Info').then(parseData),

		getLucky4Life: () => $http.get('api/lucky4life').then(parseData),
		getLucky4LifeInfo: () => $http.get('api/lucky4lifeInfo').then(parseData),

		getJackpots: () => $http.get('api/getJackpotVals').then(parseData),
		getPrevNums: () => $http.get('api/getPreviousWinningNumbers').then(parseData)
	};
});

