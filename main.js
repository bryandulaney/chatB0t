const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");

    const chatBox = document.createElement("p");
    chatBox.classList.add("voice2text");

    const chatText = document.createTextNode(text);
    chatBox.appendChild(chatText);

    chatContainer.appendChild(chatBox);
    return chatContainer;
}

function addBotText(text) {
    const chatContainer1 = document.createElement("div");
    chatContainer1.classList.add("chat-container");
    chatContainer1.classList.add("darker");

    const chatBox1 = document.createElement("p");
    chatBox1.classList.add("voice2text");

    const chatText1 = document.createTextNode(text);
    chatBox1.appendChild(chatText1);

    chatContainer1.appendChild(chatBox1);
    return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "DAMN SON WHERE'D YOU FIND THIS!";

    if (message.includes('how are you')) {
        speech.text = "I'm good son.";
    }

    if (message.includes('yeeer')) {
        speech.text = "yeeeeeer.";
    }

    speech.volume = 1;
    speech.rate = -0.7;
    speech.pitch = -5;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
    console.log('Voice activated');
};

recorder.onresult = (event) => {
    //console.log(event);
    const resultIndex = event.resultIndex;
    const transcript = event.results[resultIndex][0].transcript;
    //voice2text.textContent = transcript;
    var element = document.getElementById("container");
    element.appendChild(addHumanText(transcript));
    botVoice(transcript);
};

voice.addEventListener('click', () =>{
    recorder.start();
});