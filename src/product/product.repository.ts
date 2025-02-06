import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/sequelize';
import { ProductModel } from './entities/product.model';

@Injectable()
export class ProductRepository {
  constructor(@InjectModel(Product) private repo: typeof Product) {}

  async create(newProduct: ProductModel): Promise<ProductModel> {
    const res = await this.repo.create({ ...newProduct });
    return { ...res };
  }

  async findAll() {
    return await this.repo.findAll();
  }
  async findOne(id: number): Promise<Product> {
    const product = await this.repo.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  async update(
    id: number,
    productData: Partial<ProductModel>,
  ): Promise<Product> {
    const product = await this.findOne(id);
    await product.update(productData);
    return product;
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await product.destroy();
  }
}
