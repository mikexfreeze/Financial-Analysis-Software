import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(name: string, email: string, password: string): Promise<User> {
        const user = this.userRepository.create({ name, email, password });
        return await this.userRepository.save(user);
    }

    async getUserById(id: number): Promise<User | undefined> {
        return await this.userRepository.findOne(id);
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }
}