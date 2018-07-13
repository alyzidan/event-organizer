<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title> Dev Meeting </v-toolbar-title>
      <v-toolbar-side-icon @click="sideNav =! sideNav" blue></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat> Meetups <v-icon right> supervisor_account </v-icon> </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon> supervisor_account </v-icon>
          </v-list-tile-action>
          <v-list-tile-content> Account</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>

    </main>
  </v-app>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      sideNav:false,
    }
  },
  name: 'App'
}
</script>
<style>

</style>
