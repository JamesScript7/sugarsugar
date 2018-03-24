<template>
  <div class="sign-up">
    <form @submit.prevent="signUpForm">
      <p class="welcome">Welcome to SugarSugar</p>
      <h1>Sign up!</h1>
      <input type="text" v-bind:class="this.message" v-model="email" placeholder="Email">
      <input type="password" v-bind:class="this.passwordStatus" v-model="password1" placeholder="Password">
      <input type="password" v-bind:class="this.passwordStatus" v-model="password2" placeholder="Retype Password">
      <div class="message-container">
        <p class="message">{{this.passwordMessage}}</p>
      </div>
      <input class="button" type="submit" value="Sign up!">
    </form>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'SignUp',
  data: function () {
    return {
      email: null,
      isEmail: false,
      message: null,
      password1: null,
      password2: null,
      passwordMessage: null,
      attempt: false,
      passwordStatus: null
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
      let re = /.+@.+\..+/i
      this.attempt = true
      if (re.test(this.email) && (this.password1 === this.password2)) {
        router.push('/')
        this.isEmail = true
      } else if (!re.test(this.email)) {
        this.isEmail = false
        this.message = 'message-bad'
      } else if (this.password1 !== this.password2) {
        this.passwordStatus = 'message-bad'
        this.passwordMessage = 'Passwords do not match!'
      } else {
        if (!this.isEmail) {
          this.message = 'message-bad'
        }
      }
    }
  }
}
</script>

<style scoped>
@import "../styles/animation.css";
h1 {
  display: inline-block;
  margin-bottom: 50px;
  background-color: #0059B2;
  padding: 4px 18px;
  color: snow;
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
.welcome {
  font-family: 'Pacifico', cursive, sans-serif;
  font-size: 2em;
  white-space: nowrap;
}
.sign-up {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 150px;
  height: 800px;
  height: 100vh;
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
  }
  .sign-up {
    padding-top: 70px;
  }
}
</style>
