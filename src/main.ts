import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const PORT = Number(process.env.LOCAL_PORT);

const bootstrap = async () => {
  await NestFactory.create(AppModule).then(async (app) => {
    await app.listen(PORT);
  });
};
bootstrap().then(() => {
  console.log(`Server is running on port ${PORT}`);
});
