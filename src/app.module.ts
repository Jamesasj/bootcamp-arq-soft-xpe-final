import { Module } from '@nestjs/common';
import { dataBaseConfig } from './config/sequelize.confg';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './product/product.module';
import { ProductRepository } from './product/product.repository';

@Module({
  imports: [
    SequelizeModule.forRoot(dataBaseConfig),
    ProductModule,
  ],
})
export class AppModule {}
