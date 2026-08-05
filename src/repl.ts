
import * as readline from "node:readline/promises";
import * as process from "node:process";
// import { createInterface } from 'node:readline';
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { CLICommand } from "./command.js";


export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    }
  }
}


export function cleanInput(input: string): string[] {
  return input.trim().split(/\s+/);
}

export function startREPL() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
  });


  rl.prompt();

  rl.on('line', (line: any) => {
    const input = cleanInput(line);
    if (input.length === 0) {
      rl.prompt();
    } else {
      console.log(`Your command was: ${input[0].toLowerCase()}`)
      const commandsRegistry = getCommands()
      const foundCommand = commandsRegistry[input[0].toLocaleLowerCase()]?.callback
      if (foundCommand === undefined) {
        console.log("Uknown command")
      } else {
        console.log(typeof foundCommand)
        foundCommand(commandsRegistry)
      }
    }
    rl.prompt();
  })
}