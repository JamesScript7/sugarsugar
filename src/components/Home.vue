<template>
  <div class="container">
    <main id="list" class="list-div">
      <div class="item-container">
        <div class="center">
          <div class="item row" v-for="(list, index) in lists" :key="index" :id="index">
            <img v-bind:src="list.animal"/>
            <div class="info-box">
              <ul class="info-ul">
                <li>{{list.date}}</li>
                <li class="name">Name: {{list.name}}</li>
                <li class="total">Total: {{list.total}}</li>
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
      lists: [],
      arr: []
    }
  },
  beforeMount () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      db.ref().once('value', data => {
        for (let key in data.val()) {
          this.arr.push(data.val()[key])
        }
        this.lists = this.arr.reverse()
      })
    }
  }
}
</script>

<style scoped>
[v-cloak] {
  display:none;
}
a {
text-decoration: none;
}
img {
  width: 150px;
  height: 150px;
  animation: pop 1.2s;
}
.container {
  padding-top: 80px;
  min-height: 820px;
}
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
  padding: 14px;
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
  padding: 10px 5px 10px 20px;
  margin: 0;
  text-align: left;
}
.info-box {
  display: inline-block;
}
.item-container {
  margin-top: 30px;
  width: 100%;
}
.item.row:hover {
  box-shadow: 2px 2px #c2defd;
}
.name, .total {
  font-size: 1.3em;
}
.center {
  animation: scale 1s;
}
.row {
  opacity: 0;
  transform: scale(1);
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
@keyframes scale {
  0% {transform: scale(0.8);}
  100% {transform: scale(1);}
}
@keyframes pop {
  0% {transform: scale(0.2);}
  50% {transform: scale(1.1);}
  100% {transform: scale(1);}
}
</style>
