import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CacheService } from 'src/cache.service';

@Injectable()
export class MoviesService {

    constructor(private readonly cacheService: CacheService,
        private readonly httpService: HttpService) {

    }

    async getPokemonsByType(type: string): Promise<any> {
        const cacheKey = 'movies';
        const cachedPokemons = await this.cacheService.get(cacheKey);

        if (cachedPokemons) {
            console.log('Returning cached movies');
            return cachedPokemons;
        }

        console.log('Fetching movies from API');
        const response = await this.httpService.axiosRef.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
        const pokemons = response.data;

        // Filter pokemons by type
        const filteredPokemons = pokemons.results.filter(pokemon => {
            return pokemon.types && pokemon.types.some(p => p.type.name === type);
        });

        await this.cacheService.set(cacheKey, pokemons, 3600); // Cache for 1 hour
        return pokemons;
    }


}
