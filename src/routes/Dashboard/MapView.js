import React from 'react';
import EsriLoaderReact from 'esri-loader-react';
// import styles from './Analysis.less';

export default class iMapView extends React.PureComponent {
  componentWillUnmount() {
    console.log(this.mapView);
  }
  render() {
    const options = {
      url: 'https://js.arcgis.com/4.5/',
    };
    return (
      <EsriLoaderReact
        options={options}
        modulesToLoad={['esri/Map', 'esri/views/MapView']}
        onReady={({ loadedModules: [Map, MapView], containerNode }) => {
          this.mapView = new MapView({
            container: containerNode,
            map: new Map({ basemap: 'oceans' }),
          });
          this.mapView.focus();
        }}
      />
    );
  }
}
