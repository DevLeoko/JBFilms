<template>
  <v-app>
    <v-content app>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');

html,
body {
  height: 100%;
  width: 100%;
}

.application {
  font-family: 'Montserrat', sans-serif;
}

@keyframes startUpName {
  0% {
    height: 0px;
  }
  100% {
    height: 40px;
  }
}
</style>
