import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';

@Controller()
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Get('warehouse/')
  async getAllWarehouses() {
    return this.warehouseService.getAllWarehouses();
  }

  @Get('warehouse/:id')
  async getWareHouseAndProducts(@Param('id') id: string) {
    return this.warehouseService.getWarehouseAndProducts(id);
  }

  @Post('warehouse/')
  async createWarehouse(@Body('name') name: string) {
    return this.warehouseService.createWarehouse(name);
  }

  @Delete('warehouse/')
  async deleteWarehouse(@Body('name') name: string) {
    return this.warehouseService.deleteWarehouse(name);
  }
}
