import { Module } from '@nestjs/common';
import { usersService } from './users.service';
import { usersController } from './users.controller';

@Module({
  controllers: [usersController],
  providers: [usersService],
})
export class usersModule {}
