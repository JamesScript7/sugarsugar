<template>
  <div id="app">
    <nav id="navBar" class="wrapper">
      <div class="home">
        <router-link :to="{ name: 'Home' }">SugarSugar</router-link>
      </div>
      <div class="new-btn">
        <router-link to="/new" class="new-btn"><button>New</button></router-link>
      </div>
    </nav>
    <router-view/>
    <footer>
      <ul class="footer-ul">
        <li class="logo">SugarSugar</li>
        <li>&copy; 2018 SugarSugar beta 1.0</li>
        <li><a href="http://james-kim.surge.sh/">James Kim</a></li>
        <li><a href="https://github.com/JamesScript7">Github</a></li>
        <li><a href="mailto:jameshkim@gmail.com">E-mail</a></li>
      </ul>
    </footer>
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
  background-color: #F8F8F8;
}
a {
  text-decoration: none;
  color: snow;
}
nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
}
footer {
  margin-top: 50px;
  padding: 40px 0 40px 30px;
  background-color: #0D2945;
  color: snow;
  position: relative;
  box-shadow: inset 2px 10px 25px rgba(16, 16, 16, .3);
}
footer ul {
  list-style-type: none;
  padding: 0;
}
footer ul li {
  display: block;
  padding: 10px;
  line-height: 15px;
  text-align: left;
}
.footer-ul li:first-child {
  padding-bottom: 40px;
}
footer ul li a:hover {
  color: #0066CC;
}
#app {
  position: relative;
  font-family: 'Cabin', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-active, button, .logo {
  font-family: 'Pacifico', cursive, sans-serif;
  font-size: 1.2rem;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1px;
  background-color: #2062A3;
  padding: 10px 16px;
  border-bottom: 3px solid #0D2945;
}
.home {
  text-align: left;
  font-size: 20px;
  align-self: center;
}
.new-btn {
  text-align: right;
}
.logo {
  font-size: 1.7em;
}
button {
  width: 120px;
  padding: 3px;
  border: none;
  border-right: 4px solid #d52d81;
  border-radius: 2px;
  background-color: #f64da1;
  box-shadow: 2px 2px #0D2945;
  color: snow;
}
button:hover {
  background: #ff3399;
  box-shadow: none;
}
</style>
