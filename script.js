var chiffreDAffaire2019 = 44000;
var chiffreDAffaire2020 = 50000;
var reduction = 0;

if ( (chiffreDAffaire2020 >= 30000) && (chiffreDAffaire2020 <= 60000) ) {
  reduction = 10;
} else if ( ((chiffreDAffaire2020 >= 20000) && (chiffreDAffaire2020 <= 20999)) && (chiffreDAffaire2019 <= 50000) ) {
  reduction = 20;
} 

if ( ((annee%4 == 0) && !(annee%100 == 0)) || (annee%400 == 0) ) {
  reduction += 5;
}

console.log(reduction);
console.log((chiffreDAffaire2020/100)*reduction);

var age = 16;
var estMajeur = null;

if (age > 18) {
  estMajeur = true;
} else {
  estMajeur = false;
}
console.log(estMajeur);
