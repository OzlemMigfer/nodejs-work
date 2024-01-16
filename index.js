//add klasörünü index içinde çağırıp çalıştırır
// require('./add');

//yine çağırıp işlemleri buradan gerçekleştirir
// const addFunc = require('./add');

// console.log('heloooooooooooo index');

// const sum2 = addFunc(3, 5);
// console.log(sum2);


//MODULE WRAPPER
// require('./batman');
// require('./superman');


//MODULE CACHING
// const superHero = require('./super-hero');
// console.log(superHero.getName());
// superHero.setName('Superman');
// console.log(superHero.getName());
// const newSuperHero = require('./super-hero');
// console.log(newSuperHero.getName());

// const SuperHero = require('./super-hero');
// const batman = new SuperHero('Batman');
// console.log(batman.getName());
// batman.setName('Bruce Wayne');
// console.log(batman.getName());
// const superman = new SuperHero('Superman');
// console.log(superman.getName());


//IMPORT EXPORT PATTERNS
const math = require('./math');
const {add, subtract} = math;
console.log(add(2, 6));
console.log(subtract(5, 12));
