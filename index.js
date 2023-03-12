
function shout(string) {
    return string.toUpperCase();
  }

  console.log("string");

  function whisper(string) {
    return string.toLowerCase();
  }

  console.log("string");

  function logShout(string) {
    console.log (string.toUpperCase());
  }

  console.log("string");

  function logWhisper(string) {
    console.log (string.toLowerCase());
  }
console.log("string");

/*function sayHiToHeadphonedRoommate(string){
  const answer = 'I can\'t hear you!';
  const answer1 = 'YES INDEED!';
  const answer2 = "I would love to!";
  if(string === string.toLowerCase()){
    answer;
  }else if(string === string.toUpperCase()){
    answer1;
  }else {
    string==="Let's have dinner together!"
    return answer2;
  }
}*/

function sayHiToHeadphonedRoommate(string) {
  const answer = "I can\'t hear you!";
  const answer1 = "YES INDEED!";
  const answer2 = "I would love to!";

  if (string === string.toLowerCase()) {
      return answer;
  } else if (string === string.toUpperCase()) {
      return answer1;
  } else {string === "Let's have dinner together!"
      return answer2;
  }
}