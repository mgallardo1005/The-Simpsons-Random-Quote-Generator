 $(document).ready(function() {
   //JSON start function
  var simpsonsQuotes =[
    //Insert all quotes below in [{quote:"", character:""},]; format
    {quote:"Y'ello? You'll have to speak up. I'm wearing a towel.", character:"Homer Simpson"},
	  {quote:"Kids, you tried your best, and you failed miserably. The lesson is, never try.", character:"Homer Simpson"},
    {quote:"You don't win friends with salad!", character:"Homer Simpson"},	    
    {quote:"Simpson, Homer Simpson. He's the greatest guy in history. From the, town of Springfield. He's about to hit a chestnut tree.", character:"Homer Simpson"},	    
    {quote:"Mom, can we go catholic so we get Communion wafers and booze?", character:"Bart Simpson"},	    
    {quote:"Nothing you say can upset us. We're the MTV generation.", character:"Bart Simpson"},	    
    {quote:"Oh, my God. The dead have risen, and they're voting Republican.", character:"Bart Simpson"},
    {quote:"Eat my shorts!", character:"Bart Simpson"},
    {quote:"Don't have a cow, man.", character:"Bart Simpson"},
    {quote:"Well, I like the 49ers because they're pure of heart, Seattle because they got something to prove, and the Raiders because they always cheat.", character:"Lisa Simpson"},
    {quote:"Shut up brain! I've got friends now. I don't need you anymore.", character:"Lisa Simpson"},
    {quote:"Dad, women won't like being shot in the face.", character:"Lisa Simpson"},
    {quote:"Come on. Who wants to complain with me?", character:"Lisa Simpson"},
    {quote:"Bart! You're no longer in Sunday school. Don't swear.", character:"Marge Simpson"},
    {quote:"Homer, we have to do something. Today he's drinking people's blood. Tomorrow he could be smoking.", character:"Marge Simpson"},
    {quote:"I'm going to write the dictionary people and have that checked.", character:"Marge Simpson"},
    {quote:"I brought you some tuna. They say it's brain food. I guess because there's so much dolphin in there.", character:"Marge Simpson"},
    {quote:"And all this time I thought 'Googling yourself' meant the other thing.", character:"Marge Simpson"},
    {quote:"Feels like I'm wearing nothing at all... nothing at all... nothing at all!", character:"Ned Flanders"},
    {quote:"What the heck-a-rooney is this, Mrs. Glick?", character:"Ned Flanders"},
    {quote:"Okaley Dokely", character:"Ned Flanders"},
    {quote:"I'm not thinking straight. Why did I have that wine cooler last month?", character:"Ned Flanders"},
    {quote:"Spend less time on your back, and more time on your knees.", character:"Ned Flanders"},
    {quote:"My scotch is a scotch and water.", character:"Moe Sizlack"},
    {quote:"I had to send away to NASA to calculate your bar tab.", character:"Moe Sizlack"},
    {quote:"I've been called ugly, pug ugly, fugly, pug fugly, but never 'ugly' ugly.", character:"Moe Sizlack"},
    {quote:"Ow, my eye! I'm not suppose to get pudding in it.", character:"Lenny Leonard"},
    {quote:"It's bringing love. Don't let it get away! Break it's legs!", character:"Lenny Leonard"},
    {quote:"Quit wallowing in self pity. Pull yourself together and come get drunk with us.", character:"Carl Carlson"},
    {quote:"I don't know, something about being gay.", character:"Carl Carlson"},
    {quote:"Worst episode ever.", character:"Comicbook Guy"},
    {quote:"That's why you're the judge, and I'm the law talkin' guy...", character:"Lionel Hutz"},
    {quote:"I'll have you know the contents of that dumpster are private! You stick your nose in, you'll be violating attorney-dumpster confidentiality.", character:"Lionel Hutz"},
    {quote:"Thank you. Come again!", character:"Apu Nahasapeemapetilon"},
    {quote:"Celebrate the independence of your nation by blowing up a small part of it.", character:"Apu Nahasapeemapetilon"},
    {quote:"I believe it's a manatee posing as Homer Simpson, sir.", character:"Waylon Smithers"},
    {quote:"Your new duties will include answering Mr. Burns' phone, preparing his tax return, moistening his eyeballs, assisting with his chewing and swallowing, lying to Congress, and some light typing.", character:"Waylon Smithers"},
    {quote:"He thwarted your campaign for governor, you ran over his son, he saved the plant from meltdown, his wife painted you in the nude...", character:"Waylon Smithers"},
    {quote:"In the meantime, sir, may I suggest a random firing? Just to throw the fear of God into them?", character:"Waylon Smithers"},
    {quote:"That's Homer Simpson, sir. One of your drones from sector 7-G", character:"Waylon Smithers"},
    {quote:"Yes, but I'd trade it all for a little more", character:"C. Montgomery Burns"},
    {quote:"Well, for once, the rich white man is in control.", character:"C. Montgomery Burns"},
    {quote:"Eternal happiness for a dollar? I'd be happier with the dollar.", character:"C. Montgomery Burns"},
    {quote:"The foul stench of youth.", character:"C. Montgomery Burns"},
    {quote:"I should be able to run over as many kids as I want", character:"C. Montgomery Burns"},
    {quote:"We have nothing to fear but the aliens and their vastly superior killing technology.", character:"Mayor Joe Quimby"},
    {quote:"Just remember, you represent the office of the Mayor. So always comport yourself in a manner befitting - Quick, honk at that broad!", character:"Mayor Joe Quimby"},
    {quote:"Vote Quimby", character:"Mayor Joe Quimby"},
    {quote:"Attempted murder! Now, honestly, what is that? Do they give nobel prizes for attempted chemistry?", character:"Sideshow Bob"},
    {quote:"Lisa, you don't spend ten years as a homicidal maniac without learning a few things about dynamite.", character:"Sideshow Bob"},
    {quote:"You'll live to regret this!", character:"Sideshow Bob"},
    {quote:"Hey Hey!", character:"Krusty the Clown"},
    {quote:"Ugh, 35 years in show business and already no one remembers me, just like what's-his-name and whose-it, and you know that guy, always wore a shirt?", character:"Krusty the Clown"},
    {quote:"Wow! They'll never let us show that again! Not in a million years!", character:"Krusty the Clown"},
    {quote:"I heartily endorse this event or product.", character:"Krusty the Clown"},
    {quote:"Wow, my first job. Tonight, I'm having peanut butter AND jelly. No more PB or J for me.", character:"Nelson Muntz"},
    {quote:"Let's get him!", character:"Nelson Muntz"},
    {quote:"Oh look! Campers pampers.", character:"Nelson Muntz"},
    {quote:"It sounds Polly-Wolly-Crappy.", character:"Nelson Muntz"},
    {quote:"Well, according to my calculations, the robots won't go berserk for at least 24 hours.", character:"Professor Frink"},
    {quote:"These babies will be in the stores while he's still grappling with the pickle matrix.", character:"Professor Frink"},
    {quote:"Oh wait a minute, this isn't the Monsterometer, it's the Frog-Exaggerator Mm-hai.", character:"Professor Frink"},
    {quote:"I'd rather let a thousand guilty men go free than chase after them.", character:"Police Chief Wiggum"},
    {quote:"Bake him away, toys.", character:"Police Chief Wiggum"},
    {quote:"No, no. Dig up, stupid.", character:"Police Chief Wiggum"},
    {quote:"Suspect is hatless. Repeat, hatless.",	character:"Police Chief Wiggum"},
    {quote:"You got the wrong number. This is 9-1...2.",	character:"Police Chief Wiggum"},
    {quote:"When I grow up, I'm going to Bovine University",	character:"Ralph Wiggum"},
    {quote:"Me fail English? That's 'unpossible.'",	character:"Ralph Wiggum"},
    {quote:"Slow down, Bart. My legs don't know how to be as long as yours.", character:"Ralph Wiggum"},
    {quote:"It tastes like... burning.",	character:"Ralph Wiggum"},
    {quote:"Hi, Super Nintendo Chalmers.",	character:"Ralph Wiggum"},
    {quote:"I don't know where you magic pixies came from, but I like your pixie drink!",	character:"Barney Gumble"},
    {quote:"Don't cry for me. I'm already dead.",	character:"Barney Gumble"},
    {quote:"And, I for one welcome our new insect overlords.",	character:"Kent Brockman"},
    {quote:"Is it a masterpiece? Or just some guy with his pants down?",	character:"Kent Brockman"},
    {quote:"Springfield will have it's first annual 'Do What You Feel' festival this Saturday... It will be a welcome change to our 'Do As We Say' festival, started by German settlers in 1946.",	character:"Kent Brockman"},
    {quote:"We could make things more challenging, but then the stupider students would be complaining.",	character:"Principal Skinner"},
    {quote:"Up yours, children!",	character:"Principal Skinner"},
    {quote:"I'm not principal of the line, mother.",	character:"Principal Skinner"},
    {quote:"Well, if it isn't my old friend, Mr. McGreg, with a leg for an arm, and an arm for a leg.",	character:"Dr. Nick"},
    {quote:"Whoa, that lady swallowed a baby.", character:"Dr. Nick"},
    {quote:"If I kill you, you don't pay.",	character:"Dr. Nick"},
    {quote:"Well, only one in two million people has what we call the 'evil gene'. Hitler had it, Walt Disney had it, and... Freddy Quimby has it.",	character:"Dr. Hibbert"},
    {quote:"We're going to cut you open, and tinker with your ticker.",	character:"Dr. Hibbert"},
    {quote:"Hmm. If I didn't know any better, I'd swear he was trying to moon us.",	character:"Dr. Hibbert"},
    {quote:"I used to be 'with it.' But then they changed what 'it' was. Now what I'm with isn't 'it,' and what's 'it' seems weird and scary to me.",	character:"Abe Simpson"},
    {quote:"You're gonna blow it!",	character:"Abe Simpson"},
    {quote:"Ooh, I feel all funny - Ahh I'm in love! No, wait, it's a stroke.",	character:"Abe Simpson"},
    {quote:"Gimme five bees for a quarter.",	character:"Abe Simpson"},
    {quote:"The important thing was that I tied an onion to my belt, which was the style at the time.",	character:"Abe Simpson"},
    {quote:"Wait a minute, this sounds like rock and or roll.",	character:"Reverend Lovejoy"},
    {quote:"I remember another gentle visitor from the heavens, he came in peace and then died, only to come back to life, and his name was E.T., the extra terrestrial.",	character:"Reverend Lovejoy" },
    {quote:"And once again tithing is 10% off the top. That�s gross income, not net. Please people, don�t force us to audit.",	character:"Reverend Lovejoy"},
    {quote:"Hey Chief. Can I hold my gun sideways? It looks so cool!",	character:"Officer Lou"},
    {quote:"Uh, wallet inspector!",	character:"Snake Jailbird"},
    {quote:"I must have, like, fallen on a bullet.",	character:"Snake Jailbird"},
    {quote:"Give me a million dollars or I'll bash you.",	character:"Snake Jailbird"},
    {quote:"Hey ma, look at that pointy haired little girl.",	character:"Cletus the Slack-Jawed Yokel"},
    {quote:"Now Honey, they's my parents too.",	character:"Cletus the Slack-Jawed Yokel"},
    {quote:"I'd wager he has some variety of walking clock in that box!", character:"Martin Prince"},
    {quote:"Our tenth caller will receive tickets to Supertramp!",	character:"Martin Prince"},
    {quote:"This is the first time anyone has ever sat next to me since I successfully lobbied to have the school day extended by twenty minutes.",	character:"Martin Prince" },
    {quote:"I guess I shouldn't be playing this driving game while driving.",	character:"Otto Mann"},
    {quote:"My name is Otto; I love to get blotto.", character:"Otto Mann"},
    {quote:"I should do some reading. You got any 'Where's Waldo' books?", character:"Otto Mann"},
    {quote:"I stand on my record. Fifteen crashes and not a single fatality.", character:"Otto Mann"},
    {quote:"Do him two favors and then remind him that he owes us a favor.", character:"Fat Tony"},
    {quote:"Boys, advance on him.", character:"Fat Tony"},
    {quote:"I told you we should have bought more than 3 bullets.  Let's just grab him.", character:"Fat Tony"},
    {quote:"Oh Yeah!", character:"Duffman"},
    {quote:"But my mom says I'm cool.", character:"Milhouse Van Houten"},
    {quote:"Everything's coming up Milhouse!", character:"Milhouse Van Houten"},
    {quote:"Milpool",character:"Milhouse Van Houten"},
    {quote:"I'm so hungry, I could eat at Arby's", character:"Sherri or Terri"},
    {quote:"We need more 'Bort' lisence plates in the gift shop.", character:"Itchy and Scratchy Land Worker"},
    {quote:"Paddling the school canoe...ooh, you better believe that's a paddling", character:"Jasper"},
    {quote:"My eyes! The goggles do nothing!", character:"Rainer Wolfcastle"},
    ];
   
   $("#changeQuote").on("click", function(event){ //when the changeQuote button is pressed
        
      var sourceLength = simpsonsQuotes.length; //the amount of quotes we have stored
			var randomNumber = Math.floor(Math.random()*sourceLength); //sets up a variable to be called that will pull a random number between 1 and the number of quotes we have
			var newQuoteText = simpsonsQuotes[randomNumber].quote; //set up variable that stores the randomly generated quote from the object simpsonsQuotes
			var newQuoteCharacter = simpsonsQuotes[randomNumber].character; //set up variable that stores the character who said the randomly generated quote from the object simpsonsQuotes
      var quoteWords = $('#quoteWords'); //sets up a variable to target the quoteWords ID

      quoteWords.fadeOut(500, function(){ //fade out the current quote words in half a second, then run a function that does the following
      quoteWords.html(''); //erase the current quote or else they will stack instead of replace
      quoteWords.append('<p>'+newQuoteText+'</p>'+'<p id="quoteCharacter">'+'-'+newQuoteCharacter+'</p>'); //add this HTML set up to display the new quote and character
      quoteWords.fadeIn(500); //fade in the new quote words in half a second
    }); 
	});		
});
