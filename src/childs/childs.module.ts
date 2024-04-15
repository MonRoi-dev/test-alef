import { Module } from '@nestjs/common';
import { ChildsService } from './childs.service';
import { ChildsController } from './childs.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [ChildsController],
  providers: [ChildsService],
})
export class ChildsModule {}
