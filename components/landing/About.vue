<template>
  <v-flex id="about" xs8 offset-xs2 lighten-3>
    <v-layout row wrap my-5 pa-5 justify-center align-center>
      <v-flex xs4 text-xs-center>
        <img src="~assets/graphics/general/Jojo3.png" />
      </v-flex>
      <v-flex xs8 pl-4>
        <h1>Hey,</h1>
        <h2>ich bin Johannes!</h2>
        <p>
          Ich bin 19 Jahre alt und arbeite als Freelancer in der Video
          Produktion. Ich mache Musikvideos, Trailer, Interviews, Werbevideos
          aber auch gerne das passende für dich!
        </p>
        <h1></h1>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<style lang="scss" scoped>
img {
  width: 80%;
  transform: rotateY(180deg);
}
h1 {
  font-size: 30pt;
}
h2 {
  font-size: 23pt;
  font-weight: 600;
}
p {
  font-size: 18pt;
  font-weight: 400;
}

#about {
  padding-top: 15vh;
  padding-bottom: 15vh;
}
</style>
