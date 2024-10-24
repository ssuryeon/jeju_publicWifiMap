var search = document.getElementById('search');
search.addEventListener('click', function(){
    var input_address = document.getElementById('address').value;
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(input_address, function(result, status){
        if (status === kakao.maps.services.Status.OK){
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            map.setCenter(coords);
            map.setLevel(5);
        }
        else{
            alert('주소 검색에 실패했습니다.');
        }
    });
});