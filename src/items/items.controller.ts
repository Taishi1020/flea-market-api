import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
import { ItemsStatus } from './item-status';

//商品コントローラーの定義
@Controller('items')
export class ItemsController {
  //itemsのserviceを呼び出している
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.fidAll();
  }

  //商品作成API作成
  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ): Item {
    const item: Item = {
      id,
      name,
      price,
      description,
      status: ItemsStatus.ON_SALE,
    };
    return this.itemsService.create(item);
  }
}
