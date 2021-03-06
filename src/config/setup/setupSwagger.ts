/*
 * @Author: kingford
 * @Date: 2021-09-05 23:02:26
 * @LastEditTime: 2021-09-11 22:28:41
 */
import type { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { API_PREFIX } from '@/main';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('NestJs Swagger API')
    .setDescription('我的第一个NestJs项目')
    .setBasePath(API_PREFIX)
    .addBearerAuth({ type: 'apiKey', in: 'header', name: 'Authorization' })
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${API_PREFIX}/swagger`, app, document);
}
