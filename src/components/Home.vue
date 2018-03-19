<template>
  <div class="container">
    <main id="list" class="list-div">
      <ul>
        <li class="row" v-for="(list, index) in lists" :key="index" :id="index">
          {{list.id}}
          {{list.name}}
          {{list.amount}}
          {{list.reason}}
          {{list.tax}}
          {{list.gratuity}}
          {{list.total}}
          {{list.date}}
          {{list.status}}
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'Home',
  data () {
    return {
      lists: []
    }
  },
  beforeMount () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      db.ref().once('value', data => {
        for (let key in data.val()) {
          this.lists.push(data.val()[key])
        }
      })
    }
  }
}
</script>

<style scoped>
[v-cloak] {
  display:none
}
h1, h2 {
  font-weight: normal;
}
ul {
  display: inline-block;
  list-style-type: none;
  padding: 0;
  max-width: 800px;
}
li {
  display: inline-block;
  width: 90%;
  padding: 50px;
  margin: 7px 0;
  background-color: white;
  box-shadow: 4px 4px #c2defd;
}
li:hover {
  box-shadow: 1px 1px #c2defd;
}
a {
  text-decoration: none;
}
.container {
  padding-top: 80px;
  min-height: 600px;
}
.row {
  opacity: 0;
  animation: fadeIn 1s forwards;
}
.row:nth-child(1) {
  animation-delay: 0.1s;
}
.row:nth-child(2) {
  animation-delay: 0.3s;
}
.row:nth-child(3) {
  animation-delay: 0.5s;
}
.row:nth-child(4) {
  animation-delay: 0.7s;
}
.row:nth-child(5) {
  animation-delay: 0.9s;
}
.row:nth-child(6) {
  animation-delay: 1.1s;
}
.row:nth-child(7) {
  animation-delay: 1.3s;
}
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

</style>
