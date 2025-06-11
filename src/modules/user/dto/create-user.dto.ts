import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail({}, { message: 'Invalid email' }) // will trigger error if missing or wrong
  email: string;

  @IsNotEmpty()
  password: string;
}
