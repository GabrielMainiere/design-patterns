import { Memento } from "./memento";

export class History {
    private mementos: Memento[] = [];

    push(memento: Memento): void {
        this.mementos.push(memento);
    }

    pop(): Memento | undefined {
        return this.mementos.pop();
    }
}
