import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repo';
import { User } from './user.entity';
import { ReturnObject } from 'src/sheard/return.Objecr';

@Injectable()
export class UsersService {
     constructor(
        private readonly userRepository: UserRepository
     ) {}

     async createUser(dto: Partial <User>): Promise<ReturnObject<User>> {

        const user = await this.userRepository.createUser(dto);
        return {
            data : user,
            status : 200,
            messageEn : 'User created successfully',
            messageAr : 'تم إنشاء المستخدم بنجاح',
        }
     }

     async getAllUsers(): Promise<User[]> {
        return await this.userRepository.getAllUsers();
        
     }

     async getUserById(id: number): Promise<User> {
        return await this.userRepository.getUserById(id);
     }

     async updateUserById(id: number, dto: Partial<User>): Promise<User> {
        return await this.userRepository.updateUserById(id, dto);
     }
}
