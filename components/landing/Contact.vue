<template>
  <v-flex id="footerContact" xs12 py-5>
    <v-layout row wrap justify-space-around align-content-center>
      <v-flex xs3>
        <h1>Sag HI.</h1>
        <p>
          Du hast ne geile Idee für ein Video? Oder absolut keinen Plan,
          brauchst aber eins? Dann melde dich einfach bei mir uns wir besprechen
          alles weiter! Lorem ipsum dolor, sit amet consectetur.
        </p>
      </v-flex>
      <v-flex xs5 offset-xs1>
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
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<style lang="scss" scoped>
#footerContact {
  background-color: #383b4b;
  color: #ebe7de;
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
