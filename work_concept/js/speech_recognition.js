var lang = 'en-US';
var myRec = new p5.SpeechRec(lang);
myRec.continuous = true;
myRec.interimResults = true;

function start_record()
{
	myRec.onResult = parseResult;
	myRec.start();
}

function parseResult()
{
	var word = myRec.resultString;
	var result = document.getElementById("speech_rec");
	result.innerHTML = word;
}

function stop_record()
{
    myRec.stop();
}