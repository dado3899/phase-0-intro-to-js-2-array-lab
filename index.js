// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const dupeCats = [...cats,name]
    // dupeCats.push(name)
    return dupeCats
}
function prependCat(name){
    // const dupeCats = [name,...cats]
    return [name,...cats]
}
function removeLastCat(){
    const dupeCats = [...cats]
    dupeCats.pop()
    return dupeCats
}
function removeFirstCat(){
    const dupeCats = [...cats]
    dupeCats.shift()
    return dupeCats
}
