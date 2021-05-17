<template>
  <v-container>
    <v-main>
      <v-row cols="12" class="pb-6">
        <back-button goTo="findUsers"></back-button>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        no-data-text="Todavía no tiene favoritos"
        :footer-props="{
          itemsPerPageAllText: 'Todos',
          pageText: pageText,
          itemsPerPageText: 'Filas por página'
        }"
        class="elevation-1"
      ></v-data-table>
      <download-csv
        class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default mt-12"
        :data="users"
        :labels="labels"
        name="Favoritos.csv">
        Descargar CSV
      </download-csv>
    </v-main>
  </v-container>
</template>

<script>
import BackButton from '@/components/BackButton'
export default {
  name: 'favouriteList',
  components: {
    BackButton
  },
  data() {
    return {
      pageText: undefined,
      headers: [
        { text: 'Género', value: 'gender', align: 'center' },
        { text: 'Nombre', value: 'fullName', align: 'center' },
        { text: 'Email', value: 'email', align: 'center' },
        { text: 'Nacionalidad', value: 'nationality', align: 'center' },
        { text: 'Fecha de nacimiento', value: 'bornDate', align: 'center' },
        { text: 'Fecha de registro', value: 'registerDate', align: 'center' },
      ],
      users: this.$store.getters.getFavouriteUsers,
      labels: {
        gender: 'Género',
        fullName: 'Nombre y apellidos',
        email: 'Email',
        nationality: 'Nacionalidad',
        bornDate: 'Fecha de nacimiento',
        registerDate: 'Fecha de registro'
      }
    }
  }
}
</script>
