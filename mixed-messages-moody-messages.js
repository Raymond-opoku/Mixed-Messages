const quoteGenerator={
    _happyQuotes:[],
    _sadQuotes:[],
    _motivationalQuotes:[],


    randomQuotes(array){
        const rand=Math.floor(Math.random()*array.length);
        return array[rand]
    },
    get happyQuotes(){
        return this.randomQuotes(this._happyQuotes);
    },
    get sadQuotes(){
        return this.randomQuotes(this._sadQuotes);
    },
    get motivationalQuotes(){
        return this.randomQuotes(this._motivationalQuotes);
    },
    addHappyQuotes(...params) {
        //Adds one or more new zodiac values
        for(let i=0; i<params.length; i++) {
            this._happyQuotes.push(params[i]);
        }
    },
    addSadQuotes(...params) {
        //Adds one or more new future message(s) values
        for(let i=0; i<params.length; i++) {
            this._sadQuotes.push(params[i]);
        };
    },
    addMotivationalQuotes(...params) {
        //Adds one or more new future message(s) values
        for(let i=0; i<params.length; i++) {
            this._motivationalQuotes.push(params[i]);
        };
    },
    introMessage() {
        return "Welcome to your Motivational Message Generator!";
      },
      getMessage() {
          //Logs a random horoscope reading to the console
          console.log(this.introMessage());
          console.log(`Your happy mood message is: \n${this.happyQuotes}`);
          console.log(`Your sad mood message is: \n${this.sadQuotes}`);
          console.log(`Your motivational message is: \n${this.motivationalQuotes}`);

          
      },
     /* Trying to set condition for mood then generate a mixed message basad on mood
     getMood(mood){
          if(mood==='happy'){
              return this.getMessage(mood)
          }else if(mood==='sad'){
              return this.getMessage(mood)
          }else{
              return this.getMessage(mood)
          }
      }*/
    
};

//quoteGenerator.getMood('happy');
quoteGenerator.addHappyQuotes("Happiness is when you think, what you say and what you do are in harmony\n-Mahatma Ganghi","Be happy this moment.This moment is your life\n-Omar Khayyam","Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.\n—Helen Keller","Action may not always bring happiness, but there is no happiness without action.\n—William James");
quoteGenerator.addSadQuotes("Sadness flies away on the wings of time\n-Jean de La Fontaine"," Sadness is but a wall between two gardens.\n-Kahlil Gibran","One must not let oneself be overwhelmed by sadness\n-Jacqueline Kennedy Onassis","Our sweetest songs are those that tell of saddest thought\n-Percy Bysshe Shelley")
quoteGenerator.addMotivationalQuotes("Success is not final; failure is not fatal: It is the courage to continue that counts\n— Winston S Churchill","The road to success and the road to failure are almost exactly the same\n— Colin R Davis","We cannot solve problems with the kind of thinking we employed when we came up with them\n— Albert Einstein","Learn as if you will live forever, live like you will die tomorrow\n— Mahatma Gandhi.")
quoteGenerator.getMessage();

