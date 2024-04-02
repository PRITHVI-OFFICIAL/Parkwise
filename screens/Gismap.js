import React from 'react';
import MapView,{Marker,Callout} from 'react-native-maps';
import { StyleSheet, View ,Text} from 'react-native';

export default function Gismap() {

  const mapStyle=[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
  ]

  
  return (
    <View style={styles.container}>
    <MapView style={styles.map} initialRegion={{
    latitude: 12.946192536553657,
    longitude: 80.14925624004009,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  customMapStyle={mapStyle}

  >

    <Marker
          pinColor='red'
         
         coordinate={{latitude:  12.946212675858524, longitude: 80.14926739386745}}
        >
         

         <Callout style={{width:200,borderRadius:10}}>
            
            <View>
            <Text style={{fontWeight:"bold"}}>Vatten ID : VT002</Text>
            <Text style={{}}><Text style={{fontWeight:"bold"}}>Name:</Text>  Yashwanth Krishnan B</Text>
            <Text style={{color:'green'}}><Text style={{fontWeight:"bold"}}>Water Tax :</Text> PAID</Text>
            <Text style={{color:'green'}}><Text style={{fontWeight:"bold"}}>Quality Status :</Text> GOOD</Text>
            </View>
            
          </Callout>

        </Marker>


        <Marker
          pinColor='red'
         
         coordinate={{latitude:  12.946275412556815, longitude: 80.14930293313823}}
        >
         

         <Callout style={{width:200,borderRadius:10}}>
            
            <View>
            <Text style={{fontWeight:"bold"}}>Vatten ID : VT001</Text>
            <Text style={{}}><Text style={{fontWeight:"bold"}}>Name:</Text>  Varsha S</Text>
            <Text style={{color:'red'}}><Text style={{fontWeight:"bold"}}>Water Tax :</Text> NOT PAID</Text>
            <Text style={{color:'green'}}><Text style={{fontWeight:"bold"}}>Quality Status :</Text> GOOD</Text>
            </View>
            
          </Callout>

        </Marker>


        <Marker
          pinColor='red'
         
         coordinate={{latitude:  12.946150004603558, longitude: 80.14933525538675}}
        >
         

         <Callout style={{width:200,borderRadius:10}}>
            
            <View>
            <Text style={{fontWeight:"bold"}}>Vatten ID : VT003</Text>
            <Text style={{}}><Text style={{fontWeight:"bold"}}>Name:</Text>  Pravin Kumar P</Text>
            <Text style={{color:'red'}}><Text style={{fontWeight:"bold"}}>Water Tax :</Text> NOT PAID</Text>
            <Text style={{color:'red'}}><Text style={{fontWeight:"bold"}}>Quality Status :</Text> NOT GOOD</Text>
            </View>
            
          </Callout>

        </Marker>

        <Marker
          pinColor='red'
         
         coordinate={{latitude:  12.946017, longitude: 80.149276}}
        >
         

         <Callout style={{width:200,borderRadius:10}}>
            
            <View>
            <Text style={{fontWeight:"bold"}}>Vatten ID : VT004</Text>
            <Text style={{}}><Text style={{fontWeight:"bold"}}>Name:</Text>  Srinithi S</Text>
            <Text style={{color:'orange'}}><Text style={{fontWeight:"bold"}}>Water Tax :</Text> PARTIAL PAID</Text>
            <Text style={{color:'green'}}><Text style={{fontWeight:"bold"}}>Quality Status :</Text> GOOD</Text>
            </View>
            
          </Callout>

        </Marker>


 

        <Marker
          pinColor='blue'
         
         coordinate={{latitude:  12.945862, longitude: 80.149189}}
        >
         

         <Callout style={{width:200,borderRadius:10}}>
            <View>
            <Text style={{fontWeight:"bold"}}>Branch ID : BI002</Text>
            <Text style={{}}><Text style={{fontWeight:"bold"}}>Street Name:</Text>  Nelayappar 2nd Street</Text>
            <Text style={{color:'orange'}}><Text style={{fontWeight:"bold"}}>Total Flow :</Text> 100L</Text>
            <Text style={{color:'green'}}><Text style={{fontWeight:"bold"}}>Leakage Status : </Text>NO </Text>
           
            </View>
            
          </Callout>

        </Marker>

        {/* 12.946275412556815, 80.14930293313823 */}
        {/* 12.946150004603558, 80.14933525538675 */}
        {/* 12.946017, 80.149276 */}
        {/* 12.945856, 80.149286 */}
        {/* 12.945862, 80.149189 */}


  </MapView>
  


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});