<template>
  <div class="new">
    <h1>New Sugar</h1>
    <form id="form-itself" action="index.html">
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
      <div class="total-box">
        <span class="important">Total: </span><span id="total"></span>
      </div>
      <div class="button-container">
        <input class="button" type="submit" value="Submit">
      </div>
    </form>
  </div>

</template>

<script>
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
  padding: 26px;
  margin-top: 30px;
  box-shadow: 4px 4px #D8D8D8;
}
label {
  text-align: left;
}
input, textarea {
  width: 200px;
  background-color: #F5F5F5;
  border: none;
  padding: 12px;
}
/* Chrome/Opera/Safari */
::-webkit-input-placeholder {
  color: #99CCFF;
}
/* Firefox 19+ */
::-moz-placeholder {
  color: #99CCFF;
}
/* IE 10+ */
:-ms-input-placeholder {
  color: #99CCFF;
}
/* Firefox 18- */
:-moz-placeholder {
  color: #99CCFF;
}
.new {
  max-width: 300px;
  margin: 0 auto;
  margin-top: 90px;
}
.name-box, {
  text-align: left;
}
.button-container {
  text-align: right;
}
.button {
  font-weight: bold;
  font-size: 1.1em;
  width: 100px;
  padding: 7px;
  border: none;
  border-right: 4px solid #d52d81;
  background-color: #f64da1;
  box-shadow: 2px 2px #D8D8D8;
  color: snow;
}
.button:hover {
  background: #ff3399;
  box-shadow: none;
}
</style>
