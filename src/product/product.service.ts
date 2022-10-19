import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { PrismaService } from 'src/prisma.service';
import { Category as CategoryModel } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllCategoryProducts(id: string): Promise<CategoryModel> {
    return this.prismaService.category.findUnique({
      where: {
        id: +id,
      },
      include: {
        products: true,
      },
    });
  }

  async addProduct(id: string, product: ProductDto) {
    const newProduct = await this.prismaService.product.create({
      data: {
        name: product.name,
        amount: product.amount,
        price: product.price,
        categoryId: +id,
      },
    });
    const oldVer = await this.prismaService.category.findUnique({
      where: { id: +id },
      include: {
        products: true,
      },
    });
  }
}
