import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { EnvService } from './shared/env/env.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }));

  const envService = app.get<EnvService>(EnvService);
  const port = envService.get("PORT");

  await app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}
bootstrap();
