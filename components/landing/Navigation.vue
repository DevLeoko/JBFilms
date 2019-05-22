<template>
  <v-flex id="navBar" xs12 text-xs-center>
    <v-layout row wrap>
      <v-flex xs2 offset-xs1>
        <img src="~assets/graphics/logos/logoIcon.png" />
      </v-flex>
      <nav-button>
        Über mich
      </nav-button>
      <nav-button>
        Meine Ausrüstung
      </nav-button>
      <nav-button>
        Portfolio
      </nav-button>
      <nav-button>
        Kontakt
      </nav-button>
    </v-layout>
  </v-flex>
</template>

<style lang="scss" scoped>
#navBar {
  z-index: 2;
  height: 35px;
  margin-top: -35px;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.37),
    rgba(0, 0, 0, 0.616)
  );
}

img {
  height: 30px;
}
</style>

<script>
import NavButton from '~/components/NavButton.vue'

export default {
  components: {
    NavButton
  }
}
</script>
