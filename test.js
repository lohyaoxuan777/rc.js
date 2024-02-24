const rc2 = require('./src/features');
let volvo_car = new rc2.CarBrand("Volvo", 2000);

rc2.wistTnow();
rc2.abcNow();
rc2.piE();
rc2.wistDnow();
console.log(`My car is ${volvo_car.age()} year's old.`);