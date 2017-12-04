const app = "I don't do much."

array kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph) {
  kittens.push("Ralph")
}
array kittens = ["Milo", "Otis", "Garfield"]

function destructivlyPrependKitten(Ralph) {
  kittens.unshift("Ralph")
}
array kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten() {
  kittens.slice(3)
}
