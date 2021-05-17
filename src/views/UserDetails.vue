<template>
  <v-main>
    <v-row>
      <v-col cols=12 class="pl-14 pt-0">
        <back-button goTo="findUsers"></back-button>
      </v-col>
      <v-col md="2" cols=12>
        <v-img id="logo" :src="user.picture.medium" :max-height="200" contain></v-img>
      </v-col>
      <v-col md="9" cols=12>
        <Map :coordinates="user.location.coordinates"></Map>
      </v-col>
      <v-col md="1" cols=12>
        <v-btn
          icon
          :elevation="0"
          @click="markUserAsFavourite"
        >
          <v-icon :class="{ 'mdi mdi-heart': isFavourite, 'mdi mdi-heart-outline': !isFavourite }"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="pt-6 pl-12">
      <v-col md="6" cols=12 class="text-center">
        <p class="font-weight-bold text-h6">Datos personales:</p>
        <p><span class="font-weight-bold">Nombre completo:</span><span> {{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</span></p>
        <p><span class="font-weight-bold">Correo electrónico:</span><span> {{ user.email }}</span></p>
      </v-col>
      <v-col md="6" cols=12 class="text-center">
        <p class="font-weight-bold text-h6">Datos de localización:</p>
        <p><span class="font-weight-bold">Ciudad:</span><span> {{ user.location.city }}</span></p>
        <p><span class="font-weight-bold">Calle:</span><span> {{ user.location.street.name }} {{ user.location.street.number }}</span></p>
        <p><span class="font-weight-bold">Teléfono móvil:</span><span> {{ user.phone }}</span></p>
        <p><span class="font-weight-bold">Teléfono secundario:</span><span> {{ user.cell }}</span></p>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import BackButton from '@/components/BackButton'
import Map from '@/components/Map'
export default {
  name: 'userDetails',
  props: {
    user: { type: Object, required: true }
  },
  components: {
    BackButton,
    Map
  },
  computed: {
    isFavourite() {
      return this.user.isFavourite
    }
  },
  methods: {
    markUserAsFavourite() {
      this.user.isFavourite = !this.user.isFavourite
    }
  }
}
</script>
