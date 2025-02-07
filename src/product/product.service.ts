import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';
import { ProductModel } from './entities/product.model';

@Injectable()
export class ProductService {
  constructor(private readonly repo: ProductRepository) {}

  async create(createProductDto: CreateProductDto): Promise<ProductModel> {
    const newProduct: ProductModel = { ...createProductDto };
    return await this.repo.create(newProduct);
  }

  async findAll() {
    return await this.repo.findAll();
  }

  async findOne(id: number) {
    return await this.repo.findOne(id);
  }

  async findByName(name: string) {
    return await this.repo.findByName(name);
  }

  async update(id: number, productData: Partial<ProductModel>) {
    return await this.repo.update(id, productData);
  }

  async remove(id: number) {
    await this.repo.remove(id);
  }

  async count() {
    return await this.repo.count();
  }
}
