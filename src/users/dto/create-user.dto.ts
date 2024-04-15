import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  id?: string;

  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({ example: 42 })
  @IsNotEmpty()
  @IsInt()
  age: number;

  createdAt?: string | Date;
  updatedAt?: string | Date;
}
