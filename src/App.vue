<template>
  <div id="app">
    <router-view/>
    <FooterBar/>
  </div>
</template>

<script>
import FooterBar from '@/components/partials/FooterBar'
export default {
  name: 'App',
  components: {
    FooterBar
  }
}
</script>

<style>
@import "./styles/animation.css";
*, *:before, *:after {
  box-sizing: inherit;
}
html, body {
  font-size: 16px;
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #F8F8F8;
}
a {
  text-decoration: none;
  color: snow;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
nav {
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 1000;
}
#app {
  font-family: 'Cabin', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  text-align: center;
  color: #2c3e50;
}
</style>
