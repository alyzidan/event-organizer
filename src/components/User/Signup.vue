<template>
  <v-container>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-layout v-if="error" class="mb-4">
            <v-flex xs12>
              <the-alert :message="error" @dismissed="onDismissed"></the-alert>
            </v-flex>
          </v-layout>
          <v-card>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onSignUp">
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
                      :rules="[validatePasswordMatch]"
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
                      :rules="[validatePasswordMatch]"
                      v-model="confirmPassword"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>

                      <v-btn xs12
                      style="width:94%"
                        :loading="loading"
                        color="blue"
                        class="white--text"
                        @click.native="loader = 'LoadingBTN'"
                        type="submit"
                        :disabled="!isformFieldsValid"
                      >
                        Submit
                        <v-icon right dark>cloud_upload</v-icon>
                      </v-btn>
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
      LoadingBTN:true,
    }
  },
  methods : {
    onSignUp () {
      this.$store.dispatch('createNewUser',{email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  },
  computed : {
    validatePasswordMatch () {
      return this.password !== this.confirmPassword? 'Passwords doesnt match' : ''
    },
    user () {
      return this.$store.getters.getUser
    },
    error () {
      return this.$store.getters.getErrorState
    },
    loading () {
      return this.$store.getters.getLoadingState
    },
    isformFieldsValid () {
      return this.email !== '' && this.password !=='' && this.confirmPassword !== ''
    }
  },
  watch:{
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/');
      }
    }
  }
}
</script>
