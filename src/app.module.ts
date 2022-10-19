import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { WarehouseModule } from './warehouse/warehouse.module';

@Module({
  imports: [ProductModule, WarehouseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
