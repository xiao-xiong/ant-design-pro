import React from 'react';
import EsriLoaderReact from 'esri-loader-react';
// import styles from './Analysis.less';

export default class iMapView extends React.PureComponent {
  render() {
    const options = {
      url: 'https://js.arcgis.com/4.5/',
    };
    return (
      <EsriLoaderReact
        options={options}
        modulesToLoad={['esri/Map', 'esri/views/MapView']}
        onReady={({ loadedModules: [Map, MapView], containerNode }) => {
          const mapView = new MapView({
            container: containerNode,
            map: new Map({ basemap: 'oceans' }),
          });
          mapView.focus();
        }}
      />
    );
  }
}
