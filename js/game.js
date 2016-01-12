$(document).ready(function(){

  var table = document.getElementById('game-table');
  var startButton = document.getElementById('start-button');
  var counter = 0;
  var alreadyClicked = [];

// click function

  function clickFriend(e){

    var clicked = e.target.id;
    var alreadyLength = alreadyClicked.length;
      if(alreadyLength == 0){
        alreadyClicked.push(clicked);
        counter++;
      } else if(alreadyLength > 0){
          for(var i=0; i<=alreadyLength; i++){
            if(alreadyClicked[i] == clicked){
              console.log('already clicked');
              return false;
            }
          }
          alreadyClicked.push(clicked);
          counter++;
        }
        console.log(alreadyClicked);
  }

  startButton.addEventListener('click', startGame);

// start game and set time

  function startGame(){
    table.addEventListener('click', clickFriend);

    setTimeout(function(){
      table.removeEventListener('click', clickFriend);
      // call results function here
      finalResult();
    }, 20000);
  }

// results function
  function finalResult(){
    if(counter === 0){
      $("h4").html("You clicked " + counter + " out of the 20 pictures. You Suck!");
        $("p").html("<img id='gif-width' src='https://i.imgur.com/1HWQIPa.gif'>");
          $("#myModal").modal("show");  
    } else if(counter >0 && counter <= 5){
        $("h4").html("You clicked " + counter + " out of the 20 pictures. Are you even trying?");
          $("p").html("<img id='gif-width' src='https://31.media.tumblr.com/f699c1259455f91745a4ece7742d447e/tumblr_nbr2j0O1bt1ruqqm0o1_500.gif'>");
            $("#myModal").modal("show");
    } else if(counter >5 && counter <= 10){
        $("h4").html("You clicked " + counter + " out of the 20 pictures. You need to step it up!");
          $("p").html("<img id='gif-width' src='https://45.media.tumblr.com/tumblr_lw2545XdCg1qdpgsdo1_500.gif'>");
            $("#myModal").modal("show");
    } else if(counter >10 && counter <=15){
        $("h4").html("You clicked " + counter + " out of the 20 pictures. Okay Not bad");
          $("p").html("<img id='gif-width' src='https://s-media-cache-ak0.pinimg.com/originals/e5/91/ed/e591ed7a8f94dfb1a2de49bc7048491b.gif'>");
            $("#myModal").modal("show");
    } else if(counter > 15 && counter <20){
        $("h4").html("You clicked " + counter + " out of the 20 pictures. Nice Job Bro!");
          $("p").html("<img id='gif-width' src='https://3.bp.blogspot.com/-iEse-1-jcQM/Vd4T3nfV46I/AAAAAAAAD0g/W19FoXKXy_A/s320/youre-awesome.gif'>");
            $("#myModal").modal("show");
    } else if(counter === 20){
        $("h4").html("You clicked " + counter + " out of the 20 pictures. Wow Awesome Job Bro!");
          $("p").html("<img id='gif-width' src='https://gifrific.com/wp-content/uploads/2012/08/LeBron-James-Dancing-After-Winning-Gold-Medal-2012-London-Olympics.gif'>");
            $("#myModal").modal("show");  
    } 
  }
});
/*function shamoonsAlert(){
  setTimeout(function(){
    alert('Assignment called for an alert:  You clicked on ' + counter + " pictures.");
  }, 4000);
}*/




