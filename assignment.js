// https://github.com/Nayem1315/assignment.js

// kilometerToMeter
// budgetCalculator
// hotelCost
// megaFriend



// kilometerToMeter

function kilometerToMeter(kilo) {
  var meter = kilo / 1000;
  return meter;
}
var result = kilometerToMeter(1);
console.log(result);


//budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
  var forWatch = watch * 50;
  var forMobile = mobile * 100;
  var forLaptop = laptop * 500;
  var total = forWatch + forMobile + forLaptop;
  return total;
}
var result = budgetCalculator(2, 1, 2);
console.log(result);



// hotelCost

function hotelCost(days) {
  var cost = 0;
  if (days < 0) {
    return "Wrong";
  }

  else if (days <= 10) {
    cost = days * 100;

  }
  else if (days <= 20) {
    var firstCost = 10 * 100;
    var leftDays = day - 10;
    var secondCost = leftDays * 80;
    cost = firstCost + secondCost;
  }
  else {
    firstCost = 10 * 100;
    secondCost = 10 * 80;
    reminingDay = day - 20;
    var thirdCost = reminingDay * 50;

    cost = firstCost + secondCost + thirdCost;

  }
  return cost;
}
var result = hotelCost(1)
console.log(result);


// megaFriend

function megaFriend(names) {
  var name = 0;
  var friendName = [];
  for (var i = 0; i < names.length; i++) {
    if (name < names[i].length) {
      name = names[i].length;
    }
  }
  for (var j = 0; j < names.length; j++) {
    if (names[j].length == name) {
      friendName.push(names[j]);
    }
  }
  if (friendName.length == 1) {
    return friendName[0];
  }
  else {
    return friendName;
  }
}
console.log(megaFriend(["munna", "saiful", "kobir", "musa"]))