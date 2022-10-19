import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto, UpdateProductDto } from './dto/product.dto';
import { Product } from '@prisma/client';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products/:id')
  async getWareHouseProducts(@Param('id') id: string): Promise<Product[]> {
    return this.productService.getAllProductsByWarehouse(id);
  }

  @Post('products/:id')
  async addProductToWarehouse(
    @Param('id') id: string,
    @Body() product: ProductDto,
  ): Promise<Product> {
    return this.productService.addProductToWarehouse(id, product);
  }

  @Patch('products/:id')
  async updateProductInfo(
    @Param('id') id: string,
    @Body() product: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProductInfo(id, product);
  }
}
