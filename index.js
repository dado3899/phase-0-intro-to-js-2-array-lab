// Write your solution here!
let BuildingVolume1 = []
let BuildingVolume2 = []
let BuildingVolume3 = []

//This entire thing takes 2 seconds, 1 for base calculation and 1 for base*height
function CalculateVolumeofBox(width,length,height){
    base = (width*length)
    return base*height
}
// This takes 20 seconds per function call, so 40 seconds per
for (let i = 1; i <= 20; i++){
    BuildingVolume1.push(CalculateVolumeofBox(5, 5, i))
    BuildingVolume2.push(CalculateVolumeofBox(10, 7, i))
    BuildingVolume3.push(CalculateVolumeofBox(11, 6, i))
}
console.log(BuildingVolume1)

BuildingVolume1 = []
BuildingVolume2 = []
BuildingVolume3 = []

//This takes 1 seconds, 1 for setting base calculation
function CalculateVolumeOfBoxfunc(width, length){
    let base = width * length
    //this return function takes 1 second
    let newfunction = function (height) {
        return base*height
    }
    return newfunction
}
//3 seconds
const Building1Func = CalculateVolumeOfBoxfunc(5,5)
const Building2Func = CalculateVolumeOfBoxfunc(10,7)
const Building3Func = CalculateVolumeOfBoxfunc(15,4)
// This takes 20 seconds per function call, so 20 seconds per
for (let i = 1; i <= 20; i++){
    BuildingVolume1.push(Building1Func(i))
    BuildingVolume2.push(Building2Func(i))
    BuildingVolume3.push(Building3Func(i))
}
console.log(BuildingVolume1)