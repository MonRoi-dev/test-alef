import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ChildsModule } from './childs/childs.module';

@Module({
  imports: [UsersModule, PrismaModule, ChildsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
