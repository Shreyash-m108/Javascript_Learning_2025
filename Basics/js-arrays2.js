let hundaiCars = ['Creta','Verna','Alcazar','Elentra']
let suzukiCars = ['Swift','Ertiga','Wagonar','Fronx']
let tataCars = ['Nexon', 'Harrier','Sumo','Safari']

//'concat' used for only two arrays 
let concatCars = hundaiCars.concat(suzukiCars)
// console.log(concatCars);

//if more than one array use 'spread' method 
let spreadCars = [...hundaiCars,...suzukiCars,...tataCars]
// console.log(spreadCars);

//for making easy to read use 'flat' method
let nestedArray = [1,2,3,[4,5,6],[6,4,[3,5,3]],6,7]
let flatArray = nestedArray.flat(Infinity)
console.log(flatArray);
