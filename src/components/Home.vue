<template>
  <div class="container">
    <div class="loader" v-if="loader"><img src="/static/loading-cat.svg"/></div>
    <main id="list" class="list-div">
      <div class="item-container">
        <div class="center">
          <div class="item row" v-for="(list, index) in lists" :key="index" :id="index">
            <img class="img-list" v-bind:src="list.animal" v-bind:alt="list.animal"/>
            <div class="info-box">
              <ul class="info-ul">
                <li class="name">{{list.name}}</li>
                <li class="total">Total: <span>{{list.total}}</span></li>
                <li class="for">For: {{list.reason}}</li>
              </ul>
            </div>
            <div class="date">
              {{list.date}}
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
      arr: [],
      loader: true
    }
  },
  beforeMount () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      db.ref().once('value', data => {
        let self = this
        setTimeout(function () {
          self.loader = false
          for (let key in data.val()) {
            self.arr.push(data.val()[key])
          }
          self.lists = self.arr.reverse()
        }, 1500)
      })
    }
  }
}
</script>

<style scoped>
a {
text-decoration: none;
}
img.img-list {
  width: 125px;
  height: 125px;
  animation: pop 1.2s;
}
.loader {
  margin-top: 80px;
}
.container {
  padding-top: 80px;
  min-height: 900px;
}
main.list-div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
.item {
  font-size: 20px;
  min-height: 150px;
  max-width: 700px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 16px;
  background-color: white;
  box-shadow: 4px 4px #c2defd;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
}
ul.info-ul {
  list-style-type: none;
  padding: 5px 5px 5px 10px;
  margin: 0;
  text-align: left;
}
.info-box {
  display: inline-block;
  min-width: 50%;
}
.item-container {
  margin-top: 30px;
  width: 100%;
}
.item.row:hover {
  box-shadow: 2px 2px #c2defd;
}
.name {
  font-size: 1.5em;
}
.total {
  color: green;
}
.for {
  color: gray;
}
.center {
  animation: scale 1.5s;
  animation-delay: 1.5s;
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
@media screen and (max-width: 550px) {
  img.img-list {
    width: 80px;
    height: 80px;
  }
  .item {
    font-size: 16px;
    min-height: 80px;
    margin-bottom: 6px;
    box-shadow: 2px 2px #c2defd;
  }
  .name {
    font-weight: bold;
  }
  .name, .total {
    font-size: 1.1em;
  }
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
