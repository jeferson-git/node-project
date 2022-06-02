import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) {}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExisits = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExisits) {
            throw new Error('User Already exists');
        }

        const user = new User(data);
        await this.userRepository.save(user);
    };
}