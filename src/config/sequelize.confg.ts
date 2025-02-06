import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Product } from 'src/product/entities/product.entity';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: '.db/data.sqlite3',
  autoLoadModels: true,
  synchronize: true,
  models: [Product],
};
