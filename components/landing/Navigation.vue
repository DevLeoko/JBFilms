<template>
  <v-flex
    id="navBar"
    v-scroll="checkVis"
    :class="hover ? (fix ? 'hover fixed' : 'hover') : ''"
    xs12
    text-xs-center
  >
    <v-layout row wrap>
      <v-flex
        xs2
        offset-xs1
        @click="$vuetify.goTo('#greeting', { offset: 50 })"
      >
        <img src="~assets/graphics/logos/logoIcon.png" />
      </v-flex>
      <nav-button link="about">
        Über mich
      </nav-button>
      <nav-button link="equip">
        Meine Ausrüstung
      </nav-button>
      <nav-button link="portfolio">
        Portfolio
      </nav-button>
      <nav-button link="contact">
        Kontakt
      </nav-button>
    </v-layout>
  </v-flex>
</template>

<style lang="scss" scoped>
#navBar {
  z-index: 2;
  height: 40px;
  margin-top: -40px;
  padding-top: 3px;
  // background-image: linear-gradient(
  //   rgba(0, 0, 0, 0),
  //   rgba(0, 0, 0, 0.37),
  //   rgba(0, 0, 0, 0.616)
  // );
  // background-color: rgba(26, 26, 44, 0.2);
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-property: background-color;

  &:hover {
    background-color: rgba(26, 26, 44, 0.35);
  }

  &.hover {
    background-image: unset;
    background-color: rgba(26, 26, 44, 0.8);
    height: 50px;
    margin-top: -50px;
    padding-top: 7px;

    img {
      margin-top: 4px;
    }
  }

  &.fixed {
    position: fixed;
    top: 0;
    width: 100%;
    margin-top: 0;
  }
}

img {
  margin-top: 2px;
  height: 30px;
  cursor: pointer;
}
</style>

<script>
import NavButton from '~/components/NavButton.vue'

export default {
  components: {
    NavButton
  },
  props: {
    visibilities: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false,
      fix: false
    }
  },
  methods: {
    checkVis: function() {
      this.hover =
        (window.pageYOffset || document.documentElement.scrollTop) > 15
      this.fix =
        (window.pageYOffset || document.documentElement.scrollTop) >
        window.innerHeight - 50
    }
  }
}
</script>
