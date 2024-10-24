var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(33.37, 126.6),
			level: 3
		};

		var map = new kakao.maps.Map(container, options);
map.setLevel(11);