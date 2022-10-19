import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { Category as CategoryModel } from '@prisma/client';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products/:id')
  async getCategoryProducts(@Param('id') id: string): Promise<CategoryModel> {
    return this.productService.getAllCategoryProducts(id);
  }

  @Post('products/:id')
  async addProductToCategory(
    @Param('id') id: string,
    @Body() product: ProductDto,
  ) {
    return this.productService.addProduct(id, product);
  }
}
