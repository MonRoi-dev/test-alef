import { ApiProperty } from '@nestjs/swagger';
import { Child } from '@prisma/client';

export class ChildEntity implements Child {
  id: string;

  @ApiProperty({ example: 'Jane', description: 'First name' })
  first_name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name' })
  last_name: string;

  @ApiProperty({ example: 12, description: 'Age' })
  age: number;

  userId: string;

  createdAt: Date;

  updatedAt: Date;
}
