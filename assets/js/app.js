let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];
let start = +prompt("Введите индекс элемента, с которого начать копирование", );
let end = arr.length - 1;

function methodSlice(arr, start, end) {
    for (let i = start; i <= end; i++) {

        newArr.push(arr[i]);
    }
    return newArr;

}

let result = methodSlice(arr, start, end);
console.log(methodSlice(newArr))