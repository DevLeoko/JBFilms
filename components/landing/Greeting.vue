<template>
  <v-flex id="greeting" xs12>
    <video autoplay muted loop>
      <source src="~assets/graphics/general/trailer.mp4" type="video/mp4" />
    </video>

    <div id="imgContainer">
      <img src="~assets/graphics/logos/logoIcon.png" />
      <div id="namePopup">Johannes Blenke</div>
    </div>

    <div id="scrollMe" class="hidden-md-and-up">
      <v-icon color="white">touch_app</v-icon> <br />
      <v-icon color="white">keyboard_arrow_down</v-icon> <br />
    </div>
  </v-flex>
</template>

<style lang="scss" scoped>
$breakpoint-sm: 960px;

img {
  width: 100%;
}

#scrollMe {
  cursor: default;
  position: absolute;
  top: 90vh;
  left: 40%;
  width: 20%;
  text-align: center;
  opacity: 0.5;

  br {
    width: 0;
  }
}

#imgContainer {
  position: absolute;
  left: 42.5%;
  width: 15%;
  top: 32vh;

  @media (max-width: $breakpoint-sm) {
    left: 25%;
    width: 50%;
  }
}

#imgContainer:hover > #namePopup {
}

#namePopup {
  color: white;
  // height: 0px;
  font-weight: 700;
  text-align: center;
  font-size: 28px;
  overflow: hidden;
  // animation: 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.5s 1 startUpName;
  // animation-fill-mode: forwards;
  // opacity: 0;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) 2s both;
  // background-color: rgb(44, 44, 44);
}

.flex {
  height: 100vh;
  overflow: hidden;
}
</style>
