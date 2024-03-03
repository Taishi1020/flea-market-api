import { Controller, Get } from '@nestjs/common';

//商品コントローラーの定義
@Controller('items')
export class ItemsController {
  @Get()
  findAll() {
    return 'This is findAll';
  }
}
