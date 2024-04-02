// file: grpc-http1 > src > app.main.ts
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: ['math'],
      protoPath: [
        join(__dirname, '../src/proto/app.proto'),
      ],
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();