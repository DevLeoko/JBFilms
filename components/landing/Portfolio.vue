<template>
  <v-flex xs12 py-5>
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
      <v-flex xs6 offset-xs3 my-5>
        <v-layout row wrap px-4>
          <v-flex xs10>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube-nocookie.com/embed/Hwb7bsNY3-w?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h6>* dieses Video ist in Auftrag von BMW entstanden.</h6>
          </v-flex>
          <v-flex xs10 offset-xs2 mb-3>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube-nocookie.com/embed/JXCI7eL4lEo?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-flex>
          <v-flex xs10>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube-nocookie.com/embed/7JtQAlNj6Cs?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h6>* dieses Video ist in Auftrag von Mercedes entstanden.</h6>
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
