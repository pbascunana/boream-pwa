<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-spacer></v-spacer>
    <v-btn class="ml-2" text @click="$router.push('/favourites')">Favoritos</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
