import { PartialType } from '@nestjs/mapped-types';
import { Prisma } from '@prisma/client';
import { CreateChildDto } from './create-child.dto';
import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateChildDto
  extends PartialType(CreateChildDto)
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
