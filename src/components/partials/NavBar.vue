<template>
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
      <ul v-on:click="menu" id="side-nav" v-bind:class="sideNav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/new">New</router-link></li>
        <li><router-link to="/history">History</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <!-- <li><router-link to="/">Logout</router-link></li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
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

<style scoped>
#navBar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1px;
  padding: 10px 16px 7px 16px;
  background-color: #2c86e0;
  border-bottom: 1px solid #2871bb;
}
/* LOGOS */
.logo-on-top, .logo-in-footer {
  font-family: 'Pacifico', cursive, sans-serif;
  font-size: 1.7em;
  text-align: left;
  align-self: center;
}
/* SIDE NAVIGATION AREA */
#sideNav.hide {
  display: inline-block;
}
#side-nav {
  font-size: 20px;
  padding-top: 10px;
}
#side-nav li {
  display: inline-block;
  padding: 0 6px;
}
#side-nav li a {
  padding: 4px 0;
}
ul li .router-link-exact-active {
  border-bottom: 2px solid snow;
}
.hamburger {
  display: none;
}
/* MEDIA QUERIES */
@media screen and (max-width: 550px) {
  .logo-on-top {
    font-size: 1.2em;
  }
  #navBar {
    padding: 5px 16px 1px 16px;
    z-index: 9000;
  }
  #side-nav {
    font-size: 1.2em;
    line-height: 2;
    position: fixed;
    width: 150px;
    height: 120%;
    top: 0;
    margin: 0;
    padding: 50px 16px 0 20px;
    color: snow;
    background-color: #0d2945;
    z-index: -1;
  }
  #side-nav li {
    display: block;
    padding: 0 5px;
  }
  ul li .router-link-exact-active {
    font-weight: bold;
    color: #d52d81;
    border-bottom: 3px solid #d52d81;
  }
  /* HAMBURGER MENU */
  .hide {
    right: -150px;
    transition: right 0.5s ease-in-out;
  }
  .show {
    right: 0;
    transition: right 0.5s ease-in-out;
  }
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
}
</style>
