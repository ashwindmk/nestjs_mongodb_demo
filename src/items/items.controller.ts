import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get('express')
    expressFormat(@Req() req: Request, @Res() res: Response): Response {
        console.log(req.url);
        return res.send('Hello Express');
    }

    // @Get()
    // findAll(): string {
    //     return 'Get all items';
    // }

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    // @Get(':id')
    // findOne(@Param() param): string {
    //     return `Found item ${param.id}`;
    // }

    // @Get(':id')
    // findById(@Param('id') id): string {
    //     return `Found item ${id}`;
    // }

    @Get(':id')
    findById(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Get(':id/:name')
    findByIdName(@Param() param): string {
        return `Found item ${param.id}: ${param.name}`;
    }

    // @Post()
    // create(@Body() createItemDto: CreateItemDto): string {
    //     return `Created ${createItemDto.name}`;
    // }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto);
    }

    // @Delete(':id')
    // delete(@Param('id') id): string {
    //     return `Deleted item ${id}`;
    // }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);
    }

    // @Put(':id')
    // update(@Param('id') id, @Body() updateItemDto: CreateItemDto): string {
    //     return `Updated item ${id} to ${updateItemDto.name}`;
    // }

    @Put(':id')
    update(@Param('id') id, @Body() updateItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.update(id, updateItemDto);
    }
}
