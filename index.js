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
// const math = require('./math');
// const {add, subtract} = math;
// console.log(add(2, 6));
// console.log(subtract(5, 12));


//IMPORTING JSON AND WATCH MODE
// const data = require('./data.json');
// console.log(data.address.city);


//BUILT-IN MODULES
//PATH MODULE
const path = require("node:path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));

// console.log(path.join("folder1","folder2","folder3"));
// console.log(path.join("/folder1","folder2","folder3"));
// console.log(path.join("folder1","//folder2","folder3"));//işe yaramaz '//' bir etkisi olmaz
// console.log(path.join("folder1","folder2","../folder3"));
// console.log(path.join(__dirname,"data.json"));

console.log(path.resolve("folder1","folder2","folder3"));
console.log(path.resolve("/folder1","folder2","folder3"));
console.log(path.resolve("folder1","//folder2","folder3"));
console.log(path.resolve("folder1","folder2","../folder3"));
console.log(path.resolve(__dirname,"data.json"));