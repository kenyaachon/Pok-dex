import * as process from "node:process";
import { CLICommand } from "./command.js";

export function commandExit(commands: Record<string, CLICommand>) {
    console.log("Closing the Pokedex... Goodbye!")
    process.exit(0)
}


