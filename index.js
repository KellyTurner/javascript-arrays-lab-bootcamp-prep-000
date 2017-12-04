const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph) {
  kittens.push("Ralph")
}
var kittens = ["Milo", "Otis", "Garfield"]

function destructivlyPrependKitten(Ralph) {
  kittens.unshift("Ralph")
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten() {
  kittens.slice(3)
}
