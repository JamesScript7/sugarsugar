<template>
  <div id="app">
    <nav id="navBar" class="wrapper">
      <div class="logo-on-top">
        <router-link :to="{ name: 'Home' }">SugarSugar</router-link>
      </div>
      <div class="new-btn">
        <router-link to="/history">
          <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </router-link>
      </div>
    </nav>
    <router-view/>
    <footer>
      <ul class="footer-ul">
        <li class="logo-in-footer">SugarSugar</li>
        <li>&copy; 2018 SugarSugar beta 1.0</li>
        <li><a href="http://james-kim.surge.sh/" target="_blank">James Kim</a></li>
        <li><a href="https://github.com/JamesScript7" target="_blank">Github</a></li>
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
#navBar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1px;
  background-color: #2062A3;
  padding: 10px 16px 7px 16px;
  border-bottom: 3px solid #1d5892;
}
/* LOGOS */
.logo-on-top {
  text-align: left;
  align-self: center;
}
.router-link-active, .logo-in-footer {
  font-family: 'Pacifico', cursive, sans-serif;
  font-size: 1.7em;
}
/* FOOTER */
footer {
  position: relative;
  margin-top: 30px;
  padding: 40px 0 40px 50px;
  background-color: #0D2945;
  color: snow;
  box-shadow: inset 2px 10px 25px rgba(16, 16, 16, .3);
}
.footer-ul {
  list-style-type: none;
  padding: 0;
}
.footer-ul .logo-in-footer {
  font-size: 1.8em;
}
.footer-ul li {
  display: block;
  padding: 10px;
  line-height: 12px;
  text-align: left;
}
.footer-ul li:first-child {
  padding-bottom: 40px;
}
.footer-ul li a:hover {
  color: #0066CC;
}
/* MEDIA QUERIES */
@media screen and (max-width: 550px) {
  .router-link-active {
    font-size: 1.4rem;
  }
  /* HAMBURGER MENU */
  .new-btn {
    padding-top: 5px;
    text-align: right;
  }
  .hamburger {
    display: inline-block;
    cursor: pointer;
  }
  .line1, .line2, .line3 {
    width: 30px;
    height: 3px;
    background-color: snow;
    margin: 6px 0;
    transition: 0.5s;
  }
  .change .line1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }
  .change .line2 {
    opacity: 0;
  }
  .change .line3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
  /* FOOTER */
  footer {
    padding: 30px 0 40px 20px;
  }
}
</style>
