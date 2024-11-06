# Jeju_publicWifiMap
Jeju_publicWifiMap은 제주특별자치도의 **공공와이파이의 위치 및 정보**를 표시한 지도이다. 
제주특별자치도는 관광의 목적으로 방문되는 경우가 많고, 이에 따라 공공와이파이의 수요가 많아진다. 그렇기에 Jeju_publicWifiMap은 관광객들이 공공와이파이의 위치를 찾는 것을 용이하게 하는 것을 목적으로 구현하였다.

## Install
### docker
```docker
docker push suryeon/jeju-wifimap:tagname
```
## 기능
* 마커를 통해 카카오맵에 공공와이파이 위치 표시
  * 지도의 다수의 마커를 한번에 표시하면 딜레이가 생겨, 클러스터를 이용하여 마커가 밀집된 곳에는 마커의 개수만 띄우고 확대하였을 때 마커가 나타나도록 함
* 마커를 클릭하였을 때 공공와이파이의 상세정보가 나타나도록 함
  * 공공와이파이의 이름, 주소, 상세위치 표시
  * 한 마커를 클릭하면 이전에 클릭하였던 마커의 상세정보는 사라지도록 구현

## 사용한 API
* 카카오 지도 API (https://apis.map.kakao.com/web/)
* 제주 공공와이파이 AP 정보 (https://www.jejudatahub.net/data/view/data/TOURISM/618)
