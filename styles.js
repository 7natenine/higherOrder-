function repeat(fn,n){ 
    for (let x = 0; x < n; x++){
        fn();
    }
}

function hello(){
    console.log('Hello World');
}

function goodbye(){
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
    let newArray = [];
    for(let item of arr) {
        if(fn(item)){
            newArray.push(item);
        }
    }
    return newArray;
}
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const filteredNames = filter(myNames, (name) => name[0] === 'R');

console.log(filteredNames);

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return (location) => {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time${(warningCounter === 1) ? '' : 's'} today!`);
    };
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

let turtleMomvent = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
console.log(turtleMomvent.filter((item) => !(item[0] < 0 || item[1] < 0)));
let totalMovement = turtleMomvent.map((item) => {
    return Math.abs(item[0])+Math.abs(item[1]);
});
console.log(totalMovement);