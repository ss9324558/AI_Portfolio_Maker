import { execSync } from "child_process";
import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";

console.clear();

// Reusable function for running commands with spinner
const runTask = (command, description, successMessage) => {
  const spinner = ora(description).start();
  try {
    execSync(command, { stdio: "inherit" });
    spinner.succeed(chalk.green.bold(successMessage));
  } catch (error) {
    spinner.fail(chalk.red.bold(`❌ ${description} failed.`));
    console.log(chalk.red(`\n🚨 Error: ${error.message}\n`));
    process.exit(1);
  }
};


console.log(chalk.yellow.bold(figlet.textSync("Running prettier", { font: "Slant" })));

console.log(chalk.yellow.bold("\n✨ Formatting Backend..."));
runTask("npm --prefix backend run format", "Formatting Backend", "✨ Backend Formatting Completed");

console.log(chalk.yellow.bold("\n✨ Formatting Frontend..."));
runTask("npm --prefix frontend run format", "Formatting Frontend", "✨ Frontend Formatting Completed");

console.log(chalk.green.bold("\n✅ Lint & Format Complete!\n"));