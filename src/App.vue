<template>
  <div id="app">
    <nav id="navBar" class="wrapper">
      <div class="logo-on-top">
        <router-link :to="{ name: 'Home' }">SugarSugar</router-link>
      </div>
      <div class="new-btn">
          <div v-on:click="menu" class="hamburger">
            <div v-bind:class="line1"></div>
            <div v-bind:class="line2"></div>
            <div v-bind:class="line3"></div>
          </div>
          <ul id="side-nav" v-bind:class="sideNav">
            <li v-on:click="menu"><router-link to="/">Home</router-link></li>
            <li v-on:click="menu"><router-link to="/new">New</router-link></li>
            <li v-on:click="menu"><router-link to="/history">History</router-link></li>
            <!-- <li><router-link to="/">Logout</router-link></li> -->
          </ul>
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
  name: 'App',
  data () {
    return {
      hamburger: true,
      line1: 'line1',
      line2: 'line2',
      line3: 'line3',
      sideNav: 'hide'
    }
  },
  methods: {
    menu: function () {
      if (this.hamburger) {
        this.line1 += ' change'
        this.line2 += ' change'
        this.line3 += ' change'
        this.sideNav = 'show'
        this.hamburger = false
      } else {
        this.line1 = 'line1'
        this.line2 = 'line2'
        this.line3 = 'line3'
        this.sideNav = 'hide'
        this.hamburger = true
      }
    }
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
  padding: 10px 16px 7px 16px;
  background-color: #2c86e0;
  border-bottom: 1px solid #2871bb;
}
/* LOGOS */
.logo-on-top {
  font-family: 'Pacifico', cursive, sans-serif;
  text-align: left;
  align-self: center;
}
.logo-on-top .logo-in-footer, .go-to-form button {
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
  #navBar {
    padding: 5px 16px 1px 16px;
    z-index: 9000;
  }
  #side-nav {
    font-size: 1.2em;
    line-height: 2;
    position: fixed;
    width: 130px;
    height: 100%;
    top: 0;
    margin: 0;
    padding: 50px 16px 0 20px;
    color: snow;
    background-color: #0d2945;
    z-index: -1;
  }
  #side-nav li {
    padding: 0 5px;
  }
  .hide {
    right: -130px;
    transition: right 0.5s ease-in-out;
  }
  .show {
    right: 0;
    transition: right 0.5s ease-in-out;
  }
  li .router-link-exact-active {
    font-weight: bold;
    color: #d52d81;
  }
  .go-to-form button {
    font-size: 1.3rem;
  }
  .logo-on-top {
    font-size: 1.2em;
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
    margin: 6px 0;
    border-radius: 2px;
    background-color: snow;
    transition: .5s;
  }
  .line1.change {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  .line2.change {
    opacity: 0;
  }
  .line3.change {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-7px, -8px);
  }
  /* FOOTER */
  footer {
    padding: 30px 0 40px 20px;
  }
}
</style>
