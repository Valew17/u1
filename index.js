//Задание 1
function loop (times=0,callback=null) {

    if (typeof callback !== 'function') {
        console.log('Это не функция');
        return false;
    }

    while (times > 0) {
        callback(times);
        times--;
    }
}

function test (num) {
    console.log('меня вызволи ' + num + ' раз.');
}

loop(2, test);
//

//Задание 2
function calculateArea (a, b) {
    let area = a * b;

    return {
        area: area,
        figure: 'square',
        input: [a, b],
    };
}

let info = calculateArea(2,2);
console.log(info);
//

//Задание 3
//Вообще не понял что надо сделать, пол часа перечитывал, бесполезно(

//Задание 4
const promiseArray = [];

for (let i = 0; i < 10; i++) {

    promiseArray[i] = new Promise((resolve, reject) => {

        let ii = i+1;

        const url = 'https://jsonplaceholder.typicode.com/users/' + ii;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();

        xhr.onload = function() {
            if (xhr.status != 200) {
                reject('не удача');
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = function() {
            reject('не удача');
        }

    });
}

Promise.all(promiseArray).then((result) => {
    console.log(result);
}).catch((reject) => {
    console.log(reject);
});
