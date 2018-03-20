<template>
  <div class="container">
    <main id="list" class="list-div">
      <div class="item-container">
        <div class="center">
          <div class="item row" v-for="(list, index) in lists" :key="index" :id="index">
            <img src="http://via.placeholder.com/150x150"/>
            <div class="info-box">
              <ul class="info-ul">
                <li>{{list.date}}</li>
                <li>Name: {{list.name}}</li>
                <li>Total: {{list.total}}</li>
                <li>For: {{list.reason}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
main.list-div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
.item {
  min-height: 150px;
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 16px;
  background-color: white;
  box-shadow: 4px 4px #c2defd;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
ul.info-ul {
  list-style-type: none;
  padding: 10px 5px 10px 16px;
  margin: 0;
  text-align: left;
}
.info-box {
  display: inline-block;
}
.item-container {
  margin-top: 30px;
  width: 98%;
}
[v-cloak] {
  display:none
}
h1, h2 {
  font-weight: normal;
}
ul.list-parent {
  display: inline-block;
  list-style-type: none;
  padding: 0;
  max-width: 800px;
}
li.row {
  display: inline-block;
  width: 90%;
  padding: 50px;
  margin: 7px 0;
  background-color: white;
  box-shadow: 4px 4px #c2defd;
}
li.row:hover {
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
