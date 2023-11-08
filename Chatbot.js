const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const predefinedResponses = {
  "how are you?": "I'm good! Thanks for asking.",
  "what is your name?": "I'm AHMED.",
  "where are you from?": "I'm from 7mitah.",
  "hello": "Hi there!",
  "bye": "Goodbye!"
};

const promptUser = () => {
  rl.question('You: ', (input) => {
    // Normalize input by trimming and converting to lowercase
    const normalizedInput = input.trim().toLowerCase();

    if (normalizedInput === 'exit' || normalizedInput === 'quit') {
      console.log("AHMED: Goodbye!");
      rl.close();
    } else if (predefinedResponses[normalizedInput]) {
      console.log(`AHMED: ${predefinedResponses[normalizedInput]}`);
      promptUser();
    } else {
      console.log("AHMED: I'm sorry, I don't understand that.");
      promptUser();
    }
  });
};

console.log("AHMED: Hello! Type 'exit' or 'quit' to end the chat.");
promptUser();
