import { State } from "./state.js";

export function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!")
    console.log("Usage: \n \n")
    const commands = state.commands
    for (const command in commands) {
        console.log(`${command}: ${commands[command].description}`)
    }
}