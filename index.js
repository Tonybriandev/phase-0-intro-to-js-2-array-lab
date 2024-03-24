// Write your solution here!
const cats = [ "Milo","Otis","Garfield"]
console.log(cats)

function destructivelyAppendCat(name) {
  cats.push("Milo");
}

function destructivelyPrependCat(name) {
  cats.unshift("Milo");
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return cats.concat("Milo");
}

function prependCat(name) {
  return ["Milo"].concat(cats);
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}



