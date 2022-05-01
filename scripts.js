var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var evening = 18;


var showCurrentTime = function()
{
   
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var AMPM = "AM";
 
   
	  if (hours >= noon)
	  {
		  AMPM = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
   
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + AMPM + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpghttps://cdn.shopify.com/s/files/1/0070/7032/files/Fearless_Motivational_Quote_Desktop_Wallpaper_1.png?format=webp&v=1600450412";

  var timeEventJS = document.getElementById("timeEvent");
  var imageShown = document.getElementById('Image');
  
 if (time == wakeuptime)
  {
    image = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/inspirational-wake-up-quote-motivational-flow.jpg";
    messageText = "Time To Get Up!!";
  }
  else if (time == lunchtime)
  {
    image = "https://i.pinimg.com/originals/3a/dd/78/3add78e687cd8db611939543347be3a2.jpg";
    messageText = "Time For Lunch!!!!";
  }
  else if (time == naptime)
  {
    image = "https://www.askideas.com/media/83/There-is-a-time-for-many-words-and-there-is-also-a-time-for-sleep.-Homer1.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://i.pinimg.com/736x/b1/2e/fa/b12efad08acb113b7dc0a9f08c8e8796.jpg";
    messageText = "Good morning! Make Today Great!";
  }
  else if (time >= evening)
  {
    image = "https://static1.bigstockphoto.com/5/8/3/large1500/385623743.jpg";
    messageText = "Good evening! Keep Pushing!";
  }
  else
  {
    image = "https://routinelynomadic.com/wp-content/uploads/2022/02/Short-Inspirational-Quotes-768x1024.jpg";
    messageText = "Good afternoon! Don't Stop Yet!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  imageShown.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);