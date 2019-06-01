<template>
  <v-flex id="portfolio" xs12 py-5>
    <v-layout row wrap>
      <v-flex xs4 offset-xs4 text-xs-center>
        <h1 class="display-2 font-weight-thin mb-3">Portfolio</h1>
        <div class="underlineTitle"></div>
        <p>
          Hier ein kleiner Überblick über ein paar Projekte.
        </p>
      </v-flex>
      <v-flex xs8 offset-xs2 my-5>
        <v-layout row wrap px-4>
          <v-flex xs12>
            <video-entry video-id="saykd72uQ2s">
              <img src="~assets/graphics/clients/Harlem.png" width="60%" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas fuga ipsa sed enim optio placeat quam beatae voluptatem
                culpa corporis recusandae odio nostrum, facilis dolorem
                distinctio magnam autem rem sequi.
              </p>
            </video-entry>
          </v-flex>

          <v-flex xs12>
            <video-entry video-id="Hwb7bsNY3-w" reversed>
              <h2>Test</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas fuga ipsa sed enim optio placeat quam beatae voluptatem
                culpa corporis recusandae odio nostrum, facilis dolorem
                distinctio magnam autem rem sequi.
              </p>
            </video-entry>
          </v-flex>

          <v-flex xs12>
            <video-entry video-id="Yf3nlcZfrnc">
              <img src="~assets/graphics/clients/FHDortmund.png" width="60%" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas fuga ipsa sed enim optio placeat quam beatae voluptatem
                culpa corporis recusandae odio nostrum, facilis dolorem
                distinctio magnam autem rem sequi.
              </p>
            </video-entry>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<style lang="scss" scoped>
h1 {
  margin-bottom: 0px !important;
  text-align: center;
}

h6 {
  text-align: center;
  margin-top: -2px;
  margin-bottom: 7px;
  font-size: 8pt;
  font-weight: 500;
}

p {
  margin-top: 20px;
  font-size: 13pt;
}

.underlineTitle {
  background-color: #000;
  height: 2px;
  width: 140px;
  margin: 0 auto;
}
</style>

<script>
import VideoEntry from '~/components/VideoEntry.vue'

export default {
  components: {
    VideoEntry
  }
}
</script>
