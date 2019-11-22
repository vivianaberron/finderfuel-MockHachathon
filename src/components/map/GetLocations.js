// import React from 'react';
// import axios from 'axios';

// export default class LocationList extends React.Component {
//        constructor(props) {
//           super(props);
//           console.log('constructor-prueba')
//           this.state = {
//             GasLocations: {
//               lat: "",
//               lng: ""
//             }
//           };
    
//       componentDidMount() {
//         axios.get('https://cors-anywhere.herokuapp.com/https://api-gas-stations-mex.herokuapp.com/gasstations')
//         .then(response => {
//             console.log(response)
//             this.setState({
//                 locationsInfo: response.data
//             });
//         }).catch(error => {console.log(error);});
//     }
// }
// }
    // fetch('https://www.datos.gov.co/resource/g373-n3yy.json')
    // .then(response => response.json())
    // .then(locations => {
    //     console.log(locations)

    //     response.forEach(data => {
    //         let locationsData = {
    //             position:{lat:data.location.x[1],lng:data.location.y[0]},
    //             name: data.name                
    //         }
    //         locationsInfo.push(locationsData)
    //     })
    //     if(navigator.geolocation){
    //         navigator.geolocation.getCurrentPosition((data)=>{
    //             let currentPosition = {
    //                 lat: data.location.x,
    //                 lng: data.location.y
    //             }
    //             initMap(currentPosition)
    //         })
    //     }
    // }
//     render(){
//         return(
//             <ul>
//                 {this.state.data.map(info => <li key={info.index}>{info.location.x} </li>)}
//             </ul>
//         )
//     }

// }
// import React from 'react';
// import axios from 'axios';

// export class LocationList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           Gaslocations: {
//             x: "",
//             y: ""
//           }
//         };
        
//       }

//     componentDidMount(){
//        axios.get('https://cors-anywhere.herokuapp.com/https://api-gas-stations-mex.herokuapp.com/gasstations')
//            .then(response => {
//                console.log(response)
//                this.setState({
//                    data: response.data
//                });
//            }).catch(error => {console.log(error);});
//        }
//        render(){
//            return(
//                <ul>
//                    {this.state.data.map(info => <li key={info.index}>{info.location.x} </li>)}
//                </ul>
//            )
//        }
// }
// import React, { Component } from 'react';
// import { Marker } from 'google-maps-react';


// export class MapStations extends React.Component {
//     state = {
//         showingInfoWindow: false,
//         activeMarker: {},
//         selectedPlace: {}
//       };
//    getLocations() { ()=> {
//     fetch('https://cors-anywhere.herokuapp.com/https://api-gas-stations-mex.herokuapp.com/gasstations')
//     .then(response => response.json())
//     .then(locations => {
//         let locationsInfo = [];
        
//         locations.forEach(gasLocation => {
//             if (gasLocation.gas_price) {
//                 let locationData = {
//                   position: {
//                     lat: Number(gasLocation.location.y),
//                     lng: Number(gasLocation.location.x)
//                   },
//                   name: gasLocation.name,
//                   price: gasLocation.gas_price.$t,
//                   type: gasLocation.gas_price.type
//                 };
//                 locationsInfo.push(locationData);
//               } else {
//                 let locationData = {
//                   position: {
//                     lat: Number(gasLocation.location.y),
//                     lng: Number(gasLocation.location.x)
//                   },
//                   name: gasLocation.name
//                 };
//                 locationsInfo.push(locationData);
//               }
//             });
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition((data)=>{
//                 let currentPosition = {
//                     lat: data.coords.latitude,
//                     lng: data.coords.longitude
//                 }
//                 dibujarMapa(currentPosition, locationsInfo)
//             })
//         }
//     })
// };

// render() {
// return (
    
//       <Marker onClick={this.onMarkerClick} name={'current location'} />
//     </div>
//   );
// }}}


export default function Map()

//    let map = new google.maps.Map(document.getElementById('map'),{
//         zoom: 10,
//         center: obj,
//         zoomControl: true,
//         scaleControl: true
//     });

//     let icon = {
//         url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // url
//         scaledSize: new google.maps.Size(50, 50), // scaled size
//         origin: new google.maps.Point(0, 0), // origin
//         anchor: new google.maps.Point(0, 0) // anchor
//       };
    
//       let marker = new google.maps.Marker({
//         position: obj,
//         title: "Tu ubicacion",
//         icon: icon
//       });
//       marker.setMap(map);
    
//       let markers = locationsInfo.map(place => {
//         return new google.maps.Marker({
//           position: place.position,
//           map: map,
//           title: place.name
//         });
//       })
// window.addEventListener('load',getLocations);