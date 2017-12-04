const app = "I don't do much."
function destructivelyAppendKitten() {
  destructivelyAppendKitten(name).push("kitten")
  return destructivelyAppendKitten
}
