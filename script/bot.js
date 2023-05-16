//............. Default msg from BOT.............//
function firstBotMessage() {
  let firstMessage = "👋 Hi there! I am your Academic Assistant."; //1st comment <----
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime(); //retrieve time

  $("#chat-timestamp").append(time); //append time to chat
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

//...... Response.......//
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//..........input box text..........// 
function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    getBotResponse(userText) = ""; //print if user failed to add text
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000); //1sec delay added
}

// ..............OPENAI API.................//
// async function getOpenAIResponse(userText) {
//   const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer API_KEY_HERE',  //API Key Here
//     },
//     body: JSON.stringify({
//       prompt: userText,
//       max_tokens: 10,
//       temperature: 0.7,
//     }),
//   });

//   const data = await response.json();
//   return data.choices[0].text.trim();
// }



//......Collapsible......//
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


//.....Time.....//
function getTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let amOrPm = hours >= 12 ? "PM" : "AM"; // set AM or PM based on hours

  hours = hours % 12; // convert to 12-hour format
  hours = hours ? hours : 12; // set 12 to 12, not 0

  if (hours < 10) {
    hours = "0" + hours; // add leading zero for hours < 10
  }

  if (minutes < 10) {
    minutes = "0" + minutes; // add leading zero for minutes < 10
  }

  let time = hours + ":" + minutes + " " + amOrPm;
  return time;
}

//....... Handles sending text via button clicks.........//
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

function contactButton() {
  window.location = "tel:+1234567890"; //redir.
}

//..... Press enter to send a message......//
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    //key code for "Enter"
    getResponse();
  }
});


  const phrases = ["Enter your message here...", "eg: Top mentors","eg: Internship"];
  const inputField = document.getElementById("textInput");
  let i = 0;
  setInterval(function() {
    inputField.placeholder = phrases[i++ % phrases.length];
  }, 3000);





// ......................BOT RESPONSES...................//



function getBotResponse(input) {
  //............ Simple responses with links................//
  if (input == "hello") {
    return "Hello there!";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  } else if (input == "Hi") {
    return "Hello there! How can i help you?";
  }else if (input == "Hello") {
    return "Hello there!";
  }else if (input == "hi") {
    return "Hello there! How can i help you?";
  } else if (input == "sciastra") {
    return "SciAstra is the biggest community of science scholars in India for IISER Aptitude test (IAT), National Entrance Screening Test (NEST), ISI, CMI, and IACS.";
  } else if (
    input.includes("course") ||
    input.includes("online classes") ||
    input.includes("e-learning") ||
    input.includes("class")
  ) {
    return "Here are some sources for online courses: <a href='https://www.sciastra.com/courses/' title='Crash Course'>📚 Crash Course's</a>, <a href='https://voaaf.courses.store/214131?utm_source%3Dother%26utm_medium%3Dstudent-course-referral%26utm_campaign%3Dcourse-overview-webapp' title='IISERs'>IISERs</a>, <a href='https://voaaf.courses.store/214131?utm_source%3Dother%26utm_medium%3Dstudent-course-referral%26utm_campaign%3Dcourse-overview-webapp' title='NISER'>NISER</a>";
  } else if (
    input.includes("study materials") ||
    input.includes("learning resources")
  ) {
    return "Free mock test and study materials by Sciastra <a href='https://www.sciastra.com/materials/' title='Free Mock Test'>📚 Free Mock Test</a> <a href='https://www.sciastra.com/materials/' title='Study Materials'>📚 Study Materials</a>";
  } else if (
    input.includes("mock test") ||
    input.includes("practice test") ||
    input.includes("mock") ||
    input.includes("Mock test")
  ) {
    return "Here are some sources for mock tests : <a href='https://www.sciastra.com/materials/' title='Mock Test'>📄 Mock Test</a>";
  } else if (
    input.includes("internship") ||
    input.includes("work experience") ||
    input.includes("Internship")
  ) {
    return "You can find internships and work experience opportunities at <a href='https://www.sciastra.com/materials/' title='Sciastra Internship'>📚 Sciastra Internship</a>";
  } else if (input.includes("blogs") || input.includes("guidance")) {
    return "Here are some sources for blogs and guidance : <a href='https://www.sciastra.com/blog/' title='Blogs & Guidance'>📝 Blogs & Guidance</a>";
  } else if (input.includes("mentors") || input.includes("mentorship")) {
    return "You can find mentorship opportunities and connect with mentors at <a href='https://www.sciastra.com/teams/' title='Top mentors at Sciastra'>👨‍🏫 Top mentors at Sciastra</a>";
  } else if (input.includes("contact")) {
    return "You can reach us at : support@sciastra.com";
  } else {
    return "Try asking something else! 🤔";
  }
}
