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
*, *:before, *:after {
  box-sizing: inherit;
}
html, body {
  font-size: 20px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  background-color: #F2F8FF;
}
a {
  text-decoration: none;
  color: snow;
}
nav {
  position: fixed;
  top: 0;
  width: 100%;
}
#app {
  font-family: 'Cabin', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-active, button {
  font-family: 'Pacifico', cursive, sans-serif;
  font-size: 1.3rem;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1px;
  background-color: #68b4ff;
  padding: 10px 16px;
  border-bottom: 2px solid #499bee;
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
  width: 120px;
  padding: 7px;
  border: none;
  border-right: 4px solid #d52d81;
  border-radius: 2px;
  background-color: #f64da1;
  box-shadow: 2px 2px #0066CC;
  color: snow;
}
button:hover {
  background: #ff3399;
  box-shadow: none;
  box-shadow: -1px -1px #B8B8B8;
}
</style>
