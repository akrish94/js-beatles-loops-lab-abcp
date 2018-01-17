function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0, l = musicians.length; i < l; i++ ) {
    array.push(`${musicians[i]} plays ${instruments[i]}` )
  }
  return array 
}
  

function johnLennonFacts(facts) {
  var array = []
  let i = 1
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
  }
  return array 
}
