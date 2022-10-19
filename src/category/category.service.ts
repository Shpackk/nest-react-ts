import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Category as CategoryModel } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllCategories(id: string): Promise<CategoryModel[]> {
    return this.prismaService.category.findMany({
      where: {
        warehouseId: +id,
      },
    });
  }

  async getOneById(id: string): Promise<CategoryModel> {
    return this.prismaService.category.findUnique({
      where: {
        id: +id,
      },
    });
  }

  async deleteOneById(id: string): Promise<CategoryModel> {
    return this.prismaService.category.delete({
      where: {
        id: +id,
      },
    });
  }

  async createCategory(name: string, id: string): Promise<any> {
    return await this.prismaService.category.create({
      data: {
        name,
        warehouseId: +id,
      },
    });
  }
}
