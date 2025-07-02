import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('pokemons')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) { }

    @Get(':type')
    async getPokemonsByType(@Param('type') type: string): Promise<any> {
        return this.moviesService.getPokemonsByType(type);
    }
}
