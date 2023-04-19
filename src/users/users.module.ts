import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersController } from './users.controller';

@Module({
  controllers: [usersController],
  providers: [UsersService],
})
export class UsersModule {}
