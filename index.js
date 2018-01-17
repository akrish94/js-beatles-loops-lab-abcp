function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0, l = musicians.length; i < l; i++ ) {
    array.push(`${musicians[i]} plays ${instruments[i]}` )
  }
  return array 
}
  

function johnLennonFacts(facts) {
  var facts1 = []
  let i = 1
  while (i < facts.length) {
    facts1.push(`${facts[i]}!!!`)
    i++
  }
  return facts1 
}
