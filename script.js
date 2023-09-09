
 window.onload= function()
 {
     getRandomQuotaionsReady();
 }
 
 function getRandomQuotaionsReady()
 {
     var btn = document.getElementById("btn");
     btn.onclick= function()
     {
         var randomQuotesArray = [
             "A quotation is the repetition of a sentence.",
             "phrase or passage from speech or text that.",
             "someone has said or written. In oral speech.",
             "it is the representation of an utterance that.",
             "is introduced by a quotative marker, such as a.",
             "verb of saying. For example: John said yasir zaman.",
             "I saw Mary today hjhjdfj jfddld ccjdjcd idfjkedjf jd."
 
 
         ];
         var randomQuote = document.getElementById("randomQuote");
 
         var rand = Math.floor(Math.random()*10);
         randomQuote.textContent = "\""+randomQuotesArray [rand]+"\"";
     }
 }
 
   
 
    
 
  

   
