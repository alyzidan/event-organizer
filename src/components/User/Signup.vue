<template>
  <v-container>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <form>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      type="email"
                      v-model="email"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                      name="password"
                      label="password"
                      id="password"
                      type="password"
                      v-model="password"></v-text-field>
                    </v-flex>
                  </v-layout row>
                  <v-layout>
                    <v-flex xs12>
                      <v-text-field
                      name="confirmPassword"
                      label="confirmPassword"
                      id="confirmPassword"
                      type="password"
                      v-model="confirmPassword"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-btn type="submit">Sign Up</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
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
  data () {
    return {
      email:'',
      password:'',
      confirmPassword:'',
    }
  },
  methods : {
    onSignUp () {
      //Vuex
      console.log('')
    }
  },
  computed : {

  }
}
</script>

