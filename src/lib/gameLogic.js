import { select } from "@inquirer/prompts";
import chalk from "chalk";
import questions from "./questions.js";

export async function showMainMenu(gameState) {
  const action = await select({
    message: "Main Menu",
    choices: [
      { name: "Start Game", value: "start" },
      { name: "Quit", value: "quit" },
    ],
  });

  switch (action) {
    case "start":
      await selectTopic(gameState);
      break;

    case "quit":
      console.log(chalk.blue("Thanks for playing!"));
      process.exit(0);
  }
};

export async function selectTopic(gameState) {
  const topic = await select({
    message: "Choose a topic",
    choices: [
      { name: "Coding", value: "Coding" },
      { name: "Capitals", value: "Capitals" },
      { name: "Space", value: "Space" },
      { name: "All Topics", value: "All" },
    ],
  });

  gameState.selectedTopic = topic;

  console.log(chalk.green(`You selected: ${gameState.selectedTopic}`));

  const topicQuestions = getQuestionsByTopic(gameState.selectedTopic);
  const shuffledQuestions = shuffleQuestions(topicQuestions);

  await playGame(shuffledQuestions, gameState);
};

export function getQuestionsByTopic(selectedTopic) {
  if (selectedTopic === "All") {
    return questions;
  }

  return questions.filter((question) => {
    return question.topic === selectedTopic;
  });
};

export function shuffleQuestions(questions) {
  return [...questions].sort(() => Math.random() - 0.5);
};

export async function askQuestion(question, gameState) {
  const playerAnswer = await select({
    message: question.question,
    choices: question.choices.map((choice) => ({
      name: choice,
      value: choice,
    })),
  });

  if (playerAnswer === question.answer) {
    console.log(chalk.green("Correct!"));
    gameState.score += 1;
  } else {
    console.log(chalk.red(`Incorrect! The correct answer was: ${question.answer}`));
  }
};

export async function playGame(questions, gameState) {
  for (
    gameState.currentQuestion = 0;
    gameState.currentQuestion < questions.length;
    gameState.currentQuestion++
  ) {
    const question = questions[gameState.currentQuestion];

    await askQuestion(question, gameState);
  }

  console.log(
    chalk.blue(`Game over! Your score is ${gameState.score}/${questions.length}`)
  );
};
