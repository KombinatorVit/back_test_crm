import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ["http://localhost:3000"]
    }
  });
  const configService = app.get(ConfigService);
  const port = configService.get("port");
  app.useGlobalPipes(new ValidationPipe());


  const config = new DocumentBuilder()
    .setTitle("My CRM")
    .setDescription("The crm API description")
    .setVersion("1.0")
    .addTag("CRM")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(port);
}

bootstrap();
