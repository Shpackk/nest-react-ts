import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category as CategoryModel } from '@prisma/client';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // get categories by warehouse
  @Get('categories/:id')
  async getCategories(@Param('id') id: string): Promise<CategoryModel[]> {
    return this.categoryService.getAllCategories(id);
  }

  // @Get('category/:id')
  // async getCategory(@Param('id') id: string): Promise<CategoryModel> {
  //   return this.categoryService.getOneById(id);
  // }

  @Delete('category/:id')
  async deleteCategory(@Param('id') id: string): Promise<CategoryModel> {
    return this.categoryService.deleteOneById(id);
  }

  @Post('category/:id')
  async createCategory(
    @Body('name') name: string,
    @Param('id') id: string,
  ): Promise<CategoryModel> {
    return this.categoryService.createCategory(name, id);
  }
}

/*

    get
    post
    delete

*/
