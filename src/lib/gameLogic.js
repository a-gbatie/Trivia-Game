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
  const gameQuestions = getGameQuestions(shuffledQuestions);

  await playGame(gameQuestions, gameState);
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

export function getGameQuestions(questions, amount = 5) {
  return questions.slice(0, amount);
}

export async function askQuestion(question, gameState) {
  const controller = new AbortController();

  const timer = setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const playerAnswer = await select(
      {
        message: question.question,
        choices: question.choices.map((choice) => ({
          name: choice,
          value: choice,
        })),
      },
      {
        signal: controller.signal,
      }
    );

    clearTimeout(timer);

    if (playerAnswer === question.answer) {
      console.log(chalk.green("Correct!"));
      gameState.score += 1;
    } else {
      console.log(
        chalk.red(
          `Incorrect! The correct answer was: ${question.answer}`
        )
      );
    }
  } catch (error) {
    if (controller.signal.aborted) {
      console.log(chalk.yellow(`\nTime's up! \nThe correct answer was ${question.answer}.`));
    } else {
      throw error;
    }
  }
}

export async function playGame(questions, gameState) {
  gameState.score = 0;

  for (
    gameState.currentQuestion = 0;
    gameState.currentQuestion < questions.length;
    gameState.currentQuestion++
  ) {
    const question = questions[gameState.currentQuestion];

    await askQuestion(question, gameState);
  }

  console.log(
    chalk.blue(
      `Game over! Your score is ${gameState.score}/${questions.length}`,
    ),
  );

  gameState.gameOver = true;

  await showEndMenu(gameState);
}

export async function showEndMenu(gameState) {
  const action = await select({
    message: "What would you like to do?",
    choices: [
      { name: "Play Again", value: "playAgain" },
      { name: "Main Menu", value: "mainMenu" },
      { name: "Quit", value: "quit" },
    ],
  });

  switch (action) {
    case "playAgain":
      await selectTopic(gameState);
      break;

    case "mainMenu":
      await showMainMenu(gameState);
      break;

    case "quit":
      console.log(chalk.blue("Thanks for playing!"));
      process.exit(0);
  }
}
