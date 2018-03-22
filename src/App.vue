<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from '@/components/partials/NavBar'
import FooterBar from '@/components/partials/FooterBar'
export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style>
*, *:before, *:after {
  box-sizing: inherit;
}
html, body {
  font-size: 16px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  background-color: #F8F8F8;
}
a {
  text-decoration: none;
  color: snow;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
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
