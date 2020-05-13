<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/julia">Julia</router-link>
      <router-link to="/radek">Radek</router-link>
      <router-link to="/johannes">Johannes</router-link>
      <router-link to="/raul">Raul</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
}
#nav {
  width: 100vw;
  display: flex;
  justify-content: center;
  a {
    margin-right: 20px;
  }
}
* {
  margin: 0;
  padding: 0;
}
h1 {
  text-align: center;
}

#moodBoard {
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
