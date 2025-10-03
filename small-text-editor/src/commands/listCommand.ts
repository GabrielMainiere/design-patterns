import { Editor } from "../mementos/editor";
import { Command } from "./command";

export class ListCommand implements Command{

    constructor(
        private editor : Editor
    ) {}

    execute(): void {
        this.editor.list();
    }
}