import { Prisma } from '@prisma/client';
import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto
  extends PartialType(CreateUserDto)
  implements Prisma.UserUpdateInput
{
  @ApiProperty({ example: 'John' })
  @IsString()
  first_name?: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  last_name?: string;

  @ApiProperty({ example: 42 })
  @IsInt()
  age?: number;
}
