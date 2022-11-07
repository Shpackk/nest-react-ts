import { Injectable } from '@nestjs/common';
import { ProductDto, UpdateProductDto } from './dto/product.dto';
import { PrismaService } from 'src/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async addProductToWarehouse(id: string, product: ProductDto): Promise<any> {
    return await this.prismaService.product.create({
      data: {
        ...product,
        warehouseId: +id,
      },
    });
  }

  async getAllProductsByWarehouse(id: string): Promise<Product[]> {
    return this.prismaService.product.findMany({
      where: {
        warehouseId: +id,
      },
    });
  }

  async updateProductInfo(
    id: string,
    product: UpdateProductDto,
  ): Promise<Product> {
    return this.prismaService.product.update({
      where: {
        id: +id,
      },
      data: {
        amount: {
          increment: +product.amount,
        },
      },
    });
  }
}
