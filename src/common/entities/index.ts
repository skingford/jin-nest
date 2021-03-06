/*
 * @Author: kingford
 * @Date: 2021-09-17 22:14:36
 * @LastEditTime: 2021-09-19 10:19:25
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('BaseEntity')
export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'createdAt',
    comment: '创建时间',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'updatedAt',
    comment: '更新时间',
  })
  updatedAt?: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'deletedAt',
    select: false,
    comment: '软删除时间',
  })
  @Exclude()
  deletedAt?: Date;
}
