import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { CacheService } from './cache.service';
import { MoviesModule } from './movies/movies.module';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT!, 10) || 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'suser',
        database: process.env.DB_NAME || 'test',
        entities: [],
        synchronize: true, // Set to false in production
    }), MoviesModule],
    controllers: [AppController],
    providers: [AppService, CacheService],
=======
import 'dotenv/config';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
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
  ProductModule
  ],
>>>>>>> 9f11c654305097a73297d23ba966dc095874ac78
})
export class AppModule {}
