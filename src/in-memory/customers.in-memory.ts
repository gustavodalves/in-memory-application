import { Customer } from "../app/entities/customer/customer";
import { CustomersRepository } from "../app/repositories/customers.repository";

export class InMemoryCustomersRepository implements CustomersRepository {
    public customer: Customer[] = []

    public async create(customer: Customer) {
        this.customer.push(customer)
    }
}