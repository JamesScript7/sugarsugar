<template>
  <div class="sign-up">
    <div class="loader" v-if="loader"><img src="/static/loading-cat.svg"/></div>
    <form v-bind:class="this.form" @submit.prevent="signUpForm">
      <p class="welcome">You're Almost There!</p>
      <h1>Sign Up</h1>
      <input type="text" v-bind:class="this.message" v-model="email" placeholder="Email" required>
      <input type="password" v-bind:class="this.passwordStatus" v-model="password1" maxlength="16" placeholder="Password (at least 7 characters)" required>
      <input type="password" v-bind:class="this.passwordStatus" v-model="password2" maxlength="16" placeholder="Retype Password" required>
      <div class="message-container">
        <p class="message">{{this.passwordMessage}}</p>
      </div>
      <input class="button" type="submit" value="Sign up!">
      <p>Back to <router-link class="here" to="/login">Login</router-link></p>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'SignUp',
  data: function () {
    return {
      loader: false,
      form: null,
      email: null,
      isEmail: false,
      message: null,
      password1: null,
      password2: null,
      isPassword: false,
      passwordMessage: null,
      passwordStatus: null,
      attempt: false
    }
  },
  watch: {
    email: function () {
      let re = /.+@.+\..+/i
      if (!this.attempt && re.test(this.email)) {
        this.message = 'message-good'
      } else if (this.attempt && !re.test(this.email)) {
        this.message = 'message-bad'
      } else if (this.attempt && re.test(this.email)) {
        this.message = 'message-good'
      } else if (this.email <= 0) {
        this.message = null
      } else {
        this.message = null
      }
    },
    password2: function () {
      if (this.attempt) {
        if (this.password2.length <= 0) {
          this.passwordMessage = null
          this.passwordStatus = null
        } else if (this.password1 !== this.password2) {
          this.passwordMessage = 'Passwords do not match!'
          this.passwordStatus = 'message-bad'
        } else if (this.password1 === this.password2) {
          this.passwordMessage = null
          this.passwordStatus = 'message-good'
        } else {
          this.passwordMessage = null
          this.passwordStatus = null
        }
      }
    }
  },
  methods: {
    signUpForm: function () {
      let emailReg = /.+@.+\..+/i
      let passReg = /^[a-zA-Z0-9)(]{7,16}$/
      this.attempt = true
      emailReg.test(this.email) ? this.isEmail = true : this.isEmail = false
      if (passReg.test(this.password1) && passReg.test(this.password1)) {
        if (this.password1 === this.password2) {
          if (this.password1.length < 7 || this.password1.length > 16 || this.password1 === '' || this.password1 === null) {
            this.isPassword = false
            this.passwordStatus = 'message-bad'
          } else if (this.password2.length < 7 || this.password2.length > 16 || this.password2 === '' || this.password2 === null) {
            this.isPassword = false
            this.passwordStatus = 'message-bad'
          } else {
            this.isPassword = true
          }
        } else {
          this.isPassword = false
        }
      } else {
        this.isPassword = false
      }
      if (this.isEmail && this.isPassword) {
        this.loader = true
        this.form = 'hide'
        // FIREBASE (use arrow functions to access this)
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password2).then(
          (user) => {
            console.log('USER CREATED:', user)
            this.$router.replace('home')
          },
          (err) => {
            this.form = null
            alert('ERROR', err.message)
          }
        )
        // router.push('/')
      } else if (!this.isEmail) {
        // console.log('INVALID EMAIL')
        this.message = 'message-bad'
      } else if (!this.isPassword) {
        // console.log('PASSWORDS DO NOT MATCH')
        this.passwordStatus = 'message-bad'
        this.passwordMessage = 'Please recheck your password!'
      }
    }
  }
}
</script>

<style scoped>
@import "../styles/form-color.css";
@import "../styles/loader.css";
h1 {
  display: inline-block;
  margin-bottom: 50px;
  background-color: #0059B2;
  padding: 4px 18px;
  color: snow;
}
p {
  color: gray;
  white-space: nowrap;
}
.hide {
  display: none;
}
.welcome {
  font-family: 'Pacifico', cursive, sans-serif;
  font-size: 2em;
  color: #2c86e0;
  white-space: nowrap;
}
/* EMAIL VALIDATION MESSAGE */
.message-container {
  display: block;
  height: 15px;
  padding-bottom: 30px;
}
p.message {
  margin: 0;
  color: red;
}
.message-bad {
  outline-width: 0;
  border: 1px solid red;
}
.message-good {
  outline-width: 0;
  border: 1px solid limegreen;
}
form {
  font-size: 1.1em;
  min-width: 250px;
  padding: 60px;
  background-color: white;
  border: 1px solid #E0E0E0;
  box-shadow: 4px 4px #c2defd;
  animation: slideIn 1.2s;
}
input {
  font-family: 'Cabin', Helvetica, Arial, sans-serif;
  display: block;
  font-size: 1em;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 18px;
  border: none;
  background-color: #F5F5F5;
  padding: 16px;
}
.sign-up {
  max-width: 600px;
  min-height: 100%;
  margin: 0 auto;
  padding: 110px 0;
  opacity: 0;
  animation: fadeIn 0.8s forwards;
}
.button {
  font-weight: bold;
  font-size: 1.2em;
  padding: 14px;
  border: none;
  border-right: 4px solid #d52d81;
  border-radius: 3px;
  color: snow;
  background-color: #f64da1;
  box-shadow: 2px 2px #B8B8B8;
}
.here {
  color: #d52d81;
}
@media screen and (max-width: 550px) {
  form {
    padding: 30px 25px;
    border: 0 solid #E0E0E0;
    box-shadow: none;
  }
  input {
    margin-bottom: 20px;
    padding: 12px;
    width: 85%;
  }
  .welcome {
    font-family: 'Pacifico', cursive, sans-serif;
    font-size: 1.4em;
    margin: 0;
  }
  .sign-up {
    padding-top: 20px;
  }
}
</style>
