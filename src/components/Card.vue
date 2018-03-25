<template>
  <div>
    <NavBar/>
    <div class="card-box">
      <form>
        <div class="img-box">
          <img v-bind:src="obj.animal" v-bind:alt="obj.animal"/>
        </div>
        <h2>{{obj.name}}</h2>
        <div class="one-list">
          <div class="left">
            <div>Date:</div>
            <div>Amount:</div>
            <div>Tax:</div>
            <div>Gratuity:</div>
          </div>
          <div class="right">
            <div>{{obj.date}}</div>
            <div>{{obj.amount}}</div>
            <div>{{obj.tax}}</div>
            <div>{{obj.gratuity}}</div>
          </div>
        </div>
        <div class="two-list">
          <div class="left">For: {{obj.reason}}</div>
          <div class="right">Total: {{obj.total}}</div>
          <!-- TOGGLE SWITCH -->
          <div class="toggler">
            <label class="switch">
              <input type="checkbox" v-model="checked">
              <span class="slider round"></span>
            </label>
            <div @click="statusPaid">Mark as Paid</div>
          </div>
          <div class="buttoner">
            <span><button class="delete-btn" @click="statusDelete">Delete</button></span>
            <span><button v-bind:class="green" @click="statusPaid">Submit</button></span>
          </div>
        </div>
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
      userID: null,
      userEmail: null,
      checked: null,
      green: null
    }
  },
  beforeMount () {
    this.fetchData()
  },
  watch: {
    checked: function () {
      if (this.checked) {
        this.green = 'green'
      } else {
        this.green = null
      }
    }
  },
  methods: {
    statusPaid: function () {
      if (this.obj.status !== 'paid') {
        if (this.checked) {
          const d = new Date()
          const currentDate = d.toDateString().split(' ').slice(1).join(' ')
          db.ref('users').child(this.userEmail).child(this.$props.id).update({
            status: 'paid',
            completed: currentDate
          })
          this.$router.push('/home')
        }
      }
    },
    statusDelete: function () {
      let yes = confirm('Are you sure you want to delete?')
      if (yes) {
        if (this.obj.status === 'paid') {
          db.ref('users').child(this.userEmail).child(this.$props.id).remove()
          this.$router.push('/history')
        } else {
          this.$router.push('/')
        }
      }
    },
    fetchData () {
      let self = this
      firebase.auth().onAuthStateChanged((user) => {
        self.userID = user
        if (user) {
          self.userEmail = user.email.split('.')[0]
          db.ref().once('value', data => {
            setTimeout(function () {
              self.loader = false
              self.obj = data.val().users[self.userEmail][self.$props.id]
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
.img-box {
  height: 128px;
  margin-bottom: 20px;
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
  margin-left: 20px;
  padding: 12px;
  border: none;
  border-radius: 3px;
  color: snow;
  box-shadow: 2px 2px #B8B8B8;
}
.delete-btn {
  background-color: crimson;
}
.green {
  background-color: limegreen;
}
.one-list {
  width: 250px;
  margin: 0 auto;
  padding: 8px 10px;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.two-list {
  width: 250px;
  margin: 15px auto;
  padding: 8px 10px;
}
.left {
  text-align: left;
}
.right, .toggler, .buttoner {
  text-align: right;
}
.buttoner {
  padding: 10px 0;
}
.toggler {
  padding: 14px 0;
}
@media screen and (max-width: 550px) {
  h2 {
    margin: 0;
    margin-bottom: 10px;
  }
  form {
    padding: 40px 15px 25px 15px;
    border: 0 solid #E0E0E0;
    box-shadow: none;
  }
  .card-box {
    padding-top: 70px;
  }
  .one-list, .two-list {
    padding: 0 10px;
  }
  .two-list {
    margin: 0 auto;
  }
}
</style>
