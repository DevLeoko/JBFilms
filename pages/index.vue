<template>
  <v-layout row wrap>
    <greeting v-observe-visibility="visEvent"></greeting>
    <navigation :visibilities="visibilities"></navigation>
    <about v-observe-visibility="visEvent"></about>
    <equip v-observe-visibility="visEvent"></equip>
    <portfolio v-observe-visibility="visEvent"></portfolio>
    <contact v-observe-visibility="visEvent"></contact>
  </v-layout>
</template>

<script>
import Greeting from '~/components/landing/Greeting.vue'
import Navigation from '~/components/landing/Navigation.vue'
import About from '~/components/landing/About.vue'
import Equip from '~/components/landing/Equip.vue'
import Portfolio from '~/components/landing/Portfolio.vue'
import Contact from '~/components/landing/Contact.vue'

export default {
  components: {
    Greeting,
    Navigation,
    About,
    Equip,
    Portfolio,
    Contact
  },
  data: function() {
    return {
      visibilities: {},
      visEvent: {
        callback: this.visibilityChanged,
        intersection: {
          rootMargin: '-150px 0px -150px 0px'
        }
      }
    }
  },
  methods: {
    visibilityChanged: function(isVis, entry) {
      this.visibilities[entry.target.id] = isVis
      this.visibilities = JSON.parse(JSON.stringify(this.visibilities))
    }
  }
}
</script>
