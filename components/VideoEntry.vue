<template>
  <v-layout class="videoEntry" row wrap pa-3 mb-4>
    <v-flex :order-xs2="reversed" xs7 px-3>
      <iframe
        width="100%"
        height="400"
        :src="`https://www.youtube-nocookie.com/embed/${videoId}?controls=0`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-flex>
    <v-flex :order-xs1="reversed" xs5 px-3 text-xl-center>
      <v-layout row wrap align-center fill-height>
        <v-flex xs12>
          <slot></slot>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
.videoEntry {
  border-radius: 3px;
  background-color: rgb(240, 240, 245);
  // background-color: #eaecf1;
}
</style>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    },
    reversed: {
      type: Boolean,
      default: false
    }
  }
}
</script>
