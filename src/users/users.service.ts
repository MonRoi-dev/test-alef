import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.create({ data });
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { childs: true },
    });
    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({ where: { id }, data });
    return user;
  }

  async delete(id: string): Promise<User> {
    const user = await this.prisma.user.delete({ where: { id } });
    return user;
  }
}
