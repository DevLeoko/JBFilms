<template>
  <v-flex id="equip" xs12>
    <v-parallax id="myParallax" src="BG.jpg" height="1000">
      <v-layout align-center row wrap justify-center class="dimm">
        <v-flex id="equipContent" xs12>
          <v-layout row wrap>
            <v-flex xs12 text-xs-center mb-5>
              <h1 class="display-2 font-weight-thin my-3">Mein Equipment</h1>
              <div class="underlineTitle"></div>
            </v-flex>
            <v-flex md10 offset-md1 xs12>
              <v-layout row wrap justify-space-around align-center>
                <v-flex md2 xs10 mb-4>
                  <v-card>
                    <v-img src="equipment/Canon80dBody.jpeg" height="200px">
                    </v-img>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Canon EOS 80d</h3>
                        <div>Großer Dynamikumfang und FullHD Aufnahmen.</div>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex md2 xs10 mb-4>
                  <v-card>
                    <v-img src="equipment/Drone.jpeg" height="150px"> </v-img>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Drohne</h3>
                        <div>
                          Mit einer Auflösung bis zu 2.7k können Aufnahmen aus
                          der Luft gemacht werden.
                        </div>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex md2 xs10 mb-4>
                  <v-card>
                    <v-img src="equipment/Glidecam.jpeg" height="400px">
                    </v-img>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Glidecam</h3>
                        <div>
                          Flexibel und kompakt für stabilisierte Kamerafahrten.
                        </div>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex md2 xs10 mb-4>
                  <v-card>
                    <v-img src="equipment/Objektive.jpeg" height="200px">
                    </v-img>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Objektive</h3>
                        <div>
                          <i>
                            Canon EF-S 18-135mm f/3.5-5.6,<br />
                            Canon EF 75-300mm f/4-5.6,<br />
                            Yongnuo 50mm f/1.8<br />
                          </i>
                          Alle Sichtweiten von Weitwinkel bis in den Telebereich
                          sind abgedeckt.
                        </div>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex md2 xs10 mb-4>
                  <v-card>
                    <v-img src="equipment/Stativ.jpeg" height="410px"> </v-img>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Stativ</h3>
                        <div>Für Schwenks, Interviews und Zeitraffer.</div>
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
$breakpoint-sm: 960px;
.dimm {
  background-color: rgba(0, 0, 0, 0.7);
}

h1 {
  margin-bottom: 6px !important;
}

#equipContent {
  @media (max-width: $breakpoint-sm) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}

#myParallax {
  @media (max-width: $breakpoint-sm) {
    height: auto !important;
  }
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
