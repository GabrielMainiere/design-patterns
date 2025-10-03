export class Memento {
    constructor(private readonly state: string[]) {}

    getState(): string[] {
        return [...this.state];
    }
}
