import { Command } from "./command";
import { Editor } from "../mementos/editor";
import { History } from "../mementos/history";

export class UndoCommand implements Command {
  constructor(
    private editor: Editor,
    private history: History
  ) {}

  execute(): void {
    const memento = this.history.pop();
    if (memento) {
      this.editor.restore(memento);
    } else {
      console.log("Nothing to undo.");
    }
  }
}
