import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { HttpModule } from '@nestjs/axios';
import { CacheService } from 'src/cache.service';

@Module({
    imports: [HttpModule],
  controllers: [MoviesController],
  providers: [CacheService, MoviesService],
})
export class MoviesModule {}
