<template>
  <v-flex id="contact" xs12>
    <v-layout row wrap justify-space-around align-content-center py-5>
      <v-flex xs10 md3>
        <h1>Sag HI.</h1>
        <p>
          Du hast ne geile Idee für ein Video? Oder absolut keinen Plan,
          brauchst aber eins? Dann melde dich einfach bei mir und wir besprechen
          alles Weitere!
        </p>
      </v-flex>
      <v-flex md5 offset-md1 xs10>
        <v-layout row wrap fill-height align-content-center>
          <v-flex xs12>
            <h2>
              <v-icon size="35px" color="#ebe7de">mail</v-icon>
              &nbsp;johannes@blenkesth.com
            </h2>
          </v-flex>
          <v-flex xs12 mt-3>
            <h2>
              <v-icon size="35px" color="#ebe7de">phone</v-icon>
              &nbsp;+49 123456789
            </h2>
          </v-flex>
          <v-flex xs12 mt-3>
            <v-btn
              outline
              color="white"
              href="https://www.instagram.com/jojoblenke/"
              target="_blank"
            >
              <v-icon>camera_alt</v-icon>&nbsp;&nbsp;Instagram
            </v-btn>
            <v-btn
              outline
              color="white"
              href="https://www.youtube.com/channel/UCSQxhLXj6wf-HAjjSaOXA3w"
              target="_blank"
            >
              <v-icon>videocam</v-icon>&nbsp;&nbsp;Youtube
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout id="footer" justify-space-around row wrap py-1>
      <v-flex xs3>
        Entwickelt von <a href="https://skamps.eu" target="_blank">Leo</a> mit
        ganz viel ❤️
      </v-flex>
      <v-flex xs6 text-xs-right>
        <span class="clickable" @click="$refs.legal.openPolicy()">
          Datenschutzerklärung
        </span>
        <span class="clickable pl-3" @click="$refs.legal.openImpressum()">
          Impressum
        </span>
      </v-flex>
    </v-layout>

    <legal-disclaimer ref="legal"></legal-disclaimer>
  </v-flex>
</template>

<style lang="scss" scoped>
#contact {
  background-color: #383b4b;
  color: #ebe7de;
}

#footer {
  background-color: #25283a;
  font-size: 10pt;
  font-weight: 400;
  color: #ccc9c3;

  a {
    text-decoration-line: none;
    color: inherit;
    font-weight: 500;
  }

  .clickable {
    font-weight: 600;
    cursor: pointer;
  }
}

h1 {
  margin-bottom: 10px;
  font-size: 23pt;
}

p {
  font-size: 13pt;
}

h2 {
  font-weight: 400;
  font-size: 17pt;
}

i {
  vertical-align: middle;
}
</style>

<script>
import LegalDisclaimer from '~/components/LegalDisclaimer.vue'

export default {
  components: {
    LegalDisclaimer
  }
}
</script>
