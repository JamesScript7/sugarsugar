<template>
  <div class="container">
    <main id="list" class="list-div">

    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: '',
      amount: '',
      date: ''
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
}
</style>
