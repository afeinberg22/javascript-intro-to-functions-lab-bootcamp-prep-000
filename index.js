function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
logShout("string")

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logShout("string")

function sayHitoGrandma(string) {
  var uppercase = "HELLO"
  var lowercase = "hello"
}
  if (string === lowercase) {
    return "I can't hear you!"
  }else if (string === uppercase) {
    return "YES INDEED!"
  }else if (string === "I love you, Grandma.") {	  
    return "I love you, too."
  }

