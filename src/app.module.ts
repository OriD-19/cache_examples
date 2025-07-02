import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
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
})
export class AppModule { }
