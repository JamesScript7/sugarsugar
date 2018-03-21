<template>
  <div class="container">
    <div class="loader" v-if="loader"><img src="/static/loading-cat.svg"/></div>
    <main id="list" class="list-div">
      <div class="item-container">
        <router-link to="/new" class="go-to-form"><button>New</button></router-link>
        <div class="center">
          <div class="item row" v-for="(list, index) in lists" :key="index" :id="list.id" @click="test">
            <img class="img-list" v-bind:src="list.animal" v-bind:alt="list.animal"/>
            <div class="info-box">
              <ul class="info-ul">
                <li class="name">{{list.name}}</li>
                <li class="total">Total: <span>{{list.total}}</span></li>
                <li class="for">For: {{list.reason}}</li>
              </ul>
            </div>
            <div class="date">
              <div>
                {{list.date}}
              </div>
              <div class="status">
                {{list.status}}
              </div>
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
    },
    test (e) {
      console.log(e.target.parentElement.id)
    }
  }
}
</script>

<style scoped>
/* LOADING SVG */
.loader {
  margin-top: 80px;
}
.loader img {
  width: 125px;
}
.container {
  padding-top: 80px;
  min-height: 1000px;
}
.center {
  animation: scale 0.9s;
  animation-delay: 1.5s;
}
.go-to-form {
  display: none;
}
/* SUGAR CARDS */
main.list-div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
.img-list {
  width: 125px;
  height: 125px;
  animation: pop 0.7s;
}
.item-container {
  margin-top: 30px;
  width: 100%;
}
.item {
  font-size: 20px;
  min-height: 150px;
  max-width: 700px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 12px;
  background-color: white;
  box-shadow: 2px 2px lightgrey;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
}
.info-ul {
  padding: 5px 5px 5px 10px;
  margin: 0;
  text-align: left;
  pointer-events: none;
}
.info-box {
  display: inline-block;
  min-width: 50%;
}
/* DATA CLASSES */
.name {
  font-size: 1.4em;
}
.total {
  color: forestgreen;
}
.for {
  color: gray;
}
.status {
  color: goldenrod;
  align-self: flex-end;
}
.date {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.date div {
  align-self: flex-end;
}
.row {
  opacity: 0;
  transform: scale(1);
  animation: fadeIn 1s forwards;
}
.row:hover {
  box-shadow: 1px 1px lightgrey;
}
@media screen and (max-width: 550px) {
  .container {
    padding-top: 30px;
  }
  /* NEW SUGAR BUTTON */
  .go-to-form {
    display: inline-block;
    position: fixed;
    right: 35px;
    bottom: 40px;
    z-index: 1000;
    opacity: 0;
    animation: fadeIn 1.2s forwards;
    animation-delay: 2s;
  }
  button {
    width: 75px;
    height: 70px;
    color: snow;
    background-color: #f64da1;
    border: none;
    border-right: 3px solid #d52d81;
    border-radius: 45%;
    box-shadow: 1px 1px 7px #0D2945;
  }
  .img-list {
    width: 80px;
    height: 80px;
  }
  .item {
    font-size: 16px;
    min-height: 80px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
  }
  .name, .total {
    font-size: 1.1em;
  }
}
/* KEYFRAMES ANIMATION */
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
