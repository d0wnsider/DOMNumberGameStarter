const historyNode = document.getElementById("history-list");
const inputNode = document.querySelector("#guess-input");

const correctNumber = Math.floor(Math.random() * 100);

function checkAnswer() {
	const guessInput = inputNode.value;

	let resultText = "";

	if (guessInput == "") {
		alert("Enter a number!");
		return;
	}

	if (guessInput > correctNumber) {
		alert("Guess lower.");
		resultText = "LOWER";
	}
	else if (guessInput < correctNumber) {
		alert("Guess higher.");
		resultText = "HIGHER";
	}
	else {
		alert(`Correct! The answer was ${correctNumber}.`);
		resultText = "CORRECT";
	}

	const guessNode = document.createElement("li");

	historyNode.appendChild(guessNode);

	guessNode.innerHTML = `${guessInput} - ${resultText}`;

	inputNode.value = "";
}