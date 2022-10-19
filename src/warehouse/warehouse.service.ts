import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Warehouse as WarehouseModel } from '@prisma/client';

@Injectable()
export class WarehouseService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllWarehouses(): Promise<WarehouseModel[]> {
    return this.prismaService.warehouse.findMany();
  }

  async createWarehouse(name: string): Promise<WarehouseModel> {
    return this.prismaService.warehouse.create({
      data: {
        name,
      },
    });
  }
}
