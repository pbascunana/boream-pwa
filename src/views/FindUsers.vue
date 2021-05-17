<template>
  <v-main class="pl-6 pr-6">
    <v-row class="justify-center">
      <v-btn class="mr-2" @click="getUsers">Buscar usuarios</v-btn>
    </v-row>
    <v-row>
      <v-col cols="12" xl="3" lg="4" md="6" v-for="(user, index) in filterUsers" :key="index">
        <user-card :user="user"></user-card>
      </v-col>
    </v-row>
    <v-row v-if="users.length > 0">
      <v-col md="3">
        <v-select
          :items="genders"
          label="Buscar por género"
          v-model="searchByGender"
        ></v-select>
      </v-col>
      <v-col md="3">
        <v-text-field
          label="Buscar por edad"
          append-icon="mdi-magnify"
          v-model="searchByAge"
          autocomplete="off"
        ></v-text-field>
      </v-col>
      <v-col md="3">
        <v-text-field
          label="Buscar por nacionalidad"
          append-icon="mdi-magnify"
          v-model="searchByNationality"
          autocomplete="off"
        ></v-text-field>
       </v-col>
      <p class="pt-10 pl-4">Mostrando {{ filterUsers.length }} usuarios</p>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'
import DATE from '@/helpers/time'

export default {
  name: 'Home',
  components: { 
    userCard: () => import('@/components/userCard')
  },
  data() {
    return {
      genders: ['Todos', 'Male', 'Female'],
      searchByGender: 'Todos',
      searchByAge: '',
      searchByNationality: ''
    }
  },
  computed: { 
    ...mapState(['users']),
    filterUsers() {
      return this.users.filter(user => {
        const filterByGender = this.searchByGender === 'Todos' ? true : user.gender.toLowerCase() === this.searchByGender.toLowerCase()
        const filterByAge = user.dob.age.toString().includes(this.searchByAge)
        const filterByNationality = user.nat.toLowerCase().includes(this.searchByNationality.toLowerCase())
        return filterByGender && filterByAge && filterByNationality 
      })
    }
  },
  methods: {
    async getUsers() {
      this.$store.commit('resetUsers')
      let { data } = await this.$http.get('https://randomuser.me/api/?results=100')
      data.results.map((user) =>  {
        user.isFavourite = false
        user.dob.date = DATE.formatDate(user.dob.date)
        user.registered.date = DATE.formatDate(user.registered.date)
        return user
      })
      this.$store.commit('setUsers', data.results)
    },
    goToFavourites() {
      this.$router.push({ name: 'favourites' })
    }
  }
}
</script>
