<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div
    id="bnc"
    class="bg-black bg-opacity-[0.02] h-full"
  >
    <RouterView />
  </div>
</template>

<style lang="scss">
html {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
      min-height: 100%;
      width: 100%;
    }
  }
}
</style>
