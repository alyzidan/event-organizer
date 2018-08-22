<template>
  <div>
    <v-alert
      @input="onClose"
      dismissible
      outline
      type="error"
      :value="true"
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
