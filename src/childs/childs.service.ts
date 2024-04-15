import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Child } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

@Injectable()
export class ChildsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async create(data: CreateChildDto): Promise<Child> {
    const parrent = await this.usersService.findOne(data.userId);
    const childs = await this.findAll(data.userId);
    if (childs.length >= 5)
      throw new HttpException(
        'Must not be more than 5 children',
        HttpStatus.BAD_REQUEST,
      );
    if (data.age > parrent.age)
      throw new HttpException(
        "Child age can't be higher than yours",
        HttpStatus.BAD_REQUEST,
      );
    const { userId, ...childData } = data;
    const child = await this.prisma.child.create({
      data: {
        first_name: childData.first_name,
        last_name: childData.last_name,
        age: childData.age,
        user: { connect: { id: userId } },
      },
    });
    return child;
  }

  async findAll(userId: string): Promise<Child[]> {
    const childs = await this.prisma.child.findMany({ where: { userId } });
    return childs;
  }

  async findOne(id: string): Promise<Child> {
    const child = await this.prisma.child.findUnique({
      where: { id },
    });
    return child;
  }

  async update(id: string, data: UpdateChildDto): Promise<Child> {
    const child = await this.prisma.child.update({ where: { id }, data });
    return child;
  }

  async delete(id: string): Promise<Child> {
    const child = await this.prisma.child.delete({ where: { id } });
    return child;
  }
}
