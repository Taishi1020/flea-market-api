import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';

//大元のモジュール
@Module({
  imports: [ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
