import { Injectable } from '@nestjs/common';
import { Producto } from 'src/interfaces/producto/producto.interface';

@Injectable()
export class ProductosService {
  private productos: Producto[] = [];
  create(producto: Producto) {
    this.productos.push(producto);
  }

  findAll(): Producto[] {
    return this.productos;
  }

  findOne(nombre) {
    const prod = this.productos.find((producto) => producto.nombre == nombre);
    return prod;
  }

  update(nombre, producto: Producto) {
    const prodIndex = this.productos.findIndex(
      (producto) => producto.nombre == nombre,
    );
    this.productos[prodIndex] = producto;
    return this.productos[prodIndex];
  }

  delete(nombre) {
    let prodIndex = -1;
    prodIndex = this.productos.findIndex(
      (producto) => producto.nombre == nombre,
    );
    if (prodIndex > -1)
      this.productos = this.productos.filter((p) => p.nombre != nombre);
    return true;
  }
}
