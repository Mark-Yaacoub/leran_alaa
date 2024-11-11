import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/user.dto';
import { ReturnObject } from 'src/sheard/return.Objecr';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post()
    async createUser(@Body() dto: CreateUserDto):  Promise<ReturnObject<User>> {
        return await this.usersService.createUser(dto);
    }


    @Get('getUserAdmin/:id')
    async getUserById(@Param('id') id: number): Promise<User> {
        return await this.usersService.getUserById(id);
    }


    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.usersService.getAllUsers();
    }

    @Put(':id')
    async updateUserById(@Param('id') id: number, @Body() dto: CreateUserDto): Promise<User> {
        return await this.usersService.updateUserById(id, dto);
    }


}
