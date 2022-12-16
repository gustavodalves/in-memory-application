export class BirthDate {
    constructor(private birthDate: Date) {
        if(!this.validateDateBeforeToday(birthDate)) {
            throw new Error('Date has to be before today');
        }

        this.birthDate = birthDate;
    }

    get value() {
        return this.birthDate;
    }

    private validateDateBeforeToday(birthDate: Date): boolean {
        return new Date(birthDate.toDateString()) < new Date(new Date().toDateString());
    }
}
