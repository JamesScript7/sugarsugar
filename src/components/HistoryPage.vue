<template>
  <div class="container">
    <NavBar/>
    <div class="loader" v-if="loader"><img src="/static/loading-cat.svg"/></div>
    <main id="list" class="list-div">
      <div class="item-container">
        <div>
          <router-link to="/new" id="new-btn" class="go-to-form"><button id="new-btn-btn">New</button></router-link>
        </div>
        <div class="center">
          <div class="item row" v-for="(list, index) in lists" :key="index" :id="list.id" @click="test">
            <div class="img-list-holder">
              <img class="img-list" v-bind:src="list.animal" v-bind:alt="list.animal"/>
            </div>
            <div class="info-box">
              <ul class="info-ul">
                <li class="name">{{list.name}}</li>
                <li class="total">Total: <span>{{list.total}}</span></li>
                <li class="for">For: {{list.reason}}</li>
                <li class="for">Completed:</li>
                <li class="status">{{list.completed}}</li>
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
import NavBar from '@/components/partials/NavBar'
import db from '@/components/firebase/firebaseInit'
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
      let id = e.target.parentElement.id
      let idGeneral = e.target.id
      if (id && id !== '') {
        this.$router.push(`/home/${id}`)
      } else if (idGeneral && idGeneral !== '') {
        this.$router.push(`/home/${idGeneral}`)
      }
    }
  }
}
</script>

<style scoped>
@import "../styles/loader.css";
.container {
  padding-top: 70px;
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
  padding: 4px 10px;
  margin: 0 auto;
  margin-bottom: 6px;
  background-color: white;
  box-shadow: 1px 1px lightgrey;
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
}
/* DEALING WITH POINTER EVENTS */
.info-ul, div.date div, .img-list-holder img {
  pointer-events: none;
}
.info-box {
  display: inline-block;
  min-width: 50%;
  max-width: 50%;
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
  color: forestgreen;
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
  animation: fadeIn 1s forwards;
}
.row:hover {
  box-shadow: 1px 1px snow;
}
/* NEW SUGAR BUTTON */
.go-to-form {
  display: none;
}
@media screen and (max-width: 550px) {
  .container {
    padding-top: 30px;
  }
  .img-list, .img-list-holder {
    width: 60px;
    height: 60px;
  }
  .item {
    font-size: 16px;
    min-height: 80px;
    margin-bottom: 2px;
  }
  .name {
    font-weight: bold;
  }
  .name, .total {
    font-size: 1.1em;
  }
  /* NEW SUGAR BUTTON */
  .go-to-form {
    display: inline-block;
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 1;
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 1.7s;
  }
  button {
    font-family: 'Pacifico', cursive, sans-serif;
    font-size: 1.2em;
    width: 65px;
    height: 60px;
    color: snow;
    background-color: #f64da1;
    border: none;
    border-radius: 45%;
    border-right: 3px solid #d52d81;
    box-shadow: 1px 1px 7px #0D2945;
  }
}
</style>
