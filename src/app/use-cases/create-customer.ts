import { BirthDate } from "../entities/customer/birth-date";
import { Customer } from "../entities/customer/customer";
import { Name } from "../entities/customer/name";
import { CustomersRepository } from "../repositories/customers.repository";

interface CustomerRequest {
    name: string;
    birthDate: Date;
}

interface CustomerResponse {
    customer: Customer;
}

export class CreateCustomer {
    constructor(private customerRepository: CustomersRepository) {}

    async execute(request: CustomerRequest): Promise<CustomerResponse> {
        const { name, birthDate } = request;

        const customer = new Customer({
            name: new Name(name),
            birthDate: new BirthDate(birthDate),
        });

        await this.customerRepository.create(customer)

        return {
            customer
        };
    }
}