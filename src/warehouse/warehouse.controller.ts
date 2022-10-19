import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { Warehouse } from '@prisma/client';

@Controller()
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Get('warehouse/')
  async getAllWarehouses(): Promise<Warehouse[]> {
    return this.warehouseService.getAllWarehouses();
  }

  @Get('warehouse/:id')
  async getWareHouseAndProducts(@Param('id') id: string): Promise<Warehouse> {
    return this.warehouseService.getWarehouseAndProducts(id);
  }

  @Post('warehouse/')
  async createWarehouse(@Body('name') name: string): Promise<Warehouse> {
    return this.warehouseService.createWarehouse(name);
  }
}
