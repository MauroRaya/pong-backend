import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const PORT = process.env.PORT;
  if (!PORT) {
    throw new Error('Variavel de ambiente PORT está undefined');
  }

  await app.listen(PORT);
  console.log(`Rodando na porta ${PORT}`);
}
bootstrap();
