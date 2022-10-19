import { Body, Controller, Get, Post } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { Warehouse as WarehouseModel } from '@prisma/client';

@Controller()
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Get('warehouse/')
  async getAllWarehouses(): Promise<WarehouseModel[]> {
    return this.warehouseService.getAllWarehouses();
  }

  @Post('warehouse/')
  async createWarehouse(@Body('name') name: string): Promise<WarehouseModel> {
    return this.warehouseService.createWarehouse(name);
  }
}
