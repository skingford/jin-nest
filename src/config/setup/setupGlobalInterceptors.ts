/*
 * @Author: kingford
 * @Date: 2021-09-08 01:12:45
 * @LastEditTime: 2021-09-08 01:15:44
 */
import type { INestApplication } from '@nestjs/common';
import { TransformInterceptor } from '@/common/interceptors/transform.interceptor';

export function setupGlobalInterceptors(app: INestApplication) {
  app.useGlobalInterceptors(new TransformInterceptor());
}