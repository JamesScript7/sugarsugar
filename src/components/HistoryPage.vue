<template>
  <div class="container">
    <NavBar/>
    <div class="loader" v-if="loader"><img src="/static/loading-cat.svg"/></div>
    <main id="list" class="list-div">
      <div class="item-container">
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
import db from '@/components/firebase/firebaseInit'
import NavBar from '@/components/partials/NavBar'
import firebase from 'firebase'
export default {
  name: 'Home',
  components: {
    NavBar
  },
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
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          let userNameEmail = user.email.split('.')[0]
          db.ref().once('value', data => {
            let self = this
            setTimeout(function () {
              self.loader = false
              console.log(data.val().users[userNameEmail])
              for (let key in data.val().users[userNameEmail]) {
                if (data.val().users[userNameEmail][key].status === 'paid') {
                  self.arr.push(data.val().users[userNameEmail][key])
                }
              }
              self.lists = self.arr.reverse()
            }, 1500)
          })
        }
      })
    },
    test (e) {
      console.log(e.target.parentElement.id)
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
.loader img {
  width: 125px;
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
  box-shadow: 4px 4px lightgrey;
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
  pointer-events: none;
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
  box-shadow: 2px 2px lightgrey;
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
.date {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.date div {
  align-self: flex-end;
}
.status {
  color: goldenrod;
  align-self: flex-end;
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
@media screen and (max-width: 550px) {
  .container {
    padding-top: 50px;
  }
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
</style>
