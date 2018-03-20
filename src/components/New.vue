<template>
  <div class="new">
    <form id="form-itself" @submit="saveData" action="index.html" autocomplete="off">
      <h1>New Sugar</h1>
      <br>
      <div class="name-box">
        <input id="name" type="text" name="name" placeholder="Name*" v-model="name" required />
      </div>
      <br>
      <div class="amount-box">
        <input id="amount" type="number" name="amount" placeholder="Amount*" v-model="amount" required />
      </div>
      <br>
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
import db from './firebaseInit'
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
      status: 'none',
      taxView: 0.00,
      gratuityView: 0.00,
      totalView: 0.00,
      animal: ['bat','bear','bee','bird','bug','butterfly','camel','cat','cheetah','chicken','coala','cow','crocodile','dinosaur','dog','dolphin','dove','duck','eagle','elephant','fish','flamingo','fox','frog','giraffe','gorilla', 'horse', 'kangaroo','leopard','lion','monkey','mouse','panda','parrot','penguin','shark','sheep','snake','spider','squirrel','star-fish','tiger','turtle','wolf','zebra']
    }
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
      this.date = d.getTime().toString()
      let data = {
        id: this.date,
        name: this.name,
        amount: this.amount,
        reason: this.reason,
        tax: this.taxView,
        gratuity: this.gratuityView,
        total: this.totalView,
        date: d.toDateString(),
        status: this.status
      }
      if (this.totalView !== '' && this.totalView > 0) {
        console.log(data)
        db.ref(this.date).set(data)
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
h1 {
  display: inline-block;
  background-color: #0059B2;
  padding: 4px 18px;
  margin: 0 0 50px 0;
  color: snow;
}
form {
  border: 1px solid #E0E0E0;
  padding: 40px;
  min-width: 250px;
  box-shadow: 4px 4px #c2defd;
  background-color: white;
}
label {
  text-align: left;
}
input, textarea, select {
  font-family: 'Cabin', Helvetica, Arial, sans-serif;
  font-size: 1em;
  width: 100%;
  background-color: #F5F5F5;
  border: none;
  padding: 16px;
}
/* Chrome/Opera/Safari */
::-webkit-input-placeholder {
  color: #68b4ff;
}
/* Firefox 19+ */
::-moz-placeholder {
  color: #68b4ff;
}
/* IE 10+ */
:-ms-input-placeholder {
  color: #68b4ff;
}
/* Firefox 18- */
:-moz-placeholder {
  color: #68b4ff;
}
.new {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 115px;
}
.name-box, {
  text-align: left;
}
.option-box, .button-container {
  text-align: right;
}
#tax-box, #grat-box, #tax, #grat, .total-box {
  font-size: 1em;
  padding: 6px 0;
}
.total-box {
  text-align: right;
  font-size: 1.4em;
  padding: 18px 0;
}
#total {
  display: inline-block;
  min-width: 56px;
  color: #33FF99;
}
.button {
  font-weight: bold;
  font-size: 1.2em;
  padding: 14px;
  border: none;
  border-right: 4px solid #d52d81;
  border-radius: 3px;
  background-color: #f64da1;
  box-shadow: 3px 3px #B8B8B8;
  color: snow;
}
.button:hover {
  background: #ff3399;
  box-shadow: none;
  box-shadow: -1px -1px #B8B8B8;
}
</style>
