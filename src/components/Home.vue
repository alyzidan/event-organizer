<template>
  <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 class="text-xs-center text-sm-center">
          <v-btn large router to="/meetups" class="info"> view meetups </v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-center">
          <v-btn large router to="/new" class="warning"> Create meetup </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="!contentLoaderState">
        <v-container>
          <v-flex xs12 class="text-xs-center text-sm-center">
          <content-loader
            :height="475"
            :width="1137"
            :speed="1"
            primaryColor="#d7d7d7"
            secondaryColor="#ecebeb"
          >
            <circle cx="550" cy="450" r="7" />
            <circle cx="570" cy="450" r="7" />
            <circle cx="590" cy="450" r="7" />
            <circle cx="610" cy="450" r="7" />
            <rect x="100" y="30" rx="5" ry="5" width="950" height="400" />
          </content-loader>
          </v-flex>
        </v-container>

      </v-layout>
      <v-layout row wrap v-if="contentLoaderState">
        <v-flex xs12 class="mt-4">
          <v-carousel
              delimiter-icon="stop"
              prev-icon="mdi-arrow-left"
              next-icon="mdi-arrow-right"
            >
              <v-carousel-item
                v-for="(slide,i) in slides"
                :key="i"
                :src="slide.src"
              >
              <h1
              class="mt-2"
              @click="onLoadMeetup(slide.id)"
              style="cursor:pointer">{{slide.title}}</h1
              ></v-carousel-item>
            </v-carousel>
        </v-flex>
      </v-layout>
      <v-layout>
         <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Material Design</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <div>
    <div class="text-xs-center">
      <v-btn
        color="primary"
        @click="alert = !alert"
      >
        Toggle
      </v-btn>
    </div>
    <v-alert
      :value="alert"
      type="success"
      transition="fade-transition"
    >
      This is a success alert.
    </v-alert>
  </div>
        </v-flex>
        </v-layout>
    <!-- <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          Home component
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition> -->
  </v-container>
</template>
<script>
  /* eslint-disable */
import {ContentLoader, FacebookLoader, CodeLoader, BulletListLoader, InstagramLoader, ListLoader} from 'vue-content-loader'
export default {
  data () {
    return {
              alert: true
    }
  },
  created () {
    this.$store.dispatch('loadMeetUp');
  },
  computed:{
    slides () {
      return this.$store.getters.featuredMeetupForCarousel
    },
    contentLoaderState () {
      return this.$store.getters.getMainEventState
    }
  },
methods:{
  onLoadMeetup (id) {
    this.$router.push(`/meetups/${id}`)
  }
},
components:{
  ContentLoader,
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
