import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { EnvService } from './shared/env/env.service';
import { SanitizeSQLPipe } from './shared/pipes/sanitize.sql.pipe';
import { SanitizeXSSPipe } from './shared/pipes/sanitize.xss.pipe';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const envService = app.get<EnvService>(EnvService);
  const port = envService.get("PORT");

  app.setGlobalPrefix('api/v1');

  app.use(helmet());

  app.useGlobalPipes(
    new SanitizeXSSPipe(),
    new SanitizeSQLPipe(),
    new ValidationPipe({ 
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true 
    })
  );

  await app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}
bootstrap();
