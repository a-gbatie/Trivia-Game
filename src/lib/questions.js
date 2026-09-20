const questions = [
  {
    topic: "Coding",
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "HyperText Markup Language"
  },

  {
    topic: "Coding",
    question: "Which keyword declares a variable that can be reassigned?",
    choices: ["const", "let", "import", "return"],
    answer: "let"
  },

  {
    topic: "Coding",
    question:
      "Which array method creates a new array by transforming each element?",
    choices: ["map", "find", "push", "pop"],
    answer: "map"
  },

  {
    topic: "Capitals",
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Rome", "Madrid"],
    answer: "Paris",
  },

  {
    topic: "Capitals",
    question: "Santa Fe is the capital of which state?",
    choices: ["New Mexico", "Texas", "Nevada", "California"],
    answer: "New Mexico"
  },

  {
    topic: "Capitals",
    question: "What is the capital of the United States of America?",
    choices: ["New York City", "Boston", "Washington, D.C.", "Los Angeles"],
    answer: "Washington, D.C."
  },

  {
    topic: "Space",
    question: `Which planet is known as the "Red Planet"?`,
    choices: ["Jupiter", "Venus", "Saturn", "Mars"],
    answer: "Mars"
  },

  {
    topic: "Space",
    question: "What planet is closest to the sun?",
    choices: ["Mercury", "Venus", "Earth", "Pluto"],
    answer: "Mercury"
  },

  {
    topic: "Space",
    question: "Earth is the ___ planet from the sun?",
    choices: ["second", "third", "sixth", "fourth"],
    answer: "third"
  },

  {
    topic: "Geography",
    question: "What is the smallest country in the world?",
    choices: ["Vatican City", "Puerto Rico", "Thailand", "Egypt"],
    answer: "Vatican City"
  },

  {
    topic: "Geography",
    question: "What is the longest river in the world?",
    choices: ["The Amazon", "The Mississippi", "The Nile", "The Thames"],
    answer: "The Nile"
  },

  {
    topic: "Geography",
    question: "What is the only country that is also a continent?",
    choices: ["Africa", "Australia", "Antarctica", "Asia"],
    answer: "Australia"
  },

  {
    topic: "Entertainment",
    question: "Who was the first Disney princess?",
    choices: ["Snow White", "Aurora", "Pocahontas", "Ariel"],
    answer: "Snow White"
  },

  {
    topic: "Entertainment",
    question: "Who played Jack in Titanic?",
    choices: ["Brad Pitt", "Matt Damon", "Ben Affleck", "Leonardo DiCaprio"],
    answer: "Leonardo DiCaprio"
  },

  {
    topic: "Entertainment",
    question: "What board game involves buying and trading properties?",
    choices: ["Life", "Monopoly", "Chutes & Ladders", "Sorry"],
    answer: "Monopoly"
  },
];

export default questions;
