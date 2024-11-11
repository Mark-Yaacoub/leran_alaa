import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repo';

@Module({
  imports: [TypeOrmModule.forFeature([User]),],
  providers: [UsersService , UserRepository],
  exports: [UsersService, UserRepository],
  controllers: [UsersController]
})
export class UsersModule {}
