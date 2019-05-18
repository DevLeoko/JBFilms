<template>
  <v-flex xs2>
    <div class="overlineBtn"></div>
    <slot></slot>
    <div class="underlineBtn"></div>
  </v-flex>
</template>

<style lang="scss" scoped>
.flex {
  color: white;
  font-weight: 500;
  cursor: pointer;
  padding-top: 7px;

  &:hover > .underlineBtn {
    width: 60%;
    margin-left: 20%;
  }

  &:hover > .overlineBtn {
    width: 0%;
    margin-left: 20%;
  }

  .underlineBtn {
    height: 1px;
    width: 0%;
    margin-left: 100%;
    background-color: white;
    transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .overlineBtn {
    height: 1px;
    margin-bottom: 3px;
    width: 50%;
    margin-left: 25%;
    background-color: rgba(255, 255, 255, 0.616);
    transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
}
</style>

<script>
export default {
  // props: ['test']
}
</script>
