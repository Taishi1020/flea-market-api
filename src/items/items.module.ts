import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';

//商品コントローラとセットのモジュール
@Module({
  controllers: [ItemsController],
})
export class ItemsModule {}
