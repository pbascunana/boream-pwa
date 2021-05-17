<template>
  <div ref="map-root" class="map"></div>
</template>

<script>
import 'ol/ol.css'
import Feature from 'ol/Feature'
import Map from 'ol/Map'
import Point from 'ol/geom/Point'
import VectorSource from 'ol/source/Vector'
import View from 'ol/View'
import { Icon, Style } from 'ol/style'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import { fromLonLat } from 'ol/proj'
import OSM from 'ol/source/OSM'

export default {
  name: 'map',
  props: {
    coordinates: { type: Object, required: true }
  },
  mounted() {
    window.scrollTo(0, 0)
    let position = new Feature({
      geometry: new Point(fromLonLat([this.coordinates.longitude, this.coordinates.latitude]))
    })
    position.setStyle(
      new Style({
        image: new Icon({
          crossOrigin: 'anonymous',
          src: require('../assets/logo.png'),
          scale: 0.2
        })
      })
    )
    let vectorSource = new VectorSource({
      features: [position]
    })
    let vectorLayer = new VectorLayer({
      source: vectorSource,
    })
    let tileLayer = new TileLayer({
      source: new OSM()
    })
    new Map({
      layers: [tileLayer, vectorLayer],
      view: new View({
        zoom: 0,
        center: [0, 0]
      }),
      target: this.$refs['map-root']
    })
  }
}
</script>

<style scoped>
.map {
  width: 100%; 
  height: 350px;
}
</style>
