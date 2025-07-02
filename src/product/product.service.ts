import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CacheService } from 'src/cache.service';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private readonly cache: CacheService,
  ) {}
  async getProducts() {
    const key = 'products_all';
    const cached = await this.cache.get(key);
    if (cached) {
      console.log('-----cache redis-----');
      return cached;
    }

    console.log('------Consultando datos originales-----');
    await new Promise((res) => setTimeout(res, 2000));

    const data = await this.productRepository.find();

    await this.cache.set(key, data, 20);
    console.log('----Guardando en cache----');
    return data;
  }
}
