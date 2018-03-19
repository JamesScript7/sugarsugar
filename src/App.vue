<template>
  <div id="app">
    <nav class="wrapper">
      <div class="home">
        <router-link :to="{ name: 'Home' }">Sugar beta 1.0</router-link>
      </div>
      <div class="new-btn">
        <router-link to="/new" class="new-btn"><button>New</button></router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: snow;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper, button {
  font-family: 'Pacifico', cursive, sans-serif;
  font-size: 19px;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1px;
  background-color: #3399FF;
  padding: 10px 16px;
  border-bottom: 2px solid #347dc7;
}
.home {
  text-align: left;
  font-size: 20px;
  align-self: center;
}
.new-btn {
  text-align: right;
}
button {
  font-weight: bold;
  width: 90px;
  padding: 7px;
  border: none;
  border-right: 4px solid #d52d81;
  background-color: #f64da1;
  box-shadow: 2px 2px #0066CC;
  color: snow;
}
button:hover {
  background: #ff3399;
  box-shadow: none;
}
</style>
