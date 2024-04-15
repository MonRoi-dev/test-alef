import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Find all existing users' })
  @ApiResponse({
    type: [UserEntity],
  })
  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this.usersService.findAll();
    return users;
  }

  @ApiOperation({ summary: 'Find user by provided in params id' })
  @ApiParam({
    example: 'd87e2b33-073c-40e0-baad-99019d0492fe',
    name: 'id',
  })
  @ApiResponse({
    type: UserEntity,
  })
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.findOne(id);
    return user;
  }

  @ApiOperation({ summary: 'Create new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 200, type: UserEntity })
  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    const user = await this.usersService.create(data);
    return user;
  }

  @ApiOperation({ summary: 'Update user' })
  @ApiParam({
    example: 'd87e2b33-073c-40e0-baad-99019d0492fe',
    name: 'id',
  })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ type: UserEntity })
  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    const user = await this.usersService.update(id, data);
    return user;
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiParam({
    example: 'd87e2b33-073c-40e0-baad-99019d0492fe',
    name: 'id',
  })
  @ApiResponse({ type: UserEntity })
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.delete(id);
    return user;
  }
}
