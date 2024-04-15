import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ChildsService } from './childs.service';
import { UpdateChildDto } from './dto/update-child.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ChildEntity } from './entities/child.entity';
import { CreateChildDto } from './dto/create-child.dto';

@ApiTags('Childs')
@Controller('childs')
export class ChildsController {
  constructor(private readonly childsService: ChildsService) {}

  @ApiOperation({ summary: "Find user's children by provided user id" })
  @ApiBody({
    description: 'Provide user id in userId field',
    examples: {
      example: { value: { userId: 'f9e2dee5-3ff8-4813-8564-3f5990b3022a' } },
    },
  })
  @ApiResponse({ type: [ChildEntity] })
  @Get()
  async getChilds(@Body('userId') id: string) {
    const childs = await this.childsService.findAll(id);
    return childs;
  }

  @ApiOperation({ summary: 'Find child by id' })
  @ApiParam({
    example: '1d66b705-e5c9-4ed9-8dc2-b31ff1d071f6',
    name: 'id',
  })
  @ApiResponse({ type: ChildEntity })
  @Get(':id')
  async getChild(@Param('id') id: string) {
    const child = await this.childsService.findOne(id);
    return child;
  }

  @ApiOperation({ summary: "Create user's child by provided user id" })
  @ApiBody({ type: CreateChildDto })
  @ApiResponse({ type: ChildEntity })
  @Post()
  async createChild(@Body() data: CreateChildDto) {
    const child = await this.childsService.create(data);
    return child;
  }

  @ApiOperation({ summary: 'Update child ' })
  @ApiParam({
    example: 'd87e2b33-073c-40e0-baad-99019d0492fe',
    name: 'id',
  })
  @ApiBody({ type: UpdateChildDto })
  @ApiResponse({ type: ChildEntity })
  @Patch(':id')
  async updateChild(@Param('id') id: string, @Body() data: UpdateChildDto) {
    const child = await this.childsService.update(id, data);
    return child;
  }

  @ApiOperation({ summary: 'Delete child ' })
  @ApiParam({
    example: 'd87e2b33-073c-40e0-baad-99019d0492fe',
    name: 'id',
  })
  @ApiResponse({ type: ChildEntity })
  @Delete(':id')
  async deleteChild(@Param('id') id: string) {
    const child = await this.childsService.delete(id);
    return child;
  }
}
