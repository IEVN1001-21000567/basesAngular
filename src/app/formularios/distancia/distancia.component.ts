import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent implements OnInit {
  formulario!: FormGroup;
  resultado:number=0;

 constructor(){}
 ngOnInit(): void {
   this.formulario=new FormGroup({
    ejeAx: new FormControl('',Validators.required),
    ejeAy: new FormControl('',Validators.required),
    ejeBx: new FormControl('',Validators.required),
    ejeBy: new FormControl('',Validators.required)
   });
 }
 sumarNumeros(): void{
  const ejeAx= this.formulario.get('ejeAx')?.value;
  const ejeAy= this.formulario.get('ejeAy')?.value;
  const ejeBx= this.formulario.get('ejeBx')?.value;
  const ejeBy= this.formulario.get('ejeBy')?.value;
  this.resultado= Math.sqrt(((ejeBx-ejeAx)*(ejeBx-ejeAx))+((ejeBy-ejeAy)*(ejeBy-ejeAy)));
 }

}
