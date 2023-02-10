import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-167.railway.app',
      port: 7876,
      database: 'railway',
      username: 'postgres',
      password: 'e24bcLnCAJcZLWo0VrLc',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true, // never true in production!
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}