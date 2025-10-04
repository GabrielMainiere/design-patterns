import { WriteCommand } from "./commands/writeCommand";
import { Editor } from "./mementos/editor";
import readlineSync from "readline-sync";
import { History } from "./mementos/history";
import { UndoCommand } from "./commands/undoCommand";
import { ListCommand } from "./commands/listCommand";

async function main() {

    const editor = new Editor;
    const history = new History;

    console.log("=== Text Editor ===");
    console.log(`Commands: "write <text>", "undo", "list" and "exit"\n`);

    while(true){

        const input = readlineSync.question("> ");

        if (input.startsWith("write ")) {
            const text = input.replace("write ", "");
            new WriteCommand(editor, history, text).execute();
        }
        else if (input === "undo") {
            new UndoCommand(editor, history).execute();
        }
        else if (input === "list") {
            new ListCommand(editor).execute();
        }
        else if (input === "exit") {
            break;
        }
        else {
            console.log("Unknown command.");
        }
    }
}

main();