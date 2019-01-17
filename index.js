// add solution here

function theBeatlesPlay(musiciansArray, instrumentsArray) {
  //console.log(musiciansArray)
  var newArray = []
  for (var i = 0; i<musiciansArray.length; i++) {
    var string = `${musiciansArray[i]} plays ${instrumentsArray[i]}.`
    newArray[i] = string
  }
  console.log(newArray)
  return newArray 
}

function johnLennonFacts(factsArray) {
  var newArray = []
  var i = 0
  while (i < factsArray.lenth) {
    var string = factsArray[i] + "!!!"
    newArray[i] = string
    i--
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var newArray = []
  var i = number
  do {
    newArray[i] = 'I love the Beatles!'
  } while (i < 15)
  return newArray
}

iLoveTheBeatles(2)
