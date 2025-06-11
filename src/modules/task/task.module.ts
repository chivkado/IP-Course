// src/modules/task/task.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task } from './task.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    forwardRef(() => UserModule),  // needed if TaskService injects UserService
  ],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
