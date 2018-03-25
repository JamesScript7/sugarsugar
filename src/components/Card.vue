<template>
  <div>
    <NavBar/>
    <div class="card-box">
      <form>
        <div class="img-box">
          <img v-bind:src="obj.animal" v-bind:alt="obj.animal"/>
        </div>
        <div class="one-list">
          <div class="left">
            <div>Date:</div>
            <div>Name:</div>
            <div>Status:</div>
            <div>Tax:</div>
            <div>Gratuity:</div>
            <div>Total:</div>
            <div>For:</div>
          </div>
          <div class="right">
            <div>{{obj.date}}</div>
            <div>{{obj.name}}</div>
            <div>{{obj.status}}</div>
            <div>{{obj.tax}}</div>
            <div>{{obj.gratuity}}</div>
            <div>{{obj.total}}</div>
            <div>{{obj.reason}}</div>
          </div>
        </div>
        <div @click="statusPaid">Mark as Paid</div>
        <!-- TOGGLE SWITCH -->
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
        <div><button class="delete-btn" @click="statusDelete">Delete</button></div>
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/partials/NavBar'
import db from '@/components/firebase/firebaseInit'
import firebase from 'firebase'
export default {
  name: 'Card',
  props: ['id'],
  components: {
    NavBar
  },
  data: function () {
    return {
      obj: {},
      userID: null
    }
  },
  beforeMount () {
    this.fetchData()
  },
  methods: {
    statusPaid: function () {
      console.log(this.$props.id)
    },
    statusDelete: function () {
      console.log('delete')
      console.log(this.obj)
    },
    fetchData () {
      let self = this
      firebase.auth().onAuthStateChanged((user) => {
        self.userID = user
        if (user) {
          let userNameEmail = user.email.split('.')[0]
          db.ref().once('value', data => {
            setTimeout(function () {
              self.loader = false
              self.obj = data.val().users[userNameEmail][self.$props.id]
            }, 1500)
          })
        }
      })
    }
  }
}
</script>

<style scoped>
@import "../styles/form-color.css";
@import "../styles/switch.css";
form {
  font-size: 1.1em;
  min-width: 250px;
  padding: 60px;
  background-color: white;
  border: 1px solid #E0E0E0;
  box-shadow: 4px 4px #c2defd;
  animation: slideIn 1.2s;
}
.card-box {
  max-width: 600px;
  min-height: 100%;
  margin: 0 auto;
  padding: 130px 0;
  padding-bottom: 150px;
  opacity: 0;
  animation: fadeIn 0.8s forwards;
}
button {
  font-weight: bold;
  font-size: 1em;
  padding: 10px;
  border: none;
  border-right: 4px solid #d52d81;
  border-radius: 3px;
  color: snow;
  background-color: crimson;
  box-shadow: 2px 2px #B8B8B8;
}
.one-list {
  width: 250px;
  margin: 0 auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
.img-box {
  height: 128px;
}
@media screen and (max-width: 550px) {
  form {
    padding: 40px 25px 25px 25px;
    border: 0 solid #E0E0E0;
    box-shadow: none;
  }
  .card-box {
    padding-top: 70px;
  }
  .one-list {
    padding: 30px 10px;
  }
}
</style>
