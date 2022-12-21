import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { CreateProductoDto } from 'src/dto/create-producto.dto';
import { Producto } from 'src/interfaces/producto/producto.interface';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    this.productosService.create(createProductoDto);
  }

  @Get()
  async findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':nombre')
  findOne(@Param('nombre') nombre: string) {
    return this.productosService.findOne(nombre);
  }

  @Put(':nombre')
  update(
    @Param('nombre') nombre: string,
    @Body() createProductoDto: CreateProductoDto,
  ) {
    return this.productosService.update(nombre, createProductoDto);
  }

  @Delete(':nombre')
  remove(@Param('nombre') nombre: string) {
    return this.productosService.delete(nombre);
  }
}
