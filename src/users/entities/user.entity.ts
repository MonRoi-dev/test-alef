import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty({
    example: 'd87e2b33-073c-40e0-baad-99019d0492fe',
    description: 'UUID',
  })
  id: string;

  @ApiProperty({ example: 'John', description: 'First name' })
  first_name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name' })
  last_name: string;

  @ApiProperty({ example: 42, description: 'Age' })
  age: number;

  @ApiProperty({ description: "List of user's childs" })
  childs: [];

  @ApiProperty({ example: Date.now(), description: 'Date when user created' })
  createdAt: Date;

  @ApiProperty({ example: Date.now(), description: 'Date when user updated' })
  updatedAt: Date;
}
