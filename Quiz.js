class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    textSize(20);
    text("Results For The Quiz" , 40 , 40)

    //call getContestantInfo( ) here
    contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined

    
     fill("Blue");
     textSize(25);
     text("*NOTE : All The Contestants Who Answered Correctly"+"\n"+"Are HighLighted In Green*" , 5,230);
      
   if("2" === contestant.answer){
      fill("Green");
     textSize(20)
     text(contestant.name + " has got the right answer" , 150 , 300);
   }
    else if(contestant.answer  === "3" || contestant.answer  === "1"|| contestant.answer  === "4")
   {
     fill("Red");
       textSize(20);
     text( contestant.name + " has got the wrong answer",150 , 300);
     
   }    
       
   }
  
//}

     
  }

  

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  


