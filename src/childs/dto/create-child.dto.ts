import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateChildDto {
  id?: string;

  @ApiProperty({ example: 'Jane' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({ example: 12 })
  @IsNotEmpty()
  @IsString()
  age: number;

  createdAt?: string | Date;
  updatedAt?: string | Date;

  @ApiProperty({ example: 'd87e2b33-073c-40e0-baad-99019d0492fe' })
  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
