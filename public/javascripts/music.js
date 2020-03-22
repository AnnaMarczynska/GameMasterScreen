window.onload = function(){

    var myAudio = document.getElementById('my-audio');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    var stop = document.getElementById('stop');
  
    // associate functions with the 'onclick' events
    play.onclick = playAudio;
    pause.onclick = pauseAudio;
    stop.onclick = stopAudio;
  
    function playAudio() {
      myAudio.play();
    }
  
    function pauseAudio() {
      myAudio.pause();
    }

    function stopAudio() {
        myAudio.pause();
        myAudio.currentTime = 0;
    }
  
  }