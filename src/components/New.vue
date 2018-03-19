<template>
  <div class="new">
    <form id="form-itself" action="index.html">
      <h1>New Sugar</h1>
      <br>
      <div class="name-box">
        <input id="name" type="text" name="name" placeholder="Name*" autocomplete="off" required />
      </div>
      <br>
      <div class="amount-box">
        <input id="amount" type="number" name="amount" placeholder="Amount*" required />
      </div>
      <br>
      <div class="reason-box">
        <textarea id="reason" type="text" name="reason" placeholder="For..."></textarea>
      </div>
      <div class="option-box">
        <div id="tax-box">
          <div id="tax">Tax: </div>
          <select id=tax-option>
            <option value="0.00">none</option>
            <option value=".08875">NY</option>
          </select>
        </div>
        <div id="grat-box">
          <div id="grat">Gratuity: </div>
          <select id="grat-option">
            <option value="0.00">none</option>
            <option value="0.10">10%</option>
            <option value="0.15">15%</option>
            <option value="0.20">20%</option>
          </select>
        </div>
      </div>
      <div class="total-box">
        <span class="important">Total: </span><span id="total">$0.00</span>
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
      title: 'Sugar beta 1.0'
    }
  }
}
</script>

<style scoped>
form {
  border: 1px solid #E0E0E0;
  padding: 20px 26px;
  margin: 30px 20px 0 20px;
  min-width: 250px;
  box-shadow: 4px 4px #4DA6FF;
  background-color: white;
}
label {
  text-align: left;
}
input, textarea, select {
  font-family: 'Cabin', Helvetica, Arial, sans-serif;
  font-size: .9em;
  width: 100%;
  background-color: #F5F5F5;
  border: none;
  padding: 12px;
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
h1 {
  display: inline-block;
  background-color: #0059B2;
  padding: 4px 18px;
  color: snow;
}
.new {
  max-width: 500px;
  margin: 0 auto;
  padding-top: 110px;
}
.name-box, {
  text-align: left;
}
.option-box {
  text-align: right;
}
#tax-box, #grat-box, #tax, #grat, .total-box {
  font-size: 1.1em;
  padding: 6px 0;
}
.total-box {
  text-align: right;
  padding: 12px 0;
}
#total {
  display: inline-block;
  min-width: 56px;
  color: #33FF99;
}
.button-container {
  text-align: right;
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
