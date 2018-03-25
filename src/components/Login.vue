<template>
  <div class="log-in">
    <form @submit.prevent="loginForm">
      <p class="welcome">Welcome to SugarSugar</p>
      <h1>Login</h1>
      <input type="text" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <div class="message-bad">
        <p>{{ this.message }}</p>
      </div>
      <input class="button" type="submit" value="Login">
      <p>Don't have an account? Sign up <router-link class="here" to="/signup">here</router-link></p>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: '',
      message: null
    }
  },
  methods: {
    loginForm: function () {
      // FIREBASE AUTHENTICATION
      let self = this
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log(user)
          this.$router.replace('home')
        },
        (err) => {
          self.message = err.code
          this.$router.push({path: '/login'})
        }
      )
    }
  }
}
</script>

<style scoped>
@import "../styles/form-color.css";
h1 {
  display: inline-block;
  margin-bottom: 60px;
  background-color: #0059B2;
  padding: 4px 18px;
  color: snow;
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
  color: #2c86e0;
  white-space: nowrap;
}
.log-in {
  max-width: 600px;
  min-height: 100%;
  margin: 0 auto;
  padding: 130px 0;
  padding-bottom: 150px;
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
/* SIGN UP REDIRECT */
p {
  color: gray;
  white-space: nowrap;
}
.here {
  color: #d52d81;
}
.message-bad, .message-bad p {
  height: 15px;
  margin: 0 0 20px 0;
  color: red;
}
@media screen and (max-width: 550px) {
  form {
    padding: 40px 25px 25px 25px;
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
  .log-in {
    padding-top: 70px;
  }
}
</style>
