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
}

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

  console.log(shuffledQuestions);
}

export function getQuestionsByTopic(selectedTopic) {
  if (selectedTopic === "All") {
    return questions;
  }

  return questions.filter((question) => {
    return question.topic === selectedTopic;
  });
}

export function shuffleQuestions(questions) {
  return [...questions].sort(() => Math.random() - 0.5);
}
