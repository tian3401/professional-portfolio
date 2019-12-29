<template>
  <div id="app">
    <!-- routes via vue router  -->
    <router-view name="Nav"/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
}

body {
  min-height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #08AEEA;
  background: -webkit-linear-gradient(top, #08AEEA 0%, #2AF598 99%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#64b2d9),
    color-stop(99%, #114a93)
  );
  background: -o-linear-gradient(top, rgba(8, 174, 234, 0.247) 0%, #2AF598 99%);
  background: linear-gradient(to bottom, #08AEEA 0%, #2AF598 99%); */
  width: 100%;
  height: 100%;
  /* background-image: url("./assets/SVG/matt-home-bg-2.png");
  background-repeat: no-repeat;
  background-size: 30%; */
}

#app:after {

}
</style>
