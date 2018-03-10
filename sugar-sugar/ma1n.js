window.addEventListener('load',function() {
  var db = firebase.database();

  var newButton = document.getElementById('new-button');
  var newForm = document.getElementById('new-form');
  var list = document.getElementById('list');
  var dropDown = document.getElementById('drop-down');

  var
    nameEl = document.getElementById('name'),
    amountEl = document.getElementById('amount'),
    dateEl = document.getElementById('date'),
    taxEl = document.getElementById('tax'),
    gratEl = document.getElementById('grat'),
    statEl = document.getElementById('stat');

  function getAllList() {
    db.ref().once('value', function(snapshot) {
      for (var key in snapshot.val()) {
        var name = snapshot.val()[key].name;
        var amount = snapshot.val()[key].amount;
        var date = snapshot.val()[key].date;
        var status = snapshot.val()[key].status;
        var tax = snapshot.val()[key].tax;
        var grat = snapshot.val()[key].grat;

        var divList = document.createElement('div');
        // var infoTag = document.createElement('p');
        // var hTag = document.createElement('h3');
        // var span = document.createElement('span');
        divList.innerHTML = name + '<br>' + '$' + amount + '<br>' + date;

        list.appendChild(divList);
        // divList.appendChild(hTag);
        // divList.appendChild(span);
        // divList.appendChild(infoTag);
        divList.id = key;
        divList.setAttribute('class', status);
      }
    });
  }
  getAllList();
});
