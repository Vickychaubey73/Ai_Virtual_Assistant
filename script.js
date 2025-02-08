let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="h1-GB"
    window.speechSynthesis.speak(text_speak)

}
function wishMe() {
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <4){

        speak("Good afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecongnition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecongnition () 
recognition.onresult=(event)=>{
 let currentIndex=event.resultIndex
 let transcript=event.results[currentIndex][0].transcript
 content.innerText=transcript

  takeCommand(transcript.toLowerCase())

}
btn.addEventListener("click",()=> {
    recognition.start()
    btn.computedStyleMap.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")) {
        speak("Yes I am Chaubey,Just Tell Me How can I Help You?")
        

    } 
    else if(message.includes("Who Are you")){
        speak("I am Chaubey ji")

    } 
   
    else if (message.includes("open youtube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com/" ,"_blank")
    }
    else if (message.includes("open google")) {
        speak("opening google")
        window.open("https://www.google.com/" ,"_blank")

    }
    else if (message.includes("open facebook")) {
        speak("opening facebook")
        window.open("https://www.facebook.com/" ,"_blank")
    }
    else if (message.includes("open Instagram")) {
        speak("opening instagram")
        window.open("https://www.instagram.com/","_blank")
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator")
        window.open("calculator://")
    }
    else if (message.includes("open vscode")) {
        speak("opening vscode")
        window.open("vscode://")
    }
    else if (message.includes("open calendar")) {
        speak("opening calendar")
        window.open("calendar://")
    }
    else if (message.includes("time")) {
        let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
        else{
            let finalText="this is what i found on internet regarding" + message.replace("shinny","") || message.replace("shinny","")
            speak(finalText)
            window.open(`https://www.google.com/search?q=${message.replace("Shinny","")}`,"_blank")
        }
        
}