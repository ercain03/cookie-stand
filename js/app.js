var times = ['6am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var appendBody = document.getElementById('append-table-row');
var wholeTable = document.getElementById('whole-table');

var stores = [];

function getRandomIntInclusive(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function storeLocation(name, min, max, avgCooksPerCustomer){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCooksPerCustomer = avgCooksPerCustomer;
  this.arrayA = [];
  this.storeCount = 0;
  this.avgPurchasePerHr = function(){
    for(var i = 0; i < times.length - 1; i++) {
      var randomInt = getRandomIntInclusive(this.min,this.max);
      var results = Math.floor(randomInt * this.avgCooksPerCustomer);
      this.arrayA.push(results);
      this.storeCount += results;
    };
  };
  this.avgPurchasePerHr();
}

function makeLocationRow(storeObj){
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = storeObj.name;
  tr.appendChild(th);
  for(var i = 0; i < storeObj.arrayA.length; i++){
    var td = document.createElement('td');
    td.textContent = storeObj.arrayA[i];
    tr.appendChild(td);
  }
  var td = document.createElement('td');
  td.textContent = storeObj.storeCount;
  tr.appendChild(td);
  console.log('tr ' + tr);
  appendBody.appendChild(tr);
}

stores.push(new storeLocation('Pike Place',17,88,5.2));
stores.push(new storeLocation('Seatac Airport',6,24,1.2));
stores.push(new storeLocation('Southcenter',11,38,1.9));
stores.push(new storeLocation('Bellevue Square',20,48,3.3));
stores.push(new storeLocation('Alki',3,24,2.6));

for(var i = 0; i < stores.length; i++) {
  makeLocationRow(stores[i]);
}

var salesForm = document.getElementById('submission_form');

function handleFormInputs(event){
  event.preventDefault();

  var location = event.target.storLocation.value;
  var minCusty = event.target.minCustomer.value;
  var maxCusty = event.target.maxCustomer.value;
  var avgCusty = event.target.avgCustomer.value;
  var storeFound = false;

  for(var i = 0; i < stores.length; i++){
    if(location === stores[i].name){
      stores[i].min = minCusty;
      stores[i].max = maxCusty;
      stores[i].avgCooksPerCustomer = avgCusty;
      storeFound = true;
    }
  }
  if(storeFound === true){
    console.log(appendBody);
    var tableBody = document.getElementById('append-table-row');
    appendBody.innerHTML = '';
    for(var i = 0; i < stores.length; i++){
      console.log('the table loop fired',i);
      makeLocationRow(stores[i]);
    }
  }

  if(!storeFound){
    var newObj = new storeLocation(location,minCusty,maxCusty,avgCusty);
    stores.push(newObj);
    makeLocationRow(newObj);
  }
}

salesForm.addEventListener('submit', handleFormInputs);
