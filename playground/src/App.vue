<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <mood></mood>
    <router-view />
  </div>
</template>

<script>
import mood from "./components/moodBoard";
export default {
  components: {
    mood: mood
  }
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
}
* {
  margin: 0;
  padding: 0;
}
section {
  min-height: 100vh;
}

#canvas {
  width: 400px;
  height: 250px;
  border: 2px solid black;
  position: relative;
  margin: 30px auto;
}

#click-show {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #42e6d0;
  position: absolute;
}
</style>
