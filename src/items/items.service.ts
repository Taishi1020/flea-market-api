import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  fidAll() {
    return 'this is Items Service';
  }
  //CRUD作成
  create(item: Item): Item {
    this.items.push(item);
    return item;
  }
}
