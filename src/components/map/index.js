import React, {Component} from 'react'
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'
import {map} from '../../json/map'
const mapStyles = {
  width: '80%',
  height: '100%',
}

export class MapContainer extends Component {
  /* constructor(props) {
    super(props)
  } */

  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }
  markerIcon = (url) => {
    return new window.google.maps.MarkerImage(
      url,
      null /* size is determined at runtime */,
      null /* origin is 0,0 */,
      null /* anchor is bottom center of the scaled image */,
      new window.google.maps.Size(32, 32),
    )
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 10.9878,
          lng: -74.7889,
        }}
      >
        {map.map((site) => {
          return (
            <Marker
              key={site.id}
              onClick={this.onMarkerClick}
              name={site.name}
              position={{
                lat: site.lat,
                lng: site.long,
              }}
              icon={this.markerIcon(
                'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/map-marker-icon.png',
              )}
            />
          )
        })}
        {/*         <Marker
          onClick={this.onMarkerClick}
          name={'Cliente'}
          position={{
            lat: this.props.customerLoc[1],
            lng: this.props.customerLoc[0],
          }}
          icon={this.markerIcon('https://i.ibb.co/C9mPFq6/icon.png')}
        /> */}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBqxbbCD3ffLgLRvKGWKwocWlzTIVbVe1Q',
})(MapContainer)
