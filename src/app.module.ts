import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataBaseConfig } from './config/sequelize.confg';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './product/product.module';

@Module({
  imports: [SequelizeModule.forRoot(dataBaseConfig), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
