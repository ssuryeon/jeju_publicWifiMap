var key = "rtcp252to292p511to32jt2r_t22o_21";
var clusterer = new kakao.maps.MarkerClusterer({
    map: map, 
    averageCenter: true, 
    minLevel: 7, 
    calculator: [50, 150, 300], 
    texts: getTexts,
    styles: [{ 
            width : '30px', height : '30px',
            background: 'rgba(154, 205, 50, 0.8)',
            borderRadius: '15px',
            color: '#000',
            textAlign: 'center',
            fontWeight: 'bold',
            lineHeight: '31px'
        },
        {
            width : '40px', height : '40px',
            background: 'rgba(255, 127, 80, 0.8)',
            borderRadius: '20px',
            color: '#000',
            textAlign: 'center',
            fontWeight: 'bold',
            lineHeight: '41px'
        },
        {
            width : '50px', height : '50px',
            background: 'rgba(255, 165, 0, 0.8)',
            borderRadius: '25px',
            color: '#000',
            textAlign: 'center',
            fontWeight: 'bold',
            lineHeight: '51px'
        },
        {
            width : '60px', height : '60px',
            background: 'rgba(255, 80, 80, .8)',
            borderRadius: '30px',
            color: '#000',
            textAlign: 'center',
            fontWeight: 'bold',
            lineHeight: '61px'
        }
    ]
});

function getTexts( count ) {
    return count;
}

var category = document.getElementById('categories');
category.addEventListener('change', function(){
    clusterer.clear();
    var num = category.options[category.selectedIndex].value;
    if(num=='X'){
        ;
    }
    else{
        var fileName = '';
        if(num==0){
            fileName = 'datas/all_data.json';
        }
        else{
            fileName = `datas/${num}.json`;
        }
        $.get(fileName, function(data) {
            var markers = []
            var infowindows = [];
            $(data).map(function(i, position) {
                var marker = new kakao.maps.Marker({
                    position : new kakao.maps.LatLng(position.latitude, position.longitude)
                });
                markers.push(marker);
                var iwContent = `<div style="font-size:13px;border:1px solid #333;text-align:center;"><div style="padding:5px;background-color:#333;color:#fff;">${position.apGroupName}</div><div style="padding:5px;background-color:#fff;color:black;display:block;">${position.addressDetail}<br>${position.installLocationDetail}</div></div>`;
                var infowindow = new kakao.maps.InfoWindow({
                    content: iwContent,
                    removable: true
                });
                infowindows.push(infowindow);
                kakao.maps.event.addListener(marker, 'click', function() {
                    infowindows.forEach(iw => iw.close());
                    infowindow.open(map, marker);
                });
            });
            clusterer.addMarkers(markers);
        });
    }
})