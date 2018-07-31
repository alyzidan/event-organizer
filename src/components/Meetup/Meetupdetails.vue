<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="primary--text">
              {{meetup.title}}
            </h3>
          </v-card-title>
          <v-card-media
          :src="meetup.src"
          height="320"
          >
          </v-card-media>
          <v-card-text>
            <div>
              <h4>{{meetup.title}} </h4>
              <p>{{meetup.date}}</p>
              <p>{{meetup.description}}</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :loading="false"
              :disabled="false"
              class="white--text primary"
              @click.native="loader = 'loading3'"
              flat
            >
            <v-icon left dark>cloud_upload</v-icon>
              register for this event
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<script>
/* eslint-disable */
export default {
  props:['id'],
  computed:{
    meetup () {
      return this.$store.getters.loadedMeetup(this.id);
    }
  },
 /*  data () {
      return {
        loading3:false,
        loader:null,
      }
  },
  methods:{
    onLoadMeetup () {

    }
  } */
}
</script>
