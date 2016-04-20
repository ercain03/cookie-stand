var times = ['6am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var appendBody = document.getElementById('append-table-row');
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

function makeLocationRow(storeLocation){
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = storeLocation.name;
  tr.appendChild(th);
  for(var i = 0; i < storeLocation.arrayA.length; i++){
    var td = document.createElement('td');
    td.textContent = storeLocation.arrayA[i];
    tr.appendChild(td);
  }
  var td = document.createElement('td');
  td.textContent = storeLocation.storeCount;
  tr.appendChild(td);
  appendBody.appendChild(tr);
}

stores.push(new storeLocation('Pike Place',17,88,5.2));
stores.push(new storeLocation('Seatac Airport',6,24,1.2));
stores.push(new storeLocation('Southcenter',11,38,1.9));
stores.push(new storeLocation('Bellevue Square',20,48,3.3));
stores.push(new storeLocation('Alki',3,24,2.6));

for(var i = 0; i < stores.length; i++)
{
  makeLocationRow(stores[i]);
}
