import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];
  usersRepo: any;

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      ...createUserDto,
      id: 0
    };
    this.users.push(user);
    return user;
  }

 
  updateUser(username: string, update: { email: string; password: string }): User {
    const user = this.users.find((u) => u.username === username);
    if (!user) {
      throw new NotFoundException(`User '${username}' not found`);
    }
    user.email = update.email ?? user.email;
    user.password = update.password ?? user.password;
    return user;
  }

  deleteUser(username: string): { message: string } {
    const index = this.users.findIndex((u) => u.username === username);
    if (index === -1) {
      throw new NotFoundException(`User '${username}' not found`);
    }
    this.users.splice(index, 1);
    return { message: 'User deleted successfully' };
  }
  findOne(id: number) {
  const user = this.users.find(u => u.id === id);
  if (!user) {
    throw new NotFoundException(`User with id ${id} not found`);
  }
  return user;
}
async getUser(username: string): Promise<User> {
  const user = await this.usersRepo.findOneBy({ username });
  if (!user) throw new NotFoundException('User not found');
  return user;
}

}
