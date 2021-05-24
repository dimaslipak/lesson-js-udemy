"use strict";

const options = {
    name: "test",
    weight: 90,
    height: 180,
    style: {
        color: 'red',
        radius: 50,
        pixel: 150
    }
};

// delete options.style.pixel;

console.log(options);

for (let key in options) {
    if(typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${typeof(options[key])} ${i}: - ${options[key][i]};`);
        }
    } else {
        console.log(`Свойство ${key}: - ${options[key]};`);
    } 
}

console.log(`Количество ключей в обьекте: ${Object.keys(options).length}`);

const {color, radius} = options.style;   //деструктуризация обьекта
console.log(color, radius);