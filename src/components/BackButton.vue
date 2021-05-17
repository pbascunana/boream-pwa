<template>
  <v-btn
    icon
    :elevation="0"
    @click="goToPreviousState"
  >
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'backButton',
  props: {
    goTo: { type: String, required: true }
  },
  methods: {
    goToPreviousState() {
      this.$router.push({ name: this.goTo })
    }
  }
}
</script>
