<template>
  <v-layout row wrap>
    <greeting></greeting>
    <navigation></navigation>
  </v-layout>
</template>

<script>
import Greeting from '~/components/landing/Greeting.vue'
import Navigation from '~/components/landing/Navigation.vue'

export default {
  components: {
    Greeting,
    Navigation
  }
}
</script>
