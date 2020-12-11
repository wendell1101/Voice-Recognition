const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const response = document.querySelector('.response');


const greetings = [
    'Im fine you little piece of shit',
    'Doing good until I listened to your stupid voice',
    "I'm fine thank you, how about you",
    "My mood is ruined because of you asshole",
];

const weather = [
    "It's sunny day today",
    "The clouds are crying because you are so dumb",
    "Thunder were about to strike for you to wake up to your foolishness",
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.onstart = ()=>{
    console.log('voice activated, you can speak');
}

// recognition.onspeechend = ()=>{
//     //
// }

recognition.onresult = function(e){
    console.log(e);
    const current = e.resultIndex;

    const transcript = e.results[current][0].transcript;
    content.textContent = transcript;
    voiceOut(transcript);
}

btn.addEventListener('click', () => {
    recognition.start();
});

function voiceOut(message){
    const speech = new SpeechSynthesisUtterance();

    
    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random()*greetings.length)]; 
        speech.text = finalText;
        response.textContent = finalText;
    }else if(message.includes('weather')){
        const finalText = weather[Math.floor(Math.random()*weather.length)]; 
        speech.text = finalText;
        response.textContent = finalText;
    }else{
        speech.text = "Data insufficient. I don't know the answer, bye.";
    }
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = .1;

    window.speechSynthesis.speak(speech);
}