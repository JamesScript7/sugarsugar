<template>
  <footer>
    <ul class="footer-ul">
      <li class="logo-in-footer">SugarSugar</li>
      <li>&copy; 2018 SugarSugar beta 1.0</li>
      <li><a href="http://james-kim.surge.sh/" target="_blank">James Kim</a></li>
      <li><a href="https://github.com/JamesScript7" target="_blank">Github</a></li>
      <li><a href="mailto:jameshkim@gmail.com">E-mail</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style scoped>
footer {
  position: relative;
  margin-top: 35px;
  padding: 40px 0 40px 50px;
  background-color: #0D2945;
  color: snow;
  /* box-shadow: inset 2px 10px 25px rgba(16, 16, 16, .3); */
}
.footer-ul {
  list-style-type: none;
  padding: 0;
}
.logo-in-footer {
  font-family: 'Pacifico', cursive, sans-serif;
}
.footer-ul .logo-in-footer {
  font-size: 1.8em;
}
.footer-ul li {
  display: block;
  padding: 10px;
  line-height: 12px;
  text-align: left;
  font-size: 1.2em;
}
.footer-ul li:first-child {
  padding-bottom: 40px;
}
.footer-ul li a:hover {
  color: #0066CC;
}
/* MEDIA QUERIES */
@media screen and (max-width: 550px) {
  footer {
    padding: 30px 0 40px 20px;
  }
  .footer-ul li {
    font-size: 0.9em;
  }
  .footer-ul li:first-child {
    padding-bottom: 25px;
  }
}
</style>
