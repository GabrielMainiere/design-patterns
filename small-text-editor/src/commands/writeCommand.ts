import { Editor } from "../mementos/editor";
import { History } from "../mementos/history";
import { Command } from "./command";

export class WriteCommand implements Command{

    constructor(
        private editor : Editor,
        private history : History,
        private text : string
    ) {}

    execute(): void {
        this.history.push(this.editor.save());
        this.editor.write(this.text);
    }
}