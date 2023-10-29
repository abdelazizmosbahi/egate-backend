import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
