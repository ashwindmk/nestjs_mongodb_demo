import { Item } from "../interfaces/item.interface";

export class CreateItemDto implements Item {
    readonly name: string;
    readonly description: string;
    readonly quantity: number;
}
