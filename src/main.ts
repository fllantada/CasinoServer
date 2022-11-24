import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CAsino Backend')
    .setDescription('Challenge to the casino backend')
    .setVersion('1.0')
    .addTag('Caino')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`Application is running on http://localhost:${PORT}`);
}
bootstrap();
