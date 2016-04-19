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

// var pikePlace = {
//   name: 'Pike Place',
//   minHrlyCustomer: 17,
//   maxHrlyCustomer: 88,
//   avgCooksPerCustomer: 5.2,
//   avgCooksPurchasedPerHr: function(){
//     var arrayOfAverageCookiesPerCustPerHr = [];
//     for(var i = 0; i < times.length; i++) {
//       var ranNumOfCust = Math.floor((Math.random() * (this.maxHrlyCustomer - this.minHrlyCustomer + 1) + this.minHrlyCustomer));
//       var cookieRate = Math.floor(ranNumOfCust * this.avgCooksPerCustomer + 1);
//       arrayOfAverageCookiesPerCustPerHr.push(cookieRate);
//     }
//     return arrayOfAverageCookiesPerCustPerHr;
//   },
//   moneysMadePerHr: []
// };
//
// pikePlace.moneysMadePerHr = pikePlace.avgCooksPurchasedPerHr();
//
// var seaTacAirport = {
//   name: 'seaTacAirport',
//   minHrlyCustomer: 6,
//   maxHrlyCustomer: 24,
//   avgCooksPerCustomer: 1.2,
//   avgCooksPurchasedPerHr: function(){
//     var arrayOfAverageCookiesPerCustPerHr = [];
//     for(var i = 0; i < times.length; i++) {
//       var ranNumOfCust = Math.floor((Math.random() * (this.maxHrlyCustomer - this.minHrlyCustomer + 1) + this.minHrlyCustomer));
//       var cookieRate = Math.floor(ranNumOfCust * this.avgCooksPerCustomer + 1);
//       arrayOfAverageCookiesPerCustPerHr.push(cookieRate);
//     }
//     return arrayOfAverageCookiesPerCustPerHr;
//   },
//   moneysMadePerHr: []
// };
//
// seaTacAirport.moneysMadePerHr = seaTacAirport.avgCooksPurchasedPerHr();
//
// var southCenter = {
//   name: southCenter,
//   minHrlyCustomer: 11,
//   maxHrlyCustomer: 38,
//   avgCooksPerCustomer: 1.9,
//   avgCooksPurchasedPerHr: function(){
//     var arrayOfAverageCookiesPerCustPerHr = [];
//     for(var i = 0; i < times.length; i++) {
//       var ranNumOfCust = Math.floor((Math.random() * (this.maxHrlyCustomer - this.minHrlyCustomer + 1) + this.minHrlyCustomer));
//       var cookieRate = Math.floor(ranNumOfCust * this.avgCooksPerCustomer + 1);
//       arrayOfAverageCookiesPerCustPerHr.push(cookieRate);
//     }
//     return arrayOfAverageCookiesPerCustPerHr;
//   },
//   moneysMadePerHr: []
// };
//
// southCenter.moneysMadePerHr = southCenter.avgCooksPurchasedPerHr();
//
// var bellevueSquare = {
//   name: bellevueSquare,
//   minHrlyCustomer: 20,
//   maxHrlyCustomer: 48,
//   avgCooksPerCustomer: 3.3,
//   avgCooksPurchasedPerHr: function(){
//     var arrayOfAverageCookiesPerCustPerHr = [];
//     for(var i = 0; i < times.length; i++) {
//       var ranNumOfCust = Math.floor((Math.random() * (this.maxHrlyCustomer - this.minHrlyCustomer + 1) + this.minHrlyCustomer));
//       var cookieRate = Math.floor(ranNumOfCust * this.avgCooksPerCustomer + 1);
//       arrayOfAverageCookiesPerCustPerHr.push(cookieRate);
//     }
//     return arrayOfAverageCookiesPerCustPerHr;
//   },
//   moneysMadePerHr: []
// };
//
// bellevueSquare.moneysMadePerHr = bellevueSquare.avgCooksPurchasedPerHr();
//
// var Alki = {
//   name: Alki,
//   minHrlyCustomer: 3,
//   maxHrlyCustomer: 24,
//   avgCooksPerCustomer: 2.6,
//   avgCooksPurchasedPerHr: function(){
//     var arrayOfAverageCookiesPerCustPerHr = [];
//     for(var i = 0; i < times.length; i++) {
//       var ranNumOfCust = Math.floor((Math.random() * (this.maxHrlyCustomer - this.minHrlyCustomer + 1) + this.minHrlyCustomer));
//       var cookieRate = Math.floor(ranNumOfCust * this.avgCooksPerCustomer + 1);
//       arrayOfAverageCookiesPerCustPerHr.push(cookieRate);
//     }
//     return arrayOfAverageCookiesPerCustPerHr;
//   },
//   moneysMadePerHr: []
// };
//
// Alki.moneysMadePerHr = Alki.avgCooksPurchasedPerHr();
//
// function doTheDomStuff(){
//   var storeInfo = document.getElementById('pike-cookie-sales');
//   for (var i = 0; i < pikePlace.moneysMadePerHr.length; i++){
//     var newLiE = document.createElement('li');
//     newLiE.textContent = times[i] + ': ' + pikePlace.moneysMadePerHr[i] + ' cookies';
//     storeInfo.appendChild(newLiE);
//   }
// }
//
// function doTheDomStuff1(){
//
//   var storeInfo = document.getElementById('seatac-cookie-sales');
//   for (var i = 0; i < seaTacAirport.moneysMadePerHr.length; i++){
//     var newLiE = document.createElement('li');
//     newLiE.textContent = times[i] + ': ' + seaTacAirport.moneysMadePerHr[i] + ' cookies';
//     storeInfo.appendChild(newLiE);
//
//   }
// }
//
// function doTheDomStuff2(){
//   var storeInfo = document.getElementById('bellevue-cookie-sales');
//   for (var i = 0; i < bellevueSquare.moneysMadePerHr.length; i++){
//     var newLiE = document.createElement('li');
//     newLiE.textContent = times[i] + ': ' + bellevueSquare.moneysMadePerHr[i] + ' cookies';
//     storeInfo.appendChild(newLiE);
//   }
// }
//
// function doTheDomStuff3(){
//   var storeInfo = document.getElementById('alki-cookie-sales');
//   for (var i = 0; i < Alki.moneysMadePerHr.length; i++){
//     var newLiE = document.createElement('li');
//     newLiE.textContent = times[i] + ': ' + Alki.moneysMadePerHr[i] + ' cookies';
//     storeInfo.appendChild(newLiE);
//   }
// }
// function doTheDomStuff4(){
//   var storeInfo = document.getElementById('sc-cookie-sales');
//   for (var i = 0; i < southCenter.moneysMadePerHr.length; i++){
//     var newLiE = document.createElement('li');
//     newLiE.textContent = times[i] + ': ' + southCenter.moneysMadePerHr[i] + ' cookies';
//     storeInfo.appendChild(newLiE);
//   }
// }
//
// var pikesCount = 0;
// for(var i = 0; i < pikePlace.moneysMadePerHr.length; i++){
//   pikesCount += pikePlace.moneysMadePerHr[i];
// }
//
// var seatacCount = 0;
// for(var i = 0; i < seaTacAirport.moneysMadePerHr.length; i++){
//   seatacCount += seaTacAirport.moneysMadePerHr[i];
// }
//
// var southCenterCount = 0;
// for(var i = 0; i < southCenter.moneysMadePerHr.length; i++){
//   southCenterCount += southCenter.moneysMadePerHr[i];
// }
//
// var bellevueCount = 0;
// for(var i = 0; i < bellevueSquare.moneysMadePerHr.length; i++){
//   bellevueCount += bellevueSquare.moneysMadePerHr[i];
// }
//
// var alkiCount = 0;
// for(var i = 0; i < Alki.moneysMadePerHr.length; i++){
//   alkiCount += Alki.moneysMadePerHr[i];
// }
// document.getElementById('pike-total').textContent = 'Total: ' + pikesCount + ' cookies';
// document.getElementById('seatac-total').textContent = 'Total: ' + seatacCount + ' cookies';
// document.getElementById('sc-total').textContent = 'Total: ' + southCenterCount + ' cookies';
// document.getElementById('bellevue-total').textContent = 'Total: ' + bellevueCount + 'cookies';
// document.getElementById('alki-total').textContent = 'Total: ' + alkiCount + ' cookies';
//
// doTheDomStuff();
// doTheDomStuff1();
// doTheDomStuff2();
// doTheDomStuff3();
// doTheDomStuff4();
