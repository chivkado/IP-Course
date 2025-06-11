import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
  ) {}

  async findOne(id: number) {
    const task = await this.taskRepo.findOneBy({ id });
    if (!task) throw new NotFoundException(`Task with id ${id} not found`);
    return task;
  }

  async create(dto: CreateTaskDto) {
    // user validation logic here...
    const task = this.taskRepo.create(dto);
    return this.taskRepo.save(task);
  }
}
