<template>
  <v-app id="inspire">
        <!-- <v-navigation-drawer
          v-model="drawerRight"
          fixed
          right
          clipped
          app>
          <v-list dense>
            <v-list-tile @click.stop="right = !right">
              <v-list-tile-action>
                <v-icon>exit_to_app</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer> -->
      <v-toolbar
        color="white"
        fixed
        app
        clipped-right
      >
      <v-toolbar-side-icon @click.stop="left = !left" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
          <router-link class="primary--text" to="/" tag="span" style="cursor: pointer">
            Meetups
          </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          right
          router
          class="primary--text"
          v-for="item in DynamicMenuItems"
          :to="item.route"
          :key="item.title">
          <v-icon left dark>{{item.icon}}</v-icon>
          {{item.title}} </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-navigation-drawer
      v-model="left"
      temporary
      fixed
    >
    <v-list dense>
        <v-list-tile
          v-for="item in DynamicMenuItems"
          :key="item.title"
          :to="item.route"
          @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-layout v-if="success" transition="scale-transition" class="floating">
        <v-flex>
          <v-container fluid>
            <success :message="success.message" @dismissed="onDismissed"></success>
          </v-container>
        </v-flex>
      </v-layout>

    <v-navigation-drawer
      v-model="right"
      right
      temporary
      fixed
    ></v-navigation-drawer>
    <v-footer color="blue" class="white--text pa-3" app>
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable */
  export default {
    computed : {
      success () {
        return this.$store.getters.getSuccessState
      },
      DynamicMenuItems () {
        if (this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined) {
          return [
            {icon: 'supervisor_account', title: 'View Meetups', route:'/meetups'},
            {icon: 'room', title: 'Organize Meetup', route:'/new'},
            {icon: 'person', title: 'Profile', route:'/profile'}
          ]
        } else {
          return [
            {icon: 'face', title: 'Sign up', route:'/signup'},
            {icon: 'lock_open', title: 'Sign in', route:'/signin'}
          ]
        }
      }
    },
    methods : {
      onDismissed () {
        this.$store.dispatch('clearSuccess');
      }
    },
    data () {
      return {
        drawer: false,
        drawerRight: true,
        right: null,
        left: null,
        menuItems:[
          {icon: 'supervisor_account', title: 'View Meetups', route:'/meetups'},
          {icon: 'room', title: 'Organize Meetup', route:'/new'},
          {icon: 'person', title: 'Profile', route:'/profile'},
          {icon: 'face', title: 'Sign up', route:'/signup'},
          {icon: 'lock_open', title: 'Sign in', route:'/signin'}
        ]
      }
    },
    props: {
      source: String
    }
  }
</script>
<style>
.floating{
  position: fixed !important ;
  z-index: 9999999;
  bottom: 45px;
  right:10px;
  width:350px
}
</style>
