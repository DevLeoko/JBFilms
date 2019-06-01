<template>
  <v-flex id="portfolio" xs12 py-5>
    <v-layout row wrap>
      <v-flex xs4 offset-xs4>
        <h1 class="display-2 font-weight-thin mb-3">Portfolio</h1>
        <div class="underlineTitle"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          dolorem aut nesciunt explicabo laboriosam velit quia maiores dolores
          ratione fugiat aliquam reprehenderit.
        </p>
      </v-flex>
      <v-flex xs10 offset-xs1 my-5>
        <v-layout row wrap px-4>
          <v-flex xs7 offset-xs1 px-5 mb-2>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube-nocookie.com/embed/Hwb7bsNY3-w?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-flex>
          <v-flex xs4 text-xl-center>
            <v-layout row wrap align-center fill-height>
              <v-flex xs12>
                <img src="~assets/graphics/clients/Harlem.png" width="60%" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas fuga ipsa sed enim optio placeat quam beatae
                  voluptatem culpa corporis recusandae odio nostrum, facilis
                  dolorem distinctio magnam autem rem sequi.
                </p>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs4 text-xl-center>
            <v-layout row wrap align-center fill-height>
              <v-flex xs12>
                <h2>Test</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas fuga ipsa sed enim optio placeat quam beatae
                  voluptatem culpa corporis recusandae odio nostrum, facilis
                  dolorem distinctio magnam autem rem sequi.
                </p>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs7 px-5 mb-2>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube-nocookie.com/embed/JXCI7eL4lEo?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-flex>

          <v-flex xs7 offset-xs1 px-5>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube-nocookie.com/embed/7JtQAlNj6Cs?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-flex>
          <v-flex xs4 text-xl-center>
            <v-layout row wrap align-center fill-height>
              <v-flex xs12>
                <h2>Test</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas fuga ipsa sed enim optio placeat quam beatae
                  voluptatem culpa corporis recusandae odio nostrum, facilis
                  dolorem distinctio magnam autem rem sequi.
                </p>
              </v-flex>
            </v-layout>
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
