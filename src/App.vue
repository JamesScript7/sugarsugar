<template>
  <div id="app">
    <nav class="wrapper">
      <router-link :to="{ name: 'Home' }" class="home">Sugar beta 1.0</router-link>
      <router-link to="/new" class="new-btn"><button>New</button></router-link>
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
  border-bottom: 3px solid #0066CC;
}
.home {
  text-decoration: none;
  color: snow;
  text-align: left;
  font-size: 20px;
  align-self: center;
}
.new-btn {
  text-align: right;
}
button {
  background: #ff3399;
  border: none;
  padding: 7px;
  color: snow;
  font-weight: bold;
  width: 90px;
  border-right: 3px solid #ea2f8c;
}
button:hover {
  color: snow;
  background-color: #fa439e;
  box-shadow: 2px 2px #0066CC;
}
</style>
