<template>
  <v-card @click="goToUserDetails">
    <v-card-title primary-title>
      <div>
        <p>{{ user.gender }}</p>
        <p>{{ userName }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.nat }}</p>
        <p>{{ user.dob.date }}</p>
        <p>{{ user.registered.date }}</p>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'userCard',
  props: {
    user: { type: Object, required: true }
  },
  computed: {
    userName() {
      return `${this.user.name.title} ${this.user.name.first}  ${this.user.name.last}`
    }
  },
  methods: {
    goToUserDetails() {
      this.$router.push({ name: 'userDetails', params: { user: this.user } })
    }
  }
}
</script>
