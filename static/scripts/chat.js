var coll =document.getElementsByClassName("collapsible");

for(let i=0;i<coll.length;i++){
    coll[i].addEventListener("click",function() {
        this.classlist.toggle("active");
        var content=this.nextElementSibling;

        if(content.style.maxHeight){
            content.style.maxHeight=null;
        }else{
            content.style.maxHeight=content.scrollHeight +"px";
        }

    });
}

function getTime(){
    let today = new Data();
    hours=today.getHours();
    minutes=today.getMinutes();

    if(hours < 10){
        hours = "0" +hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage() {
    let firstmessage = "how's it going ?"
    document.getElementById("botstarterMessage").innerHTML ='<p class="botText"><span>'+firstmessage+'</span></p>';

    let time=getTime();
    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText){
    let botResponse =getBotResponse(userText);
    let botHtml ='<p class="botText"><span>' + botResponse+'</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
