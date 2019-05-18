<template>
  <v-layout row wrap text-xl-center>
    <v-flex xs2 offset-xs1>
      <img src="~assets/graphics/logos/logoIcon.png" />
    </v-flex>
    <nav-button>
      Über uns
    </nav-button>
    <nav-button>
      Unsere Ausrüstung
    </nav-button>
    <nav-button>
      Portfolio
    </nav-button>
    <nav-button>
      Schreib uns!
    </nav-button>
  </v-layout>
</template>

<style lang="scss" scoped>
.layout {
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
