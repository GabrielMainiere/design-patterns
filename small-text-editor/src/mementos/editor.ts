import { Memento } from "./memento";

export class Editor {

    private lines : string[] = [];

    write(text : string) : void {
        this.lines.push(text);
    }

    list() : void {
        if (this.lines.length === 0) {
            console.log("empty document.");
        }
        else {
            console.log(this.lines.join("\n"));
        }
    }

    save(): Memento {
        return new Memento(this.lines);
    }

    restore(memento: Memento): void {
        this.lines = memento.getState();
    }
}