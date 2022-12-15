import { Customer } from "../entities/customer/customer";

export abstract class CustomersRepository {
    abstract create(customer: Customer): Promise<void>;
}
