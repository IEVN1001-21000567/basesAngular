import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos:IProductos[]=[
    {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion": "4 Puertas",
      "Year":"marzo 2 2020",
      "Precio":2000,
      "Color":"Azul",
      "Marca":"AUDI",
      "ImagenUrl": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
    },
    {
      "ProductoId":2,
      "Modelo":"Rio",
      "Descripcion": "4 Puertas",
      "Year":"marzo 2 2024",
      "Precio":4000,
      "Color":"Blanco",
      "Marca":"AUDI",
      "ImagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfpz8rQSRQvYABTP7NQ4NA9C0_jW1u9oOXQ&s"
    },
    {
      "ProductoId":3,
      "Modelo":"Aveo",
      "Descripcion": "4 Puertas",
      "Year":"septiempre 19 2025",
      "Precio":4500,
      "Color":"negro",
      "Marca":"AUDI",
      "ImagenUrl": "https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/cars/2024-aveo-sedan/colorizer/01-images/rojo-metalico.jpg?imwidth=960"
    },
  ]
}
