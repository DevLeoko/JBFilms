<template>
  <v-layout class="videoEntry" row wrap pa-3 mb-4>
    <v-flex :order-md2="reversed" xs12 md7 px-3>
      <iframe
        width="100%"
        :src="`https://www.youtube-nocookie.com/embed/${videoId}?controls=0`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-flex>
    <v-flex :order-md1="reversed" xs12 md5 px-3 text-xl-center>
      <v-layout row wrap align-center fill-height>
        <v-flex xs12>
          <slot></slot>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
$breakpoint-sm: 960px;

.videoEntry {
  border-radius: 3px;
  background-color: rgb(240, 240, 245);
  // background-color: #eaecf1;

  p {
    @media (max-width: $breakpoint-sm) {
      margin-top: 0;
    }
  }

  iframe {
    height: 400px;

    @media (max-width: $breakpoint-sm) {
      height: 250px;
    }
  }
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
