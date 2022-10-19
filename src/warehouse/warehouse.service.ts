import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Warehouse } from '@prisma/client';

@Injectable()
export class WarehouseService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllWarehouses(): Promise<Warehouse[]> {
    return this.prismaService.warehouse.findMany();
  }

  async createWarehouse(name: string): Promise<Warehouse> {
    return this.prismaService.warehouse.create({
      data: {
        name,
      },
    });
  }

  async getWarehouseAndProducts(id: string): Promise<Warehouse> {
    return this.prismaService.warehouse.findFirst({
      where: {
        id: +id,
      },
      select: {
        id: true,
        name: true,
        products: {
          select: {
            id: true,
            name: true,
            amount: true,
            price: true,
          },
        },
      },
    });
  }
}
