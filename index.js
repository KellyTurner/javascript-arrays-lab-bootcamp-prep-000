const app = "I don't do much."

const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph) {
  kittens.push("Ralph")
}
const kittens = ["Milo", "Otis", "Garfield"]

function destructivlyPrependKitten(Ralph) {
  kittens.unshift("Ralph")
}
const kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten() {
  kittens.slice(3)
}
