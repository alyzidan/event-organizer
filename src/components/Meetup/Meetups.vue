<template>
  <v-container>
    <v-flex xs12 sm10 md8 offset-md2>
      <v-card class="info pa-0 mb-4"  v-for="(meetup,i) in meetUps" :key="i">
        <v-container fluid>
          <v-layout row>
            <v-flex xs5 md3>
              <v-card-media
                :src="meetup.src"
                height="180"
                >
              </v-card-media>
            </v-flex>
            <v-flex md9>
              <v-card-title primary-title>
                <div>
                  <h2 class="white--text">{{meetup.title}}</h2>
                  <div>{{meetup.date}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn :to="`/meetups/${meetup.id}`" flat class="white--text">
                  <v-icon>arrow_forward</v-icon>
                  View Meetup
                </v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-container>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<script>
/* eslint-disable */
export default {
  computed:{
    meetUps () {
      return this.$store.getters.loadedMeetups;
    }
  }
}
</script>

