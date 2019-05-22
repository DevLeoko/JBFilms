<template>
  <v-layout row wrap>
    <greeting></greeting>
    <navigation></navigation>
    <about></about>
    <equip></equip>
    <portfolio></portfolio>
  </v-layout>
</template>

<script>
import Greeting from '~/components/landing/Greeting.vue'
import Navigation from '~/components/landing/Navigation.vue'
import About from '~/components/landing/About.vue'
import Equip from '~/components/landing/Equip.vue'
import Portfolio from '~/components/landing/Portfolio.vue'

export default {
  components: {
    Greeting,
    Navigation,
    About,
    Equip,
    Portfolio
  }
}
</script>
