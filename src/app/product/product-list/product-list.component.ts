import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos:any[]=[
    {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion": "4 Puertas",
      "Year":"marzo 2 2020",
      "Precio":"2000",
      "Color":"Azul",
      "Marca":"AUDI",
      "ImagenUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.expansion.com%2Fempresas%2Fmotor%2F2023%2F01%2F02%2F63b2c5afe5fdeaa86d8b456d.html&psig=AOvVaw0dLp87nnQRTEIbdCH2Az9R&ust=1726886349108000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjjqI2_0IgDFQAAAAAdAAAAABAE"
    },
    {
      "ProductoId":2,
      "Modelo":"Rio",
      "Descripcion": "4 Puertas",
      "Year":"marzo 2 2024",
      "Precio":"4000",
      "Color":"Blanco",
      "Marca":"AUDI",
      "ImagenUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.autobild.es%2Fnoticias%2Flamborghini-fin-ha-confirmado-tipo-coche-tanto-tiempo-llevabamos-esperando-1283840&psig=AOvVaw0dLp87nnQRTEIbdCH2Az9R&ust=1726886349108000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjjqI2_0IgDFQAAAAAdAAAAABAJ "
    },
    {
      "ProductoId":3,
      "Modelo":"Aveo",
      "Descripcion": "4 Puertas",
      "Year":"septiempre 19 2025",
      "Precio":"4500",
      "Color":"negro",
      "Marca":"AUDI",
      "ImagenUrl": ""
    },
  ]
}
