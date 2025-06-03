import chalk from "chalk"
import figlet from "figlet"
import ora from "ora"
import { execSync } from "child_process";

const commitMessageFile = process.argv[2];

console.clear();

// Display header
console.log(chalk.blue.bold(figlet.textSync("Running Commit Lint", { font: "Slant" })));
console.log("\n");

const spinner = ora("Validating commit message...").start();

try {
  execSync(`npx --no-install commitlint --edit "${commitMessageFile}"`, { stdio: "inherit" });
  spinner.succeed(chalk.blue.bold("✔ Commit message is valid!"));
} catch (error) {
  spinner.fail(chalk.red.bold("❌ Commit message is invalid. Please follow the commit guidelines."));
  process.exit(1);
}