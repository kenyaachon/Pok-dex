import { State } from "./state.js";


export function cleanInput(input: string): string[] {
  return input.trim().split(/\s+/);
}

export function startREPL(state: State) {
  const { rl: rl, commands: commandsRegistry} = state


  rl.prompt();

  rl.on('line', (line: any) => {
    const input = cleanInput(line);
    if (input.length === 0) {
      rl.prompt();
    } else {
      console.log(`Your command was: ${input[0].toLowerCase()}`)
      // const commandsRegistry = getCommands()
      const foundCommand = commandsRegistry[input[0].toLocaleLowerCase()]?.callback
      if (foundCommand === undefined) {
        console.log("Uknown command")
      } else {
        console.log(typeof foundCommand)
        foundCommand(state)
      }
    }
    rl.prompt();
  })
}