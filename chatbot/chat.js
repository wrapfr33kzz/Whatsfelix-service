function talk(){
    var know = {
    "who are you": "Hello, im a chat bot",
    "How are you" : "Good :)",
    "What can i do for you" : "Please Give us A Follow & Like.",
    "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon..",
    "hello" : "hii sir how can i help you",
    "Hello" : " hello sir how can i help you",
    "hi" : "hi im here for you 😎",
    "i love you" : "i love you too dear 🥰❤️",
    "are you single" : "yes im single 🥰",
    "single?" : "yes im single 🥰 are you single?",
    "yes im single" : "i love that🥰 i was waiting for someone like you",
    "what is your name" : "my name is emilee❤️ <br> i'm your chat assistant🧚‍♀️🧚‍♀️",
    "you can sing a song for me"  : "i'm sorry 😥😥  <br> now i dont have that future",
    "hey its ok" : "thank you 🥰🥰",
    "who is manu" : "manu is a inteligent guy ❤️❤️ <br> good in vodeo editing and studies",
    "who is safwan " : "hes a very good programmer",
    "who is ali" : "ali is a hacker /cyber security expert ",
    "who is robin" : "hes very famous rapper🥰🥰😎"

    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }