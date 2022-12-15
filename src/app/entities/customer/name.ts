export class Name {
    constructor(private name: string) {
        const isnameLengthValid = this.validatenameLenght(name);
    
        if (!isnameLengthValid) {
          throw new Error('name is not valid');
        }
        this.name = name;
    }

    get value(): string {
        return this.name;
    }

    set value(name: string) {
        this.name = name;
    }
    
    private validatenameLenght(name: string): boolean {
        return name.length >= 5 && name.length <= 240;
    }
}