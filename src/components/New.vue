<template>
  <div class="new">
    <form id="form-itself" @submit.prevent="saveData" autocomplete="off">
      <div class="new-sugar">
        <div class="img-box">
          <img v-bind:src="this.svg" v-bind:alt="this.svg"/>
        </div>
        <div>
          <h1>New Sugar</h1>
        </div>
      </div>
      <div>
        <input id="name" type="text" name="name" placeholder="Name*" v-model="name" required />
      </div>
      <div class="amount-box">
        <input id="amount" type="number" name="amount" placeholder="Amount*" v-model="amount" required />
      </div>
      <div class="reason-box">
        <textarea id="reason" type="text" name="reason" placeholder="For..." v-model="reason"></textarea>
      </div>
      <div class="option-box">
        <div id="tax-box">
          <div id="tax">Tax: ${{ taxView }}</div>
          <select id="tax-option" v-model="tax">
            <option value="0.00">none</option>
            <option value=".08875">NY</option>
          </select>
        </div>
        <div id="grat-box">
          <div id="grat">Gratuity: ${{ gratuityView }}</div>
          <select id="grat-option" v-model="gratuity">
            <option value="0.00">none</option>
            <option value="0.10">10%</option>
            <option value="0.15">15%</option>
            <option value="0.20">20%</option>
          </select>
        </div>
      </div>
      <div class="total-box">
        <span class="important">Total: </span><span id="total">${{ totalView }}</span>
      </div>
      <div class="button-container">
        <input class="button" type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/components/firebase/firebaseInit'
import router from '@/router'
export default {
  name: 'New',
  data () {
    return {
      name: null,
      amount: null,
      reason: null,
      tax: null,
      gratuity: 0.00,
      total: 0.00,
      date: null,
      status: 'waiting',
      taxView: 0.00,
      gratuityView: 0.00,
      totalView: 0.00,
      svg: null,
      animal: ['bat', 'bear', 'bee', 'bird', 'bug', 'butterfly', 'camel', 'cat', 'cheetah', 'chicken', 'coala', 'cow', 'crocodile', 'dinosaur', 'dog', 'dolphin', 'dove', 'duck', 'eagle', 'elephant', 'fish', 'flamingo', 'fox', 'frog', 'giraffe', 'gorilla', 'horse', 'kangoroo', 'leopard', 'lion', 'monkey', 'mouse', 'panda', 'parrot', 'penguin', 'shark', 'sheep', 'snake', 'spider', 'squirrel', 'star-fish', 'tiger', 'turtle', 'wolf', 'zebra', 'turtle']
    }
  },
  beforeMount () {
    let randomNum = Math.round((Math.random() * 100) % 45)
    this.svg = `static/SVG/${this.animal[randomNum]}.svg`
  },
  watch: {
    amount: function (val) {
      this.calculateValues(parseFloat(val))
    },
    tax: function (val) {
      this.calculateValues(parseFloat(val))
    },
    gratuity: function (val) {
      this.calculateValues(parseFloat(val))
    }
  },
  methods: {
    saveData () {
      const d = new Date()
      let formatDate = d.toDateString().split(' ').slice(1).join(' ')
      this.date = d.getTime().toString()
      let data = {
        id: this.date,
        animal: this.svg,
        name: this.name,
        amount: this.amount,
        reason: this.reason,
        tax: this.taxView,
        gratuity: this.gratuityView,
        total: this.totalView,
        date: formatDate,
        status: this.status
      }
      if (this.totalView !== '' && this.totalView > 0) {
        db.ref(this.date).set(data)
        router.push('/')
      } else {
        this.totalView = 'Please Enter an Amount!'
      }
    },
    calculateValues (val) {
      if (isNaN(val)) {
        this.amount = null
        this.tax = 0.00
        this.taxView = 0
        this.gratuity = 0.00
        this.gratuityView = 0
        this.total = 0.00
        this.totalView = 0.00
      } else if (!isNaN(this.amount) && this.amount !== '' && this.amount > 0) {
        this.taxView = (this.amount * this.tax).toFixed(2)
        this.gratuityView = (this.amount * this.gratuity).toFixed(2)
        this.totalView = (parseFloat(this.amount) + parseFloat(this.taxView) + parseFloat(this.gratuityView)).toFixed(2)
      }
    }
  }
}
</script>

<style scoped>
@import "../styles/form-color.css";
@import "../styles/animation.css";
h1 {
  display: inline-block;
  background-color: #0059B2;
  padding: 4px 18px;
  color: snow;
}
form {
  font-size: 1.1em;
  min-width: 250px;
  padding: 40px;
  background-color: white;
  border: 1px solid #E0E0E0;
  box-shadow: 4px 4px #c2defd;
}
#form-itself {
  animation: slideIn 1.2s;
}
input, textarea {
  margin-bottom: 18px;
}
input, textarea, select {
  font-family: 'Cabin', Helvetica, Arial, sans-serif;
  font-size: 1em;
  width: 100%;
  padding: 16px;
  border: none;
  background-color: #F5F5F5;
}
.new {
  max-width: 600px;
  min-height: 100%;
  margin: 0 auto;
  padding-top: 110px;
  opacity: 0;
  animation: fadeIn 0.8s forwards;
}
.img-box {
  height: 128px;
}
#tax-box, #grat-box, #tax, #grat, .total-box {
  font-size: 1em;
  padding: 6px 0;
}
#total {
  display: inline-block;
  min-width: 56px;
  color: forestgreen;
}
.total-box {
  text-align: right;
  font-size: 1.4em;
  padding: 18px 0;
}
.option-box, .button-container {
  text-align: right;
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
.button:hover {
  background: #ff3399;
  box-shadow: none;
}
@media screen and (max-width: 550px) {
  form {
    padding: 30px 25px;
    border: 0 solid #E0E0E0;
    box-shadow: none;
  }
  input, textarea {
    margin-bottom: 10px;
  }
  input, textarea, select {
    padding: 12px;
  }
  .new {
    padding-top: 70px;
  }
}
</style>
