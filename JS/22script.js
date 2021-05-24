"use strict";

const str = {
    a: 3,
    b: 5,
    c: 234,
    d: {
        x:123,
        y: 523
    }
};

const str2 = {
    m: 43,
    n: 34
};

const clone = Object.assign({}, str2);  // клонирование обьекта или объединение!
console.log(clone);

const arr = [1, 4, 7, 20, 5];
const arrNew = arr.slice();   //клонируем массив
console.log(arrNew);


const video = [ 'youtube', 'megogo', 'zone'],
    music = ['apple', 'yandex', 'dezeer'],
    collection = [...video, ...music, 'DDT', 'Lumen'];   //spread оператор 

    console.log(collection);

    const newarr = [1, 4, 7, 20, 5];
    const newarr2 = [...newarr];  //клонируем массив

    const obj1 = {
        m: 43,
        n: 34
    };
    const obj2 = {...obj1}; //клонируем обьект
