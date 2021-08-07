import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

// For mongodb
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private itemModel: Model<ItemDocument>) {}

    private readonly items: Item[] = [
        {id: "123542364541", name: "Item 1", description: "This is item 1", quantity: 2},
        {id: "123542364542", name: "Item 2", description: "This is item 2", quantity: 3},
        {id: "123542364543", name: "Item 3", description: "This is item 3", quantity: 5},
        {id: "123542364544", name: "Item 4", description: "This is item 4", quantity: 4},
        {id: "123542364545", name: "Item 5", description: "This is item 5", quantity: 3},
        {id: "123542364546", name: "Item 6", description: "This is item 6", quantity: 2},
        {id: "123542364547", name: "Item 7", description: "This is item 7", quantity: 1}
    ];

    // findAll(): Item[] {
    //     return this.items;
    // }

    async findAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    // findOne(id: string): Item {
    //     return this.items.find(item => item.id === id);
    // }

    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id });
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndDelete(id);
    }

    async update(id: string, item: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
}
