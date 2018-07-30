<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h4 class="primary--text">
          Create new Meeting
        </h4>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-md3>
        <form @submit.prevent="createNewMeetUp">
        <v-layout row>
            <v-flex>
              <v-text-field
              label="Name"
              name="name"
              append-icon="person"
              v-model="title"
              :rules="[() => !!title || 'This field is required']"
               >
            </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex>
              <v-text-field
              label="Location"
              name="location"
              id="location"
              append-icon="room"
              v-model="location"
              :rules="[() => !!location || 'This field is required']"
               >
            </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex>
              <img :src="photo" alt="photoevent">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex>
              <v-text-field
              label="photo"
              name="photo"
              id="photo"
              append-icon="photo"
              v-model="photo"
               >
            </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
               <v-textarea
                  name="input-7-1"
                  box
                  label="description"
                  v-model="description"
                  append-icon="edit"
                  auto-grow
                  :rules="[() => !!location || 'This field is required']"
                ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 md6 offset-md5>
              <v-btn xs12
              type="submit"
              :disabled="!isFormValid"
              class="primary align-center">
              <v-icon left dark>tag</v-icon>
              Submit
              </v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
/* eslint-disable */
export default {
data () {
  return {
    photo:'',
    title:'',
    location:'',
    description:''
  }
},
computed:{
  isFormValid () {
    return this.title!='' &&
           this.location!='' &&
           this.photo != '' &&
           this.description !='';
  },
},
    methods:{
      clickme(){
        console.log('clicked');
      },
      createNewMeetUp () {
        if (!this.isFormValid) {
          return
        }
        const meetUpdata = {
          title: this.title,
          location: this.location,
          photo: this.photo,
          description: this.description,
          date: new Date()
        }
        this.$store.dispatch('createMeetup', meetUpdata);
        setTimeout(() => {
          this.$router.push('/meetups');
        }, 1000);
      }
    }
}
</script>
