import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { CacheService } from './cache.service';
import { MoviesModule } from './movies/movies.module';
import 'dotenv/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT!, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'suser',
      database: process.env.DB_NAME || 'test',
      entities: [Product],
      synchronize: true,
    }),
  ProductModule,
    MoviesModule],
    controllers: [AppController],
    providers: [AppService, CacheService],
})
export class AppModule {}
