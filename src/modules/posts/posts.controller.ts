/*
 * @Author: kingford
 * @Date: 2021-09-06 08:39:06
 * @LastEditTime: 2021-09-14 12:49:38
 */
/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateDto, UpdateDto } from './dto';
import { PostsService } from './posts.service';
import { PostEntity } from '@/modules/posts/entities/posts.entity';
import { SkipJwtAuth } from '@/modules/auth/guards/constants';

@Controller('posts')
@SkipJwtAuth()
@ApiTags('帖子')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: '获取帖子', description: '获取帖子详情' })
  async findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<PostEntity> {
    return this.postsService.findOne(id);
  }

  @Post()
  async create(@Body() createDto: CreateDto): Promise<PostEntity> {
    return this.postsService.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateDto,
  ) {
    this.postsService.update(id, updateDto);
    return updateDto;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    this.postsService.remove(id);
    return { id };
  }
}
