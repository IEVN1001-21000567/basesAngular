import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent implements OnInit {
  formulario!: FormGroup;
  nombre:string="";
  edad:number=0;
  signo:string="";
  img:string="";

 constructor(){}
 ngOnInit(): void {
   this.formulario=new FormGroup({
    Nombre: new FormControl('',Validators.required),
    aPaterno: new FormControl('',Validators.required),
    aMaterno: new FormControl('',Validators.required),
    dia: new FormControl('',Validators.required),
    mes: new FormControl('',Validators.required),
    año: new FormControl('',Validators.required),
    sexfem:new FormControl('',Validators.required),
    sexmasc: new FormControl('',Validators.required)
   });
 }
 obtenerSigno(): void{
  const Nombre= this.formulario.get('Nombre')?.value;
  const aPaterno= this.formulario.get('aPaterno')?.value;
  const aMaterno= this.formulario.get('aMaterno')?.value;
  const dia= this.formulario.get('dia')?.value;
  const mes= this.formulario.get('mes')?.value;
  const año= this.formulario.get('año')?.value;
  const sexfem= this.formulario.get('dia')?.value;
  
  if (dia && mes && año) {
    // Calcular la edad
    const hoy = new Date();
    const nacimiento = new Date(año, mes - 1, dia);
    this.edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesDif = hoy.getMonth() - nacimiento.getMonth();
    if (mesDif < 0 || (mesDif === 0 && hoy.getDate() < nacimiento.getDate())) {
      this.edad--;
    }
  }
  this.nombre= Nombre +" "+ aPaterno+" "+ aMaterno;
 // this.edad=2024-año;
 if (año === 1900 || año === 1912 || año === 1924 || año === 1936 || año === 1948 || año === 1960 || año === 1972 || año === 1984 || año === 1996 || año === 2008 || año === 2020) {
  this.signo = "Rata";
  this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdpD17ek28ExFCoc5Xw9lR_amIsbWIuPs4g&s";
} else if (año === 1901 || año === 1913 || año === 1925 || año === 1937 || año === 1949 || año === 1961 || año === 1973 || año === 1985 || año === 1997 || año === 2009 || año === 2021) {
  this.signo = "Búfalo";
  this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnlqRzN8wPoL4npoUMWf95kGtU24XRhYNpow&s";
} else if (año === 1938 || año === 1950 || año === 1962 || año === 1974 || año === 1986 || año === 1998 || año === 2010 || año === 2022) {
  this.signo = "Tigre";
  this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZrgLhjkaxOfSB7NcBQuLYDUZ9bCq2b_OQCQ&s";
} else if (año === 1939 || año === 1951 || año === 1963 || año === 1975 || año === 1987 || año === 1999 || año === 2011 || año === 2023) {
  this.signo = "Conejo";
  this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptECWpMY-3dR6jcy4Hia6h9kXRuTUwo3uRw&s";
} else if (año === 1940 || año === 1952 || año === 1964 || año === 1976 || año === 1988 || año === 2000 || año === 2012 || año === 2024) {
  this.signo = "Dragón";
  this.img = "https://i.pinimg.com/736x/8f/0e/e8/8f0ee8bcd5e9fde092ea8f5309c01800.jpg";
} else if (año === 1941 || año === 1953 || año === 1965 || año === 1977 || año === 1989 || año === 2001 || año === 2013) {
  this.signo = "Serpiente";
  this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3yWTSz2yYWI5RlmhHYXAzxNwh5kJvYHi-Q&s";
} else if (año === 1942 || año === 1954 || año === 1966 || año === 1978 || año === 1990 || año === 2002 || año === 2014) {
  this.signo = "Caballo";
  this.img = "https://static.vecteezy.com/system/resources/previews/002/185/147/non_2x/chinese-zodiac-sign-animal-horse-cartoon-lunar-astrology-drawing-vector.jpg";
} else if (año === 1943 || año === 1955 || año === 1967 || año === 1979 || año === 1991 || año === 2003 || año === 2015) {
  this.signo = "Cabra";
  this.img = "https://static.vecteezy.com/system/resources/previews/002/185/139/original/chinese-zodiac-sign-animal-goat-cartoon-lunar-astrology-drawing-vector.jpg";
} else if (año === 1944 || año === 1956 || año === 1968 || año === 1980 || año === 1992 || año === 2004 || año === 2016) {
  this.signo = "Mono";
  this.img = "https://static.vecteezy.com/system/resources/previews/002/185/144/original/chinese-zodiac-sign-animal-monkey-cartoon-ape-lunar-astrology-drawing-vector.jpg";
} else if (año === 1945 || año === 1957 || año === 1969 || año === 1981 || año === 1993 || año === 2005 || año === 2017) {
  this.signo = "Gallo";
  this.img = "https://static.vecteezy.com/system/resources/previews/002/185/153/non_2x/chinese-zodiac-sign-animal-rooster-chicken-cartoon-drawing-vector.jpg";
} else if (año === 1946 || año === 1958 || año === 1970 || año === 1982 || año === 1994 || año === 2006 || año === 2018) {
  this.signo = "Perro";
  this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jSQFEyKXJnUcXO0NFQu8gOf180EnCWGGkA&s";
} else if (año === 1947 || año === 1959 || año === 1971 || año === 1983 || año === 1995 || año === 2007 || año === 2019) {
  this.signo = "Cerdo";
  this.img = "https://www.euroresidentes.com/horoscopo-chino/2017/imagenes/pig-euroresidentes.jpg";
}

  }
}
