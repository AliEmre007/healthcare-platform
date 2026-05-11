import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configuration } from './config/configuration';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const config = configuration();

  app.enableCors({
    origin: config.corsOrigin,
    credentials: true
  });

  await app.listen(config.port);
}

void bootstrap();
