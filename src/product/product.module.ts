import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductRepository } from './product.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductRepository, ProductService],
  imports: [SequelizeModule.forFeature([Product])],
})
export class ProductModule {}
