function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 26.4317409718542, lng:80.30611359260998 },
        zoom: 18,
        mapId: '1a2aec6d9187c403',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
      });
     
        
       
      const marker = new google.maps.Marker({

       position : { lat: 26.432624840086707, lng:80.30113541300354},
        map,
        title : "Yoshi\'s House",
        icon: {
          url:"https://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153",
          scaledSize: new google.maps.Size(45,31)
        },
        animation: google.maps.Animation.DROP

        
        
        
      });
      const infowindow = new google.maps.InfoWindow({
        content:"Yoshi\'s House",
      });
      marker.addListener("click", () => {
        infowindow.open(map,marker);
        });
    }


///26.4317409718542, 80.30611359260998
///26.432624840086707, 80.30113541300354