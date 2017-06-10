function startTyping(){
  var hobbies = ["a Team Player", "Decidated", "Self Motivated", "Determined", "a Full Stack Developer"];
  var i = 0,
      j = 0,
      blink = false,
      canGo = false,
      pause = true;

  var cursor = document.querySelector('.cursor');

  // cursor blinker
  setInterval(function(){
    blink = !blink;
    cursor.style.opacity = (blink)? "0" : "1";
  }, 500);

  var typingSpan = document.querySelector("#typing");
  hobbies.splice(hobbies.length-1, 0, typingSpan.innerText);
   
  // type to screen
  setInterval(function(){
    if(canGo && !pause){
      // check if array index has lapsed
      if(i >= hobbies.length){
        i = 0;
      }
      // store string in variable
      var hobby = hobbies[i];
      // apply class when index is at last array element
      typingSpan.className = (hobby == hobbies[hobbies.length-1]) ?
        "highlight" : " ";
      // print string to the screen
      typingSpan.innerText += hobby[j++];
      
      // chceck if full string is printed
      // point to next array element
      // reset printing string index
      // allow delete timeer to run
      if(j >= hobby.length){
        i++;
        j = 0;
        canGo = false;
        setTimeout(function(){
          pause = true;
        },1800);
      }
    }
  }, 150);

    // backspace
  setInterval(function(){
    if(!canGo && pause){
      var newString = typing.innerText.slice(0,-1);
      typingSpan.innerText = newString;
      if(newString.length == 0){
        canGo = true;
        pause = false;
      }
    }
  },100);

}

startTyping();