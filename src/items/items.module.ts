import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

//商品コントローラとセットのモジュール
@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
