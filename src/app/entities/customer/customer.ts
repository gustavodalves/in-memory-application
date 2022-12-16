import { BirthDate } from './birth-date';
import { Name } from './name';

interface CustomerProps {
    name: Name;
    birthDate: BirthDate;
}

export class Customer {
    constructor(
        private props: CustomerProps
    ) {}

    get name(): Name {
        return this.props.name;
    }

    set name(name: Name) {
        this.props.name = name;
    }

    get birthDate(): BirthDate {
        return this.props.birthDate;
    }

    set BirthDate(birthDate: BirthDate) {
        this.props.birthDate = birthDate;
    }
}
