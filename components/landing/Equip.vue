<template>
  <v-flex xs12>
    <v-parallax src="BG.jpg" height="1000">
      <v-layout align-center row wrap justify-center class="dimm">
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs12 text-xs-center mb-5>
              <h1 class="display-2 font-weight-thin mb-3">Mein Equipment</h1>
              <div class="underlineTitle"></div>
            </v-flex>
            <v-flex xs12>
              <v-layout row wrap justify-space-around align-center px-5 mx-5>
                <v-flex xs2>
                  <v-card>
                    <v-card-media
                      src="equipment/Canon80dBody.JPG"
                      height="200px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Canon EOS 80d</h3>
                        <div>...</div>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card>
                    <v-card-media src="equipment/Drone.JPG" height="150px">
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Drone</h3>
                        <div>...</div>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card>
                    <v-card-media src="equipment/Glidecam.JPG" height="400px">
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Glidecam</h3>
                        <div>...</div>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card>
                    <v-card-media src="equipment/Objektive.JPG" height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Objektive</h3>
                        <div>
                          Canon EF-S 18-135mm f/3.5-5.6 IS, Canon EF 75-300mm
                          f/4-5.6, Yongnuo 50mm f/1.8
                        </div>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card>
                    <v-card-media src="equipment/Stativ.JPG" height="410px">
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Stativ</h3>
                        <div>...</div>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs4 offset-xs4 text-xs-center mt-5>
              <p>
                ... und vieles mehr!<br />
                Durch starke Kooperationen mit anderen Film-Begeisterten steht
                immer das passende Equipment für den Dreh bereit.
              </p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-parallax>
  </v-flex>
</template>

<style lang="scss" scoped>
.dimm {
  background-color: rgba(0, 0, 0, 0.7);
}

h1 {
  margin-bottom: 6px !important;
}

.underlineTitle {
  background-color: #fff;
  height: 2px;
  width: 210px;
  margin: 0 auto;
}

p {
  font-size: 14pt;
  font-weight: 400;
}
</style>
