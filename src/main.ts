// main.ts
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  // Define the microservice options
  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.FASTIFY,
    options: {
      url: 'http://localhost:3001',
      maxListeners: 10,
      logger: true,
    },
  };

  // Configure the microservices module to use Fastify
  app.connectMicroservice(microserviceOptions);

  await app.startAllMicroservices();

  await app.listen(3000);
}

bootstrap();