<template>
  <v-flex xs12>
    <video
      autoplay
      muted
      loop
      src="~assets/graphics/general/trailer.mp4"
    ></video>

    <div id="imgContainer">
      <img src="~assets/graphics/logos/logoIcon.png" />
      <div id="namePopup">Johannes Blenke</div>
    </div>
  </v-flex>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}

#imgContainer {
  position: absolute;
  left: 42.5%;
  width: 15%;
  top: 32vh;
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
