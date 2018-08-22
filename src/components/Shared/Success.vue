<template>
  <div>
    <v-alert
      @input="onClose"
      dismissible
      type="success"
      :value="true"
      transition="scale-transition"
      icon="new_releases">
      {{message}}
    </v-alert>
  </div>
</template>
<script>
/* eslint-disable */
  export default {
    props:['message'],
    methods: {
      onClose () {
        this.$emit('dismissed');
      }
    }
  }
</script>
