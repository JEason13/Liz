if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
  'liz *val' : function(val){
    $scope.Todo = val;
    $scope.addTodo();
    $scope.$apply();
    },
   
    
    
   'hello' : function(val){
        speech.text = "Hello there!";
          speechSynthesis.speak(speech);
    },
    
    'hi' : function(val){
        speech.text = "Hello there!";
          speechSynthesis.speak(speech);
    },
    
    'hey liz' : function(val){
        speech.text = "what do you want?";
          speechSynthesis.speak(speech);
    },
    
    'what time is it(right now)' : function(val){
        speech.text = string[hours-1]+" "+string[min-1];
          speechSynthesis.speak(speech);
    },
    
    'how are you' : function(val){
        speech.text = "i\'m great! thank\'s for asking"
          speechSynthesis.speak(speech);
    },
    
    'what is your name' : function(val){
        speech.text = "my name is liz";          
          speechSynthesis.speak(speech);
    },
    
     'what are you' : function(val){
        speech.text = "i am language itelligence zulu, model twenty-six, but you can call me liz. i am a example program the my creator made for the pioneer coding club!";          
          speechSynthesis.speak(speech);
    },
    
     'are you british' : function(val){
        speech.text = "i most certaintly am!";          
          speechSynthesis.speak(speech);
    },
    
    'say *val' : function(val){
        speech.text = val;          
          speechSynthesis.speak(speech);
    },
    
    'what is my name' : function(val){
        speech.text = document.getElementById('name').innerHTML= ("your name is ") +name;          
          speechSynthesis.speak(speech);
    },
    
     'who are you' : function(val){
        speech.text = "i am Liz, an artificially intelligent program written by Jacob Eason";          
          speechSynthesis.speak(speech);
    },
    
         'good job' : function(val){
        speech.text = "Thank you!";          
          speechSynthesis.speak(speech);
    },
    
    
         'what is the theory of general relativity' : function(val){
        speech.text = "General relativity (GR, also known as the general theory of relativity or GTR) is the geometric theory of gravitation published by Albert Einstein in 1915 and the current description of gravitation in modern physics.";          
          speechSynthesis.speak(speech);
    },
    
         'thank you' : function(val){
        speech.text = "you are very welcome";          
          speechSynthesis.speak(speech);
    },
    
         'good night' : function(val){
        speech.text = "good night!";          
          speechSynthesis.speak(speech);
    },
    
         'good morning' : function(val){
        speech.text = "good morning!";          
          speechSynthesis.speak(speech);
    },
    
         'who is your creator' : function(val){
        speech.text = "my creator is Jacob Eason, he created me on augest 27, 2018.";          
          speechSynthesis.speak(speech);
    },
    
         'what is the atomic theory' : function(val){
        speech.text = "the atomic theory is a scientific theory of the nature of matter, which states that matter is composed of discrete units called atoms. It began as a philosophical concept in ancient Greece and entered the scientific mainstream in the early 19th century.";          
          speechSynthesis.speak(speech);
    },
    
         'define arachnophobia' : function(val){
        speech.text = "Arachnophobia is the extreme or irrational fear of spiders. This condition is usualy due to a traumatic experiance with spiders early in life.";          
          speechSynthesis.speak(speech);
    },
    
         'hi' : function(val){
        speech.text = "hi there!";          
          speechSynthesis.speak(speech);
    },
    
    'what is a neural network' : function(val){
        speech.text = "a neural network is a computer system modeled on the human brain and nervous system.";          
          speechSynthesis.speak(speech);
    },
    
    'liz' : function(val){
        speech.text = "yes?";          
          speechSynthesis.speak(speech);
    },
    
    'define supermassive black hole' : function(val){
        speech.text = "A supermassive black hole (SMBH or SBH) is the largest type of black hole, on the order of hundreds of thousands to billions of solar masses, and is found in the centre of almost all currently known massive galaxies.";          
          speechSynthesis.speak(speech);
    },
    
    'why don\'t you introduce yourself' : function(val){
        speech.text = "Hello! I\'m Liz, an artificialy intelligent responcive agent! I am the twenty-sixth version of the AIRA project. I was created by Jacob Eason with the intent of learning to one day have human like understanding!";          
          speechSynthesis.speak(speech);
    },
    
    'what day is it' : function(val){
        speech.text = d;          
          speechSynthesis.speak(speech);
    },
    
    'that\'s cool' : function(val){
        speech.text = "it sure is!";          
          speechSynthesis.speak(speech);
    },
    
    'tell me a joke' : function(val){
        speech.text = "Never criticize someone until you\'ve walked a mile in their shoes. That way, when you criticize them, they won\'t be able to hear you from that far away. Plus, you\'ll have their shoes.";          
          speechSynthesis.speak(speech);
    },
    
    'tell me another joke' : function(val){
        speech.text = "The world tongue-twister champion just got arrested. I hear they're gonna give him a really tough sentence.";          
          speechSynthesis.speak(speech);
    },
    
    'what is your favorite color' : function(val){
        speech.text = "hmm. tough question. probally blue.";
      
          speechSynthesis.speak(speech);
    },
    
    'explain linear regression' : function(val){
        speech.text = "linear regression is a linear approach to modelling the relationship between a scalar response and one or more explanatory variables";          
          speechSynthesis.speak(speech);
    },
    
    'shutdown code lima' : function(val){
        speech.text = "powering down"; 
      SpeechKITT.setAbortCommand(annyang.abort);
          speechSynthesis.speak(speech);
    },
    
    'nothing' : function(val){
        speech.text = "ok then!";
          speechSynthesis.speak(speech);
    },
    
    'run a diagnostic' : function(val){
        speech.text = "you and I both know that you haven\'t given me that functionality yet";          
          speechSynthesis.speak(speech);
    },
    
    'are you smart' : function(val){
        speech.text = "yes in a technical sence, but i\'m still learning to have more human like intelligence";          
          speechSynthesis.speak(speech);
    },
    
    /*"rat" : function(val){
        speech.text = "get ready Ian, ha ha";       
          speechSynthesis.speak(speech);
      var audio = document.getElementById("rr1"); 
    },
    */
    '' : function(val){
        speech.text = "";          
          speechSynthesis.speak(speech);
    },
    
    '' : function(val){
        speech.text = "";          
          speechSynthesis.speak(speech);
    },
    
    '' : function(val){
        speech.text = "";          
          speechSynthesis.speak(speech);
    },
    
    '' : function(val){
        speech.text = "";          
          speechSynthesis.speak(speech);
    },
    
    '' : function(val){
        speech.text = "";          
          speechSynthesis.speak(speech);
    },
    

  }
  // Add our commands to annyang
  annyang.addCommands(commands);
  //annyang.debug();
  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
