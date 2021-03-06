/*
 * @Author: kingford
 * @Date: 2021-09-08 08:46:57
 * @LastEditTime: 2021-09-21 17:54:55
 */
import { User } from '../../src/modules/user/entities/user.entity';
import { Random } from 'mockjs';
import { RoleEnum } from '@/common/enums';

export const getInitUsers = () => {
  const admin = new User();
  admin.email = 'admin@admin.com';
  admin.username = 'admin';
  admin.password = 'admin';
  admin.role = RoleEnum.Admin;

  const user = new User();
  user.email = 'user@admin.com';
  user.username = 'admin';
  user.password = '123456';
  user.role = RoleEnum.User;

  return [admin, user];
};

export const getRandomUser = (): User => {
  const user = new User();

  user.username = Random.cname();
  user.email = Random.email();
  user.password = '123456';
  user.role = RoleEnum.Developer;

  return user;
};
